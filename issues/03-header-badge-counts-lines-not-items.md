# Header badge counts cart lines instead of items

## Symptom

The header badge shows the number of distinct product lines, not the
actual number of items. Shoppers see a badge that disagrees with what is
inside their cart.

## Steps to reproduce

1. Add **3 × "Watering can"** and **3 × "Plant mister"** to the cart
   (2 product lines, 6 items in total).
2. Look at the header badge, which is fed by the same count the checkout
   summary shows on its "Items" line.

## Expected behavior

The badge and the summary "Items" line must show **6** (quantities summed).

## Actual behavior

Both show **2**.

## Extra detail

The count comes from the same helper used by `checkoutSummary()`, so fixing
it fixes both places. Quantities live on each cart line as `qty` and can
never be zero or negative.
