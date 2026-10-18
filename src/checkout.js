import { applyDiscount, countItems, discountedTotal, subtotal } from "./cart.js";
import { formatPrice } from "./format.js";

/**
 * Builds the human-readable checkout summary shown in the store UI.
 * @param {Array<{id: string, name: string, price: number, qty: number}>} cart
 * @param {number} [promoPercent] - percent discount from the promo code, 0 when none
 * @returns {string} multiline summary rendered in the checkout widget
 */
export function checkoutSummary(cart, promoPercent = 0) {
  const total =
    promoPercent > 0 ? discountedTotal(cart, promoPercent) : subtotal(cart);
  return [
    `Items: ${countItems(cart)}`,
    `Promo: ${promoPercent}%`,
    `Total: ${formatPrice(total)}`,
  ].join("\n");
}
