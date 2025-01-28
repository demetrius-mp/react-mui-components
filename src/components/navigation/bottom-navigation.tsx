import { Button, Stack, Typography, useTheme } from "@mui/material";
import { forwardRef, ReactNode } from "react";

export const BottomNavigation = forwardRef<
  HTMLDivElement,
  { children: ReactNode }
>(({ children }, ref) => {
  const { palette } = useTheme();

  return (
    <Stack
      ref={ref}
      direction="row"
      position="fixed"
      bottom={0}
      width={1}
      zIndex={2}
      bgcolor={palette.background.default}
      borderTop={`1px solid ${palette.divider}`}
    >
      {children}
    </Stack>
  );
});

export const BottomNavigationItem = forwardRef<
  HTMLButtonElement,
  {
    icon: ReactNode;
    label: ReactNode;
    onClick?: () => void;
    active?: boolean;
  }
>(({ icon, label, onClick, active = false }, ref) => {
  const { palette } = useTheme();

  return (
    <Button
      disableTouchRipple
      ref={ref}
      onClick={onClick}
      sx={{
        flexGrow: 1,
        textTransform: "none",
        color: active ? palette.primary.main : palette.text.secondary,
        "&:hover": {
          backgroundColor: "unset",
        },
      }}
    >
      <Stack alignItems="center" gap={1}>
        {icon}

        <Typography
          fontSize={10}
          align="center"
          overflow="hidden"
          width="100%"
          textOverflow="ellipsis"
          whiteSpace="nowrap"
        >
          {label}
        </Typography>
      </Stack>
    </Button>
  );
});
