import { getAssetUrl } from "@/constants/assets";

export const PRODUCTS_IDS = ["spreadsheet", "slideshow"] as const;

export type ProductId = (typeof PRODUCTS_IDS)[number];

export type Product = {
  name: string;
  assetUrl: string;
};

export const PRODUCTS: Record<ProductId, Product> = {
  spreadsheet: {
    name: "Planilhas",
    assetUrl: getAssetUrl("material-symbols:table-view-outline"),
  },
  slideshow: {
    name: "Slides",
    assetUrl: getAssetUrl("material-symbols:slideshow"),
  },
} as const;

export function getProductById(id: ProductId) {
  return PRODUCTS[id];
}
