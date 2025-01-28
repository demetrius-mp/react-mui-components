import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  cssVariables: true,
  spacing: 4,
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: "lg",
        sx: {
          p: "0 !important",
        },
      },
    },
  },
});
