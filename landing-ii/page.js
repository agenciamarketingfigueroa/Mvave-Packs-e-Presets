import { initializeCampaignTracking, trackedCheckoutUrl } from '/campaign-tracking.js';

initializeCampaignTracking();
document.querySelectorAll('a[data-checkout]').forEach(function(link) {
  link.href = trackedCheckoutUrl(link.href);
});
