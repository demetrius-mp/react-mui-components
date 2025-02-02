import { Box, Stack, Typography, useTheme } from "@mui/material";
import { ReactNode } from "react";

import { useClickableElement } from "@/hooks/use-focusable-element";

export function SpotNavigation({ children }: { children: ReactNode }) {
  return (
    <Stack
      direction="row"
      gap={3}
      px={3}
      sx={{
        overflowX: "scroll",
        scrollbarWidth: "none",
      }}
    >
      {children}
    </Stack>
  );
}

const ITEM_WIDTH_IN_PX = 56;

export function SpotNavigationItem({
  icon,
  label,
  onClick,
}: {
  icon: ReactNode;
  label: ReactNode;
  onClick?: () => void;
}) {
  const { palette } = useTheme();
  const ref = useClickableElement<HTMLDivElement>();

  return (
    <Stack
      ref={ref}
      width={ITEM_WIDTH_IN_PX}
      alignItems="center"
      role="button"
      onClick={onClick}
      sx={{
        cursor: "pointer",
      }}
    >
      <Box
        flexShrink={0}
        width={40}
        height={40}
        bgcolor="white"
        borderRadius="50%"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        {icon}
      </Box>

      <Typography
        mt={1}
        fontSize={12}
        align="center"
        overflow="hidden"
        width={ITEM_WIDTH_IN_PX}
        textOverflow="ellipsis"
        whiteSpace="nowrap"
        color={palette.background.default}
      >
        {label}
      </Typography>
    </Stack>
  );
}
