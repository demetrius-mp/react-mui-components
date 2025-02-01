import { Close } from "@mui/icons-material";
import {
  alpha,
  Divider,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";

import { Bottomsheet } from "@/components/bottomsheet";
import { getProductById, PRODUCTS_IDS } from "@/constants/products";
import { useProductsBottomsheetIsOpenState } from "@/states/products-bottomsheet-is-open-state";
import { useSelectedProductIdState } from "@/states/selected-product-state";

type ProductCardProps = {
  name: string;
  assetUrl: string;
  selected?: boolean;
  onClick?: () => void;
};

function ProductCard({
  name,
  assetUrl,
  selected = false,
  onClick,
}: ProductCardProps) {
  const { palette } = useTheme();

  const border = `2px solid ${selected ? alpha(palette.primary.light, 0.2) : palette.divider}`;
  const bgcolor = selected ? alpha(palette.primary.light, 0.2) : undefined;

  return (
    <Stack
      sx={{
        cursor: "pointer",
      }}
      borderRadius={2}
      width={150}
      height={150}
      border={border}
      bgcolor={bgcolor}
      p={4}
      gap={2}
      alignItems="center"
      justifyContent="center"
      onClick={onClick}
    >
      <Typography variant="h6">{name}</Typography>

      <img width={50} height={50} src={assetUrl} alt={name} />
    </Stack>
  );
}

export function ProductsBottomsheet() {
  const [isOpen, setIsOpen] = useProductsBottomsheetIsOpenState();
  const [selectedProductId, setSelectedProductId] = useSelectedProductIdState();

  const { palette } = useTheme();

  return (
    <Bottomsheet open={isOpen} setOpen={setIsOpen}>
      <Stack
        p={3}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography variant="h6">Escolha um produto</Typography>

        <IconButton onClick={() => setIsOpen(false)}>
          <Close />
        </IconButton>
      </Stack>

      <Divider sx={{ borderColor: palette.divider }} />

      <Stack
        p={7}
        gap={4}
        direction="row"
        justifyContent="center"
        flexWrap="wrap"
      >
        {PRODUCTS_IDS.map((productId) => {
          const product = getProductById(productId);

          return (
            <ProductCard
              key={productId}
              name={product.name}
              assetUrl={product.assetUrl}
              selected={productId === selectedProductId}
              onClick={() => {
                setSelectedProductId(productId);
                setIsOpen(false);
              }}
            />
          );
        })}
      </Stack>
    </Bottomsheet>
  );
}
