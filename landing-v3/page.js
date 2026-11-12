import { campaignConfig } from './config.js';

const instrument = document.body.dataset.instrument;
const instrumentLabel = document.body.dataset.label;
const parameterNames = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'utm_id', 'sck', 'fbclid'];
const storageKey = `mvave_v3_campaign_${instrument}`;
const ttl = 30 * 24 * 60 * 60 * 1000;

// Escopo próprio: nunca escreve na atribuição das páginas que já estão em tráfego.
export function captureCampaign(search, storage, now = Date.now()) {
  let previous = {};
  try {
    const saved = JSON.parse(storage?.getItem(storageKey) || 'null');
    if (saved?.expiresAt > now) previous = saved.parameters || {};
  } catch (_) { /* Checkout funciona mesmo sem armazenamento. */ }
  const params = new URLSearchParams(search);
  const incoming = Object.fromEntries(parameterNames.filter(key => params.get(key)).map(key => [key, params.get(key)]));
  const unresolved = value => /\{\{[\s\S]*?\}\}/.test(value || '');
  if (unresolved(previous.sck)) delete previous.sck;
  if (unresolved(incoming.sck)) {
    delete incoming.sck;
    if (previous.sck) incoming.sck = previous.sck;
  }
  const selected = Object.keys(incoming).length ? incoming : previous;
  const clean = Object.fromEntries(parameterNames.filter(key => typeof selected[key] === 'string' && selected[key]).map(key => [key, selected[key]]));
  try { storage?.setItem(storageKey, JSON.stringify({ parameters: clean, expiresAt: now + ttl })); } catch (_) {}
  return Object.freeze(clean);
}

let storage;
try { storage = window.sessionStorage; } catch (_) {}
const campaign = captureCampaign(window.location.search, storage);
document.querySelectorAll('[data-checkout]').forEach(link => {
  const url = new URL(link.href);
  for (const [key, value] of Object.entries(campaign)) url.searchParams.set(key, value);
  link.href = url.href;
});

const banner = document.querySelector('[data-black-november]');
if (banner && !campaignConfig.blackNovember) banner.remove();

const clockFormat = new Intl.DateTimeFormat('en-GB', {
  timeZone: 'America/Sao_Paulo', hour: '2-digit', minute: '2-digit', second: '2-digit', hourCycle: 'h23'
});
export function dailyCountdown(now = new Date()) {
  const parts = Object.fromEntries(clockFormat.formatToParts(now).map(part => [part.type, part.value]));
  const remaining = 86400 - (+parts.hour * 3600 + +parts.minute * 60 + +parts.second);
  return [Math.floor(remaining / 3600), Math.floor(remaining / 60) % 60, remaining % 60].map(n => String(n).padStart(2, '0')).join(':');
}
const timer = document.querySelector('[data-countdown]');
function tick() { if (timer) timer.textContent = dailyCountdown(); }
tick();
setInterval(tick, 1000);
document.addEventListener('visibilitychange', tick);

// Um pixel por documento; o instrumento e o pack distinguem cada evento.
const pixelId = campaignConfig.pixelIds[instrument];
function initPixel() {
  if (window.fbq) return;
  const fbq = window.fbq = function() {
    fbq.callMethod ? fbq.callMethod.apply(fbq, arguments) : fbq.queue.push(arguments);
  };
  if (!window._fbq) window._fbq = fbq;
  fbq.push = fbq; fbq.loaded = true; fbq.version = '2.0'; fbq.queue = [];
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://connect.facebook.net/en_US/fbevents.js';
  document.head.append(script);
}
function track(name, product, custom = false) {
  if (!pixelId) return;
  const link = product ? document.querySelector(`[data-checkout="${product}"]`) : null;
  const data = {
    content_name: link?.dataset.name || `Pack de IRs para ${instrumentLabel}`,
    content_ids: [product || document.body.dataset.product],
    content_type: 'product', content_category: instrumentLabel,
    instrument, landing_version: 'v3', currency: 'BRL',
    ...(link ? { value: Number(link.dataset.value), num_items: 1 } : {})
  };
  try { window.fbq(custom ? 'trackSingleCustom' : 'trackSingle', pixelId, name, data); } catch (_) {}
}
if (pixelId) {
  initPixel();
  window.fbq('init', pixelId);
  track('PageView');
  track('ViewContent');
}
document.querySelectorAll('[data-checkout]').forEach(link => {
  link.addEventListener('click', () => track('InitiateCheckout', link.dataset.checkout));
  link.addEventListener('auxclick', event => { if (event.button === 1) track('InitiateCheckout', link.dataset.checkout); });
});
document.querySelectorAll('[data-whatsapp]').forEach(link => link.addEventListener('click', () => track('Contact')));
