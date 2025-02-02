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
      width={56}
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
        width="100%"
        textOverflow="ellipsis"
        whiteSpace="nowrap"
        color={palette.background.default}
        sx={{
          width: "56px",
        }}
      >
        {label}
      </Typography>
    </Stack>
  );
}
