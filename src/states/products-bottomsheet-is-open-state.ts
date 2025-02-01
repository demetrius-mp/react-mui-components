import { atom, useAtom } from "jotai";

const productsBottomsheetIsOpenState = atom(false);

export function useProductsBottomsheetIsOpenState() {
  return useAtom(productsBottomsheetIsOpenState);
}
