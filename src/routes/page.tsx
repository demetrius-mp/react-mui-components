import { Box, Container, Typography, useTheme } from "@mui/material";

import { useSetTitle } from "@/hooks/use-set-title";
import { AppBarNavigation } from "@/ui/app-bar-navigation";
import { AppBottomNavigation } from "@/ui/app-bottom-navigation";
import { AppSpotNavigation } from "@/ui/app-spot-navigation";
import { HighlightsSwiper } from "@/ui/highlights-swiper";

export function HomePage() {
  useSetTitle("Home");

  const { palette } = useTheme();

  return (
    <Box>
      <Box bgcolor={palette.primary.main}>
        <Container>
          <Box py={6}>
            <Box mb={6} px={3}>
              <AppBarNavigation />
            </Box>

            <AppSpotNavigation />

            <Box mt={4}>
              <HighlightsSwiper />
            </Box>
          </Box>
        </Container>
      </Box>

      <Box pb="56px">
        <Container>
          <Typography variant="h1">Hello</Typography>
        </Container>
      </Box>

      <AppBottomNavigation />
    </Box>
  );
}
