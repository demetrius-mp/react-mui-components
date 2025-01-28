import { Box, Grow, Modal, Slide, useTheme } from "@mui/material";
import { ReactNode } from "react";

import { useScreenDetails } from "@/hooks/use-screen-details";

type BottomsheetProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  children: ReactNode;
};

function MobileLayout({ open, setOpen, children }: BottomsheetProps) {
  const { palette } = useTheme();

  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <Slide direction="up" in={open}>
        <Box
          sx={{
            outline: "none",
          }}
          position="absolute"
          maxHeight="90vh"
          overflow="auto"
          bgcolor={palette.background.default}
          bottom={0}
          width={1}
          borderRadius="16px 16px 0px 0px"
        >
          {children}
        </Box>
      </Slide>
    </Modal>
  );
}

function DesktopLayout({ open, setOpen, children }: BottomsheetProps) {
  const { palette } = useTheme();

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grow in={open}>
        <Box
          sx={{
            outline: "none",
          }}
          overflow="auto"
          bgcolor={palette.background.default}
          width="670px"
          borderRadius={4}
          maxHeight="90vh"
          height="fit-content"
        >
          {children}
        </Box>
      </Grow>
    </Modal>
  );
}

export function Bottomsheet({ open, setOpen, children }: BottomsheetProps) {
  const { screenSize } = useScreenDetails();

  if (screenSize === "mobile") {
    return <MobileLayout open={open} setOpen={setOpen} children={children} />;
  }

  if (screenSize === "desktop") {
    return <DesktopLayout open={open} setOpen={setOpen} children={children} />;
  }

  throw new Error("Invalid screen size");
}
