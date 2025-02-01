import { createTheme } from "@mui/material/styles";

const MuiTabItemPaddingX = 20;

export const theme = createTheme({
  cssVariables: true,
  spacing: 4,
  components: {
    MuiContainer: {
      defaultProps: {
        disableGutters: true,
      },
    },

    MuiToolbar: {
      styleOverrides: {
        root: {
          padding: "8px !important",
          minHeight: "unset !important",
        },
      },
    },

    MuiLink: {
      styleOverrides: {
        root: ({ theme }) => {
          return {
            color: theme.palette.text.primary,
            textDecorationColor: theme.palette.text.primary,
            "&:hover": {
              color: theme.palette.text.primary,
              textDecorationColor: theme.palette.primary.main,
            },
          };
        },
      },
    },

    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: "initial",
          padding: `14px ${MuiTabItemPaddingX}px`,
          minWidth: "unset",
          maxWidth: "unset",
          minHeight: "unset",
          "&.Mui-selected": {
            color: "inherit",
          },
        },
      },
    },

    MuiTabs: {
      styleOverrides: {
        root: ({ theme }) => {
          return {
            minHeight: "unset",
            position: "relative",
            borderBottom: `1px solid ${theme.palette.divider}`,

            "& .MuiTabs-indicatorSpan": {
              backgroundColor: theme.palette.primary.main,
              margin: `0px ${MuiTabItemPaddingX}px`,
              height: "10px",
              display: "block",
            },
          };
        },

        scrollButtons: ({ theme }) => {
          return {
            transition: "all 0.3s ease",
            width: "unset",
            position: "absolute",
            zIndex: 1000,
            top: "50%",
            transform: "translateY(-50%)",
            backgroundColor: theme.palette.background.default,
            "&:first-of-type": {
              left: "0px",
            },
            "&:last-of-type": {
              right: "0px",
            },
          };
        },

        indicator: {
          backgroundColor: "transparent",
        },
      },
      defaultProps: {
        TabIndicatorProps: {
          children: <span className="MuiTabs-indicatorSpan" />,
        },
      },
    },
  },
});
