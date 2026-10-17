# Empty cart shows "-0,00 €" in the checkout summary

## Symptom

When the cart is empty, the checkout widget displays a negative-zero price:
the summary reads `-0,00 €` instead of `0,00 €`. Customers report it looks
like they owe the store money.

## Steps to reproduce

1. Open the store with an empty cart (or remove all items).
2. Open the checkout summary.
3. The "Total" line shows `-0,00 €`.

## Expected behavior

The total for an empty cart must be displayed as `0,00 €` — never with a
minus sign. Negative totals only make sense for refunds, and there is no
refund in this flow.

## Actual behavior

`Total: -0,00 €`

## Extra detail

A cart with items renders fine (e.g. `Total: 72,50 €`), so the issue only
appears for the zero case.
