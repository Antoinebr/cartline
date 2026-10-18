import { subtotal } from "./cart.js";

/**
 * Shipping cost for an order.
 * Orders of 50 € or more ship for free; anything below costs 4,90 €.
 * @param {Array<{id: string, name: string, price: number, qty: number}>} cart
 * @returns {number} shipping cost in euros
 */
export function shippingCost(cart) {
  const total = subtotal(cart);
  return total > 50 ? 0 : 4.9;
}
