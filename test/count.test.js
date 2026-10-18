import test from "node:test";
import assert from "node:assert/strict";

import { countItems } from "../src/cart.js";

test("countItems counts items with their quantities, not cart lines", () => {
  const cart = [
    { id: "sku-1", name: "Watering can", price: 30, qty: 3 },
    { id: "sku-2", name: "Plant mister", price: 12.5, qty: 3 },
  ];

  assert.equal(countItems(cart), 6);
});

test("countItems works for a single item bought multiple times", () => {
  const cart = [{ id: "sku-9", name: "Trowel", price: 9.99, qty: 5 }];

  assert.equal(countItems(cart), 5);
});
