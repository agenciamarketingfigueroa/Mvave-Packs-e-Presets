import { initializeCampaignTracking, buildTrackedCheckoutUrl } from '/campaign-tracking.js';
import { configs, products } from './config.js';

const config = configs[document.body.dataset.instrument];
const product = products[config.instrument];
const count = product.count.match(/^[\d.]+/)[0];
// Snapshot por página: uma campanha aberta em outra aba não altera este checkout.
const campaign = Object.freeze({ ...initializeCampaignTracking() });
const root = document.querySelector('#quiz');
const status = document.querySelector('#quiz-status');
let step = 1;
let installation = null;
const escape = value => String(value).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
const arrow = '<span aria-hidden="true">→</span>';
const stageNames = ['Seu pack', 'O sorteio', 'Instalação', 'Videoaulas', 'A estreia', 'As regras', 'Escolha seu pack'];
const next = label => `<div class="raffle-action"><button type="button" class="btn raffle-primary" data-next>${label} ${arrow}</button><p class="raffle-next-hint">A seguir: ${stageNames[step]}</p></div>`;
const prizeText = 'Tank G, Tank B ou Blackbox';
function prizes() {
  return `<aside class="raffle-prizes" aria-label="Possíveis prêmios do sorteio">
    <div class="raffle-prizes-heading"><span class="raffle-badge">1 PEDAL POR MÊS</span><h2>Um destes pode ser seu.</h2><p>Tank G, Tank B ou Blackbox</p></div>
    <div class="raffle-prize-list">${[['Tank G', 'tank-g'], ['Tank B', 'tank-b'], ['Blackbox', 'annblack-box']].map(([name, file]) => `<figure class="raffle-prize"><div class="raffle-prize-photo${file === 'annblack-box' ? ' raffle-blackbox' : ''}"><img src="/assets/img/equipment/${file}.webp" alt="Pedal M-Vave ${name}" width="1000" height="1000"></div><figcaption>${name}</figcaption></figure>`).join('')}</div>
    <p class="raffle-prize-caption">Será sorteado <strong>um dos três modelos.</strong></p>
  </aside>`;
}

function track(event, extra = {}) {
  const data = { funnel: 'quiz_sorteio', instrument: config.instrument, step, installation, ...extra };
  try { window.dataLayer = window.dataLayer || []; window.dataLayer.push({ event, ...data }); } catch (_) {}
  try { if (typeof window.fbq === 'function') window.fbq('trackCustom', event, data); } catch (_) {}
}

function offer(key) {
  const item = products[key];
  const complete = key === 'completo';
  return `<article class="raffle-offer${complete ? ' raffle-complete' : ''}">
    <p class="eyebrow">${complete ? 'OS TRÊS INSTRUMENTOS' : 'SEU INSTRUMENTO'}</p>
    <h2>${complete ? 'Pack completo' : `Pack simples · ${config.label}`}</h2>
    <div class="raffle-offer-count"><strong>${item.count.match(/^[\d.]+/)[0]}</strong> IRs</div>
    <p>${complete ? 'Guitarra, baixo e violão' : `Biblioteca para ${config.possessive}`}</p>
    <ul class="raffle-benefits"><li>8 videoaulas de instalação</li><li>Acesso vitalício ao pack</li><li>Participação no sorteio, conforme as regras</li></ul>
    <details class="raffle-details"><summary>Ver formatos dos arquivos</summary><p>${item.count}</p></details>
    <div class="raffle-price"><small>Pagamento único</small><strong>R$ ${item.price}</strong></div>
    <a class="btn raffle-primary" data-checkout="${key}" href="${escape(buildTrackedCheckoutUrl(item.checkout, campaign))}">${complete ? 'Comprar o pack completo' : `Comprar pack de ${config.label.toLowerCase()}`} ${arrow}</a>
    <small>Acesso após a confirmação do pagamento.</small>
  </article>`;
}

function content() {
  switch (step) {
    case 1: return `<div class="raffle-hero"><div class="raffle-hero-copy"><p class="eyebrow">PACK DE ${config.label.toUpperCase()}</p>
      <h1 data-heading tabindex="-1">Leve <span class="raffle-count">${count} IRs</span> e concorra a <span>um pedal M-Vave.</span></h1>
      <p class="raffle-lead">Seu pack de timbres + videoaulas de instalação + participação no sorteio mensal.</p>
      <div class="raffle-chips"><span>Pack a partir de <strong>R$ 29,90</strong></span><span>Primeiro sorteio <strong>01/12/2026</strong></span></div>
      </div>${prizes()}</div>${next('Ver como comprar e concorrer')}`;
    case 2: return `<p class="eyebrow">SIMPLES DE PARTICIPAR</p><h1 data-heading tabindex="-1">Seu pack. Seu timbre.<br><span>Um sorteio por mês.</span></h1>
      <p class="raffle-lead">Vamos sortear um pedal por mês entre os alunos que comprarem um pack de IRs.</p>
      <ol class="raffle-how"><li><b>01</b><div><strong>Compre um pack</strong><span>Escolha seu instrumento ou o pack completo.</span></div></li><li><b>02</b><div><strong>Siga @mvavebr</strong><span>Nosso perfil no Instagram.</span></div></li><li><b>03</b><div><strong>Acompanhe o sorteio</strong><span>No dia 01 do próximo mês.</span></div></li></ol>
      <div class="raffle-note"><strong>Primeiro sorteio: 01/12/2026</strong><span>Prêmio: um dos três — ${prizeText}.</span></div>
      ${next('Quero meu pack e participar')}`;
    case 3: return `<p class="eyebrow">SÓ UMA PERGUNTA</p><h1 data-heading tabindex="-1">Você já sabe <span>instalar IRs?</span></h1>
      <p class="raffle-lead">Conte com a gente para começar a usar seu pack.</p>
      <div class="raffle-pack-summary"><span>Seu pack de ${config.label.toLowerCase()}</span><strong>${count} IRs</strong><small>${product.count}</small></div>
      <div class="raffle-options" role="group" aria-label="Você sabe instalar IRs?">
      <button class="raffle-choice" type="button" data-answer="yes" aria-pressed="${installation === 'yes'}"><span class="raffle-choice-icon" aria-hidden="true">✓</span><span><strong>Sim, já sei instalar!</strong><small>Já uso IRs no meu equipamento.</small></span>${arrow}</button>
      <button class="raffle-choice" type="button" data-answer="help" aria-pressed="${installation === 'help'}"><span class="raffle-choice-icon" aria-hidden="true">?</span><span><strong>Não, preciso de ajuda</strong><small>Quero aprender com um passo a passo.</small></span>${arrow}</button></div><p class="raffle-next-hint">Toque em uma opção para continuar.</p>`;
    case 4: return `<p class="eyebrow">PASSO A PASSO EM VÍDEO</p><h1 data-heading tabindex="-1">Do download ao pedal, <span>eu mostro o caminho.</span></h1>
      <p class="raffle-lead">${installation === 'yes' ? 'Você já sabe instalar — e ainda recebe as aulas para consultar quando quiser.' : 'Pode ficar tranquilo: gravei videoaulas para você baixar e instalar os IRs, passo a passo.'}</p>
      <span class="raffle-badge">8 VIDEOAULAS INCLUÍDAS NO PACK</span>
      <div class="raffle-lessons"><span><b>01</b> Baixe os arquivos</span><span><b>02</b> Aprenda a instalar</span><span><b>03</b> Explore seus timbres</span></div>
      <details class="raffle-details"><summary>Como funcionam as aulas?</summary><p>As 8 videoaulas mostram a configuração pelo computador e foram gravadas com um pedal M-Vave de guitarra. O editor e os passos podem variar conforme o modelo. O acesso é liberado junto com o pack após a confirmação do pagamento.</p></details>
      ${next('Quero o pack com as aulas')}`;
    case 5: return `<p class="eyebrow">NOSSO PRIMEIRO SORTEIO</p><h1 data-heading tabindex="-1">Participe desde <span>o primeiro sorteio.</span></h1>
      <p class="raffle-lead">É o primeiro sorteio que iremos fazer. Compre seu pack e participe da estreia!</p>
      <div class="raffle-date"><span>DEZEMBRO</span><strong>01</strong><span>2026 · PRIMEIRO SORTEIO</span></div>
      <p class="raffle-prize-caption">Um dos três pedais: <strong>${prizeText}.</strong></p>
      ${next('Conhecer as regras do sorteio')}`;
    case 6: return `<p class="eyebrow">COMO PARTICIPAR</p><h1 data-heading tabindex="-1">Regras <span>do sorteio.</span></h1>
      <ol class="raffle-rules"><li>Comprar um dos packs de IRs: <strong>Guitarra, Baixo, Violão ou Completo.</strong></li><li>Estar seguindo nosso perfil do Instagram <a href="https://www.instagram.com/mvavebr/" target="_blank" rel="noopener noreferrer">@mvavebr ↗</a>.</li></ol>
      <div class="raffle-note">Comprando junto nossos outros infoprodutos — <strong>Código dos Timbres</strong> e <strong>O Guia de Bolso do Timbre</strong> — você aumenta sua chance de ganhar.</div>
      <dl class="raffle-rule-facts"><div><dt>Quando</dt><dd>01/12/2026</dd></div><div><dt>Prêmio</dt><dd>Um dos três: ${prizeText}.</dd></div><div><dt>Resultado</dt><dd>Instagram e WhatsApp, com registro nos destaques.</dd></div></dl>
      ${next('Entendi. Quero escolher meu pack')}`;
    case 7: return `<p class="eyebrow">ESCOLHA SEU PACK</p><h1 data-heading tabindex="-1">Seu próximo timbre <span>começa aqui.</span></h1>
      <p class="raffle-lead">Só ${config.label.toLowerCase()} ou os três instrumentos? Escolha a biblioteca ideal para você.</p>
      <div class="raffle-offers">${offer(config.instrument)}${offer('completo')}</div>
      <div class="raffle-final-summary"><span>Pagamento único</span><span>Videoaulas incluídas</span><span>Checkout Hotmart</span></div>
      <p class="raffle-small">Prêmio: um dos três — ${prizeText}. Confira se seu equipamento aceita a importação dos formatos de IR incluídos. Participação no sorteio conforme as regras da etapa anterior.</p>`;
  }
}

function render(focus = true) {
  root.innerHTML = `<section class="raffle-step${step === 7 || step === 1 ? ' raffle-wide' : ''}" aria-labelledby="raffle-title">
    <div class="raffle-progress-label"><span>${config.label} <span aria-hidden="true">/</span> <strong>${stageNames[step - 1]}</strong></span><span>Etapa <strong>${step}</strong> de 7</span></div>
    <progress max="7" value="${step}" aria-label="Etapa ${step} de 7"></progress>
    <ol class="raffle-step-dots" aria-label="Seu progresso">${stageNames.map((name, i) => `<li class="${i + 1 < step ? 'is-done' : i + 1 === step ? 'is-current' : ''}"${i + 1 === step ? ' aria-current="step"' : ''}><span aria-hidden="true">${i + 1 < step ? '✓' : i + 1}</span><small>${name}</small></li>`).join('')}</ol>
    <div class="raffle-body">${content()}</div>
    ${step > 1 ? '<button class="quiz-back" type="button" data-back>← Voltar</button>' : ''}</section>`;
  const heading = root.querySelector('[data-heading]');
  heading.id = 'raffle-title';
  if (focus) { heading.focus({ preventScroll: true }); window.scrollTo({ top: 0, behavior: 'instant' }); }
  status.textContent = `Etapa ${step} de 7`;
  root.querySelector('[data-next]')?.addEventListener('click', () => {
    if (step === 1) track('quiz_started');
    step += 1; render();
  });
  root.querySelector('[data-back]')?.addEventListener('click', () => { step -= 1; render(); });
  root.querySelectorAll('[data-answer]').forEach(button => button.addEventListener('click', () => {
    installation = button.dataset.answer;
    track('quiz_installation_selected');
    step = 4; render();
  }));
  root.querySelectorAll('[data-checkout]').forEach(link => {
    const clicked = event => {
      if (event.type === 'auxclick' && event.button !== 1) return;
      track('quiz_checkout_clicked', { checkout_product: link.dataset.checkout });
    };
    link.addEventListener('click', clicked); link.addEventListener('auxclick', clicked);
  });
  track('quiz_step_viewed');
  if (step === 7) track('quiz_completed');
}
render(false);
