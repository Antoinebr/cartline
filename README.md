# cartline

Tiny shopping-cart utilities used by the store front-end: totals, promo
discounts, and price formatting.

## Usage

```js
import { checkoutSummary } from "cartline";

const cart = [
  { id: "sku-1", name: "Watering can", price: 30, qty: 2 },
  { id: "sku-2", name: "Plant mister", price: 12.5, qty: 1 },
];

console.log(checkoutSummary(cart, 10)); // with a 10% promo code
```

## Run the demo

```sh
npm run demo
```

## Layout

- `src/cart.js` — subtotal, promo discount, item count
- `src/format.js` — euro price formatting
- `src/checkout.js` — builds the checkout summary shown in the UI
- `test/` — node:test suite (`npm test`)
