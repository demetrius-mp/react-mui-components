import { atom, useAtom } from "jotai";

const authBottomsheetIsOpenState = atom(false);

export function useAuthBottomsheetIsOpenState() {
  return useAtom(authBottomsheetIsOpenState);
}
