# cartline

Tiny shopping-cart utilities used by the store front-end: totals, promo
discounts, shipping, VAT, and price formatting.

## Usage

```js
import { checkoutSummary, shippingCost, withVat } from "cartline";

const cart = [
  { id: "sku-1", name: "Watering can", price: 30, qty: 2 },
  { id: "sku-2", name: "Plant mister", price: 12.5, qty: 1 },
];

console.log(checkoutSummary(cart, 10)); // with a 10% promo code
shippingCost(cart); // 0 (free shipping) when subtotal >= 50 €, else 4.90 €
withVat(72.5, 20); // 87 — add 20% VAT to a net amount
```

## API

All functions are exported from the package entry point (`src/index.js`):

- `subtotal(cart)` — cart total before any promo, rounded to cents
- `applyDiscount(cart, percent)` — discounted copy of the cart (never mutates)
- `discountedTotal(cart, percent)` — total after the promo is applied
- `countItems(cart)` — total number of items, quantities included
- `formatPrice(value)` — euro price formatting
- `checkoutSummary(cart, promoPercent)` — multiline checkout summary for the UI
- `shippingCost(cart)` — free above 50 € subtotal, otherwise 4.90 €

## Run the demo

```sh
npm run demo
```

## Layout

- `src/cart.js` — subtotal, promo discount, item count
- `src/format.js` — euro price formatting
- `src/checkout.js` — builds the checkout summary shown in the UI
- `src/shipping.js` — shipping cost rules
- `src/vat.js` — VAT computation
- `test/` — node:test suite (`npm test`)
