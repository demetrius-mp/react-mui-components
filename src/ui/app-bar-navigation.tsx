import { Close, KeyboardArrowDown } from "@mui/icons-material";
import {
  Box,
  Divider,
  IconButton,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";

import viteLogo from "@/assets/vite.svg";
import { Bottomsheet } from "@/components/bottomsheet";

export function AppBarNavigation() {
  const { palette } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Stack
          direction="row"
          alignItems="center"
          role="button"
          sx={{
            cursor: "pointer",
          }}
          px={4}
          py={1}
        >
          <img src={viteLogo} alt="Vite" height={32} />

          <Box ml={2}>
            <Typography variant="body1" color={palette.primary.contrastText}>
              Product 1
            </Typography>
          </Box>

          <KeyboardArrowDown sx={{ color: palette.primary.contrastText }} />
        </Stack>

        <Box
          color={palette.primary.main}
          bgcolor={palette.primary.contrastText}
          onClick={() => setOpen(true)}
          px={4}
          py={1}
          borderRadius={20}
          sx={{
            cursor: "pointer",
            transition: "all 0.3s ease",
            "&:hover": {
              bgcolor: palette.primary.light,
              color: palette.primary.contrastText,
            },
          }}
        >
          Entrar agora
        </Box>
      </Stack>

      <Bottomsheet open={open} setOpen={setOpen}>
        <Stack
          p={3}
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="body1">Entrar agora</Typography>

          <IconButton onClick={() => setOpen(false)}>
            <Close />
          </IconButton>
        </Stack>

        <Divider sx={{ borderColor: palette.divider }} />

        <Stack p={3} gap={4}>
          <TextField id="email" label="Email" variant="outlined" />

          <TextField
            id="password"
            label="Senha"
            variant="outlined"
            type="password"
          />
        </Stack>
      </Bottomsheet>
    </>
  );
}
