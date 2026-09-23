import { trackedCheckoutUrl } from "/campaign-tracking.js";

const offer = window.GUIDE_OFFER || {};
const checkout = typeof offer.checkout === "string" ? offer.checkout.trim() : "";
const price = typeof offer.price === "string" ? offer.price.trim() : "";
const installments = typeof offer.installments === "string" ? offer.installments.trim() : "";

if (checkout) {
  try {
    const url = new URL(checkout);
    if (url.protocol !== "https:" || url.hostname !== "pay.hotmart.com") throw new Error("Checkout inválido");

    document.querySelectorAll(".checkout-link").forEach((link) => {
      link.href = trackedCheckoutUrl(url.toString());
      link.hidden = false;
    });
    document.getElementById("offer-pending").hidden = true;
    document.getElementById("offer-status").textContent = "Pagamento processado pela Hotmart · acesso após confirmação";
    if (price) {
      const priceElement = document.getElementById("offer-price");
      priceElement.textContent = price;
      priceElement.hidden = false;
    }
    if (installments) {
      const installmentsElement = document.getElementById("offer-installments");
      installmentsElement.textContent = installments;
      installmentsElement.hidden = false;
    }
  } catch (_) {
    // A oferta permanece indisponível se a URL configurada não for um checkout Hotmart válido.
  }
}
