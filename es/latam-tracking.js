const STORAGE_KEY = "mvave_latam_campaign_tracking";
const STORAGE_MAX_AGE_MS = 30 * 24 * 60 * 60 * 1000;

export const LATAM_CAMPAIGN_PARAMETER_NAMES = Object.freeze([
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_id",
  "utm_term",
  "utm_content",
  "sck",
  "src",
  "fbclid"
]);

let volatileRecord = null;

function availableStorage(storageOverride) {
  if (storageOverride !== undefined) return storageOverride;
  try {
    return typeof window !== "undefined" ? window.localStorage : null;
  } catch (_) {
    return null;
  }
}

function clean(parameters) {
  const result = {};
  LATAM_CAMPAIGN_PARAMETER_NAMES.forEach(function(name) {
    const value = parameters && parameters[name];
    if (typeof value === "string" && value.trim()) result[name] = value.trim();
  });
  return result;
}

export function campaignParametersFromSearch(search) {
  const source = new URLSearchParams(search || "");
  const parameters = {};
  LATAM_CAMPAIGN_PARAMETER_NAMES.forEach(function(name) {
    const value = source.get(name);
    if (value) parameters[name] = value;
  });
  return parameters;
}

export function readLatamCampaign(options) {
  const settings = options || {};
  const storage = availableStorage(settings.storage);
  const now = typeof settings.now === "number" ? settings.now : Date.now();
  let record = volatileRecord;

  if (storage) {
    try {
      const saved = storage.getItem(STORAGE_KEY);
      record = saved ? JSON.parse(saved) : volatileRecord;
    } catch (_) {
      record = volatileRecord;
    }
  }

  if (!record || typeof record.expiresAt !== "number" || record.expiresAt <= now) {
    volatileRecord = null;
    if (storage) {
      try { storage.removeItem(STORAGE_KEY); } catch (_) {}
    }
    return {};
  }

  return clean(record.parameters);
}

export function captureLatamCampaign(search, options) {
  const settings = options || {};
  const storage = availableStorage(settings.storage);
  const now = typeof settings.now === "number" ? settings.now : Date.now();
  const parameters = campaignParametersFromSearch(search);

  // Una visita directa nunca borra el último clic atribuido. Cualquier URL con
  // datos de campaña reemplaza el origen anterior y reinicia la vigencia.
  if (!Object.keys(parameters).length) {
    return readLatamCampaign({ storage: storage, now: now });
  }

  const record = { parameters: parameters, expiresAt: now + STORAGE_MAX_AGE_MS };
  volatileRecord = record;
  if (storage) {
    try { storage.setItem(STORAGE_KEY, JSON.stringify(record)); } catch (_) {}
  }
  return parameters;
}

export function buildLatamCheckoutUrl(checkoutUrl, parameters, baseUrl) {
  if (!checkoutUrl) return "";
  const fallbackBase = baseUrl || (typeof window !== "undefined" ? window.location.href : "https://mvave.com.br/");
  const url = new URL(checkoutUrl, fallbackBase);
  const campaign = clean(parameters);
  LATAM_CAMPAIGN_PARAMETER_NAMES.forEach(function(name) {
    if (campaign[name]) url.searchParams.set(name, campaign[name]);
  });
  return url.toString();
}

export function initializeLatamTracking(search, options) {
  const currentSearch = search !== undefined
    ? search
    : (typeof window !== "undefined" ? window.location.search : "");
  return captureLatamCampaign(currentSearch, options);
}

export function trackedLatamCheckoutUrl(checkoutUrl) {
  return buildLatamCheckoutUrl(checkoutUrl, initializeLatamTracking());
}
