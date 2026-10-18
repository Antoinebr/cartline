# Promo code is applied twice — total is lower than it should be

## Symptom

When a promo code is entered, the checkout total is discounted twice.
Finance flagged it because the receipts show a smaller total than the
promo actually grants.

## Steps to reproduce

1. Add **2 × "Watering can"** to the cart (30,00 € each → subtotal 60,00 €).
2. Enter the promo code `SUMMER10` (a 10% discount).
3. The summary shows `Total: 48,60 €`.

## Expected behavior

A single 10% discount on a 60,00 € subtotal gives **54,00 €**.

## Actual behavior

`Total: 48,60 €` — which is 60,00 € × 0.9 × 0.9, i.e. the promo appears to
be applied twice.

## Extra detail

With no promo code the total is correct, so the bug only shows up in the
discounted path. `applyDiscount()` is expected to be the single place where
the promo percentage is turned into lower prices.
