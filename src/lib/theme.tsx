import { tabsClasses } from "@mui/material";
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

    MuiLink: {
      defaultProps: {
        sx: ({ palette }) => {
          return {
            color: palette.text.primary,
            textDecorationColor: palette.text.primary,
            "&:hover": {
              color: palette.text.primary,
              textDecorationColor: palette.primary.main,
            },
          };
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
        sx: ({ palette }) => {
          return {
            minHeight: "unset",
            position: "relative",
            borderBottom: `1px solid ${palette.divider}`,

            "& .MuiTabs-scrollButtons": {
              transition: "all 0.3s ease",
              width: "unset",
              position: "absolute",
              zIndex: 1000,
              top: "50%",
              transform: "translateY(-50%)",
              backgroundColor: palette.background.default,
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
              backgroundColor: palette.primary.main,
              marginX: `${MuiTabItemPaddingX}px`,
              height: "10px",
              display: "block",
            },
          };
        },
      },
    },
  },
});
