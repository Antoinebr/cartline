/**
 * Formats an amount for display in the checkout summary.
 * Euro format with comma decimals, e.g. "-12,50 €" or "42,00 €".
 * @param {number} amount - amount in euros (negative for refunds)
 * @returns {string} formatted price
 */
export function formatPrice(amount) {
  const sign = amount < 0 ? "-" : "";
  const abs = Math.abs(amount);
  const cents = Math.round(abs * 100);
  const euros = Math.floor(cents / 100);
  const rest = String(cents % 100).padStart(2, "0");
  return `${sign}${euros},${rest} €`;
}
