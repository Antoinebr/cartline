/**
 * Adds VAT to a net amount.
 * @param {number} net - net amount in euros
 * @param {number} rate - VAT rate in percent, e.g. 20
 * @returns {number} gross amount (net + VAT), rounded to cents
 */
export function withVat(net, rate) {
  return round2(net + (net * rate) / 100);
}

function round2(value) {
  return Math.round(value * 100) / 100;
}
