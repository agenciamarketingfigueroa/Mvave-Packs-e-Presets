const STORAGE_KEY = "mvave_campaign_tracking";
const STORAGE_MAX_AGE_MS = 30 * 24 * 60 * 60 * 1000;

export const CAMPAIGN_PARAMETER_NAMES = Object.freeze([
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "sck",
  "utm_id",
  "fbclid"
]);

let volatileRecord = null;

function browserStorage() {
  try {
    return typeof window !== "undefined" ? window.localStorage : null;
  } catch (_) {
    return null;
  }
}

function currentSearch() {
  return typeof window !== "undefined" && window.location ? window.location.search : "";
}

function sanitizeParameters(parameters) {
  const clean = {};
  CAMPAIGN_PARAMETER_NAMES.forEach(function(name) {
    const value = parameters && parameters[name];
    if (typeof value === "string" && value.length > 0) clean[name] = value;
  });
  return clean;
}

function parametersFromSearch(search) {
  const source = new URLSearchParams(search || "");
  const parameters = {};
  CAMPAIGN_PARAMETER_NAMES.forEach(function(name) {
    const value = source.get(name);
    if (value) parameters[name] = value;
  });
  return parameters;
}

function removeStoredRecord(storage) {
  volatileRecord = null;
  if (!storage) return;
  try {
    storage.removeItem(STORAGE_KEY);
  } catch (_) {
    // The checkout still works when browser privacy settings block storage.
  }
}

export function readCampaignParameters(options) {
  const settings = options || {};
  const storage = Object.prototype.hasOwnProperty.call(settings, "storage") ? settings.storage : browserStorage();
  const now = typeof settings.now === "number" ? settings.now : Date.now();
  let record = null;

  if (storage) {
    try {
      const saved = storage.getItem(STORAGE_KEY);
      record = saved ? JSON.parse(saved) : null;
    } catch (_) {
      record = volatileRecord;
    }
  } else {
    record = volatileRecord;
  }

  if (!record || typeof record.expiresAt !== "number" || record.expiresAt <= now) {
    if (record) removeStoredRecord(storage);
    return {};
  }

  const parameters = sanitizeParameters(record.parameters);
  if (!Object.keys(parameters).length) {
    removeStoredRecord(storage);
    return {};
  }
  return parameters;
}

export function captureCampaignParameters(search, options) {
  const settings = options || {};
  const storage = Object.prototype.hasOwnProperty.call(settings, "storage") ? settings.storage : browserStorage();
  const now = typeof settings.now === "number" ? settings.now : Date.now();
  const parameters = parametersFromSearch(search);

  // A URL without campaign data is an internal/organic navigation and must not
  // erase the last tracked click. A URL with campaign data becomes the new click.
  if (!Object.keys(parameters).length) {
    return readCampaignParameters({ storage: storage, now: now });
  }

  const record = { parameters: parameters, expiresAt: now + STORAGE_MAX_AGE_MS };
  volatileRecord = record;
  if (storage) {
    try {
      storage.setItem(STORAGE_KEY, JSON.stringify(record));
    } catch (_) {
      // Keep the record in memory for this page when storage is unavailable.
    }
  }
  return parameters;
}

export function buildTrackedCheckoutUrl(checkoutUrl, parameters) {
  const url = new URL(checkoutUrl);
  const campaign = sanitizeParameters(parameters);
  CAMPAIGN_PARAMETER_NAMES.forEach(function(name) {
    if (campaign[name]) url.searchParams.set(name, campaign[name]);
  });
  return url.toString();
}

export function trackedCheckoutUrl(checkoutUrl) {
  const campaign = captureCampaignParameters(currentSearch());
  return buildTrackedCheckoutUrl(checkoutUrl, campaign);
}

export function initializeCampaignTracking() {
  return captureCampaignParameters(currentSearch());
}
