import { useMediaQuery, useTheme } from "@mui/material";

export type UseScreenDetailsReturn = {
  screenSize: "mobile" | "desktop";
};

export function useScreenDetails(): UseScreenDetailsReturn {
  const { breakpoints } = useTheme();

  const isMobile = useMediaQuery(breakpoints.down("md"));
  const screenSize = isMobile ? "mobile" : "desktop";

  return { screenSize };
}
