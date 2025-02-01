import { ExpandMore } from "@mui/icons-material";
import { AppBar, Box, Button, Toolbar, useTheme } from "@mui/material";

import { RoundedButton } from "@/components/button/rounded-button";
import { getAssetUrl } from "@/constants/assets";
import { useAuthBottomsheetIsOpenState } from "@/states/auth-bottomsheet-is-open-state";
import { useProductsBottomsheetIsOpenState } from "@/states/products-bottomsheet-is-open-state";
import { useSelectedProductState } from "@/states/selected-product-state";

export function AppBarNavigation() {
  const { palette } = useTheme();
  const [_0, setProductsBottomsheetIsOpen] =
    useProductsBottomsheetIsOpenState();
  const [selectedProduct] = useSelectedProductState();

  const [_1, setAuthBottomsheetIsOpen] = useAuthBottomsheetIsOpenState();

  return (
    <AppBar elevation={0} position="static">
      <Toolbar>
        <Button
          size="large"
          color="inherit"
          aria-label="Selectionar produto"
          startIcon={
            <img
              height={24}
              src={getAssetUrl("logos:vitejs")}
              alt="Company logo"
            />
          }
          endIcon={<ExpandMore />}
          sx={{
            textTransform: "none",
          }}
          onClick={() => setProductsBottomsheetIsOpen(true)}
        >
          {selectedProduct.name}
        </Button>

        <Box flexGrow={1} />

        <RoundedButton
          sx={{
            backgroundColor: palette.background.default,
            color: palette.primary.main,
          }}
          disableElevation
          variant="contained"
          onClick={() => setAuthBottomsheetIsOpen(true)}
        >
          Entrar
        </RoundedButton>
      </Toolbar>
    </AppBar>
  );
}
