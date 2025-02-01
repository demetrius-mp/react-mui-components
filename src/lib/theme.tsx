import { tabsClasses } from "@mui/material";
import { createTheme } from "@mui/material/styles";

const MuiTabItemPaddingX = 20;

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
    MuiTab: {
      defaultProps: {
        sx: {
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
      defaultProps: {
        TabIndicatorProps: {
          children: <span className="MuiTabs-indicatorSpan" />,
        },
        sx: {
          minHeight: "unset",
          position: "relative",
          borderBottom: ({ palette }) => `1px solid ${palette.divider}`,

          "& .MuiTabs-scrollButtons": {
            transition: "all 0.3s ease",
            width: "unset",
            position: "absolute",
            zIndex: 1000,
            top: "50%",
            transform: "translateY(-50%)",
            backgroundColor: ({ palette }) => palette.background.default,
            "&:first-of-type": {
              left: "0px",
            },
            "&:last-of-type": {
              right: "0px",
            },
          },

          [`& .${tabsClasses.indicator}`]: {
            backgroundColor: "transparent",
          },

          "& .MuiTabs-indicatorSpan": {
            backgroundColor: ({ palette }) => palette.primary.main,
            marginX: `${MuiTabItemPaddingX}px`,
            height: "10px",
            display: "block",
          },
        },
      },
    },
  },
});
