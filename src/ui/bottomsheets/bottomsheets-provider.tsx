import { ReactNode } from "react";

import { AuthBottomsheet } from "@/ui/bottomsheets/auth-bottomsheet";
import { ProductsBottomsheet } from "@/ui/bottomsheets/products-bottomsheet";

export function BottomsheetsProvider({ children }: { children: ReactNode }) {
  return (
    <>
      <ProductsBottomsheet />
      <AuthBottomsheet />

      {children}
    </>
  );
}
