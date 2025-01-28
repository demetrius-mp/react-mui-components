import { useTheme } from "@mui/material/styles";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import React from "react";

export function UITabsContainer({
  children,
  activeTabIndex,
  setActiveTabIndex,
}: {
  children: React.ReactNode;
  activeTabIndex: number;
  setActiveTabIndex: (index: number) => void;
}) {
  const { palette } = useTheme();

  return (
    <Tabs
      value={activeTabIndex}
      variant="scrollable"
      scrollButtons
      allowScrollButtonsMobile
      onChange={(_e, index) => setActiveTabIndex(index)}
      TabIndicatorProps={{
        children: <span className="MuiTabs-indicatorSpan" />,
      }}
      sx={{
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
          marginLeft: "16px",
          marginRight: "16px",
          height: "10px",
          display: "block",
        },

        "& .MuiTab-root": {
          textTransform: "initial",
          padding: "8px 16px",
          minWidth: "unset",
          maxWidth: "unset",
          minHeight: "unset",
          "&.Mui-selected": {
            color: "inherit",
          },
        },
      }}
    >
      {children}
    </Tabs>
  );
}
