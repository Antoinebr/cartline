import test from "node:test";
import assert from "node:assert/strict";

import { shippingCost } from "../src/shipping.js";

test("free shipping starts at 50 € inclusive", () => {
  const cart = [{ id: "sku-1", name: "Poster", price: 25, qty: 2 }];

  assert.equal(shippingCost(cart), 0);
});

test("orders below 50 € pay the standard shipping", () => {
  const cart = [{ id: "sku-2", name: "Mug", price: 12.5, qty: 2 }];

  assert.equal(shippingCost(cart), 4.9);
});
