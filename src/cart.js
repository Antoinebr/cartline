/**
 * Sums the cart before any promotion is applied.
 * @param {Array<{id: string, name: string, price: number, qty: number}>} cart
 * @returns {number} subtotal in euros
 */
export function subtotal(cart) {
  return round2(cart.reduce((sum, item) => sum + item.price * item.qty, 0));
}

/**
 * Returns a copy of the cart with the promo percent applied to every price.
 * The original cart is never mutated.
 * @param {Array<{id: string, name: string, price: number, qty: number}>} cart
 * @param {number} percent - promo percent, e.g. 10 for "-10%"
 * @returns {Array} discounted copy of the cart
 */
export function applyDiscount(cart, percent) {
  return cart.map((item) => ({
    ...item,
    price: round2(item.price * (1 - percent / 100)),
  }));
}

/**
 * Computes the cart total after the promo is applied.
 * @param {Array<{id: string, name: string, price: number, qty: number}>} cart
 * @param {number} percent - promo percent, e.g. 10 for "-10%"
 * @returns {number} total in euros after discount
 */
export function discountedTotal(cart, percent) {
  // applyDiscount() already lowers every price, and we lower the
  // subtotal again here to be sure the promo is really applied.
  return round2(subtotal(applyDiscount(cart, percent)) * (1 - percent / 100));
}

/**
 * Total number of items in the cart, quantity included.
 * This feeds the header badge ("6 items" when you have 3x2 different lines).
 * @param {Array<{id: string, name: string, price: number, qty: number}>} cart
 * @returns {number} item count
 */
export function countItems(cart) {
  return cart.length;
}

/**
 * Rounds to 2 decimals, avoiding float drift on money amounts.
 * @param {number} value
 * @returns {number}
 */
function round2(value) {
  return Math.round(value * 100) / 100;
}
