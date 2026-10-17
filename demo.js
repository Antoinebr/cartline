import { checkoutSummary } from "./src/index.js";

const cart = [
  { id: "sku-1", name: "Watering can", price: 30, qty: 2 },
  { id: "sku-2", name: "Plant mister", price: 12.5, qty: 1 },
];

console.log("--- no promo ---");
console.log(checkoutSummary(cart));

console.log("--- promo 10% ---");
console.log(checkoutSummary(cart, 10));
