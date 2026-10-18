import test from "node:test";
import assert from "node:assert/strict";

import { withVat } from "../src/vat.js";

test("VAT is added on top of the net amount", () => {
  assert.equal(withVat(100, 20), 120);
});

test("a zero VAT rate leaves the amount unchanged", () => {
  assert.equal(withVat(42, 0), 42);
});
