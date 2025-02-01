import { atom, useAtom } from "jotai";

import { ProductId, PRODUCTS } from "@/constants/products";

const selectedProductIdState = atom<ProductId>("spreadsheet");
const selectedProductState = atom(
  (get) => PRODUCTS[get(selectedProductIdState)],
);

export function useSelectedProductIdState() {
  return useAtom(selectedProductIdState);
}

export function useSelectedProductState() {
  return useAtom(selectedProductState);
}
