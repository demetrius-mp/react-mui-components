import { Box, Container, Stack, Tab, Tabs, useTheme } from "@mui/material";
import { useRef } from "react";

import { useScrollspy } from "@/hooks/use-scrollspy";
import { useSetTitle } from "@/hooks/use-set-title";
import { AppBarNavigation } from "@/ui/app-bar-navigation";
import { AppBottomNavigation } from "@/ui/app-bottom-navigation";
import { AppFooter } from "@/ui/app-footer";
import { AppSpotNavigation } from "@/ui/app-spot-navigation";
import { HighlightsSwiper } from "@/ui/highlights-swiper";

function createDummyTab(id: number, itemsCount?: number) {
  return {
    id: `spy-section-${id}`,
    label: "Dummy - " + id,
    itemsCount,
    iconUrl: "https://placehold.co/12",
  };
}

function useTabsContents() {
  return [
    createDummyTab(1),
    createDummyTab(2, 10),
    createDummyTab(3),
    createDummyTab(4),
    createDummyTab(5),
    createDummyTab(6, 4),
  ];
}

function HomePageTabsContent({
  tabs,
}: {
  tabs: ReturnType<typeof useTabsContents>;
}) {
  const { palette } = useTheme();

  const elements = useRef<Element[]>([]);

  const [currentActiveIndex] = useScrollspy(elements.current, {
    // 34 px is the height of the tab bar
    // 55 px is the height of the bottom navigation bar
    rootMargin: "-46px 0px -55px 0px",
  });

  function scrollToSection(index: number) {
    const section = elements.current.at(index);

    if (!section) return;

    section.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <Container>
      <Box
        position="sticky"
        top={0}
        zIndex={100}
        bgcolor={palette.background.default}
      >
        <Tabs
          value={currentActiveIndex}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          onChange={(_e, index: number) => scrollToSection(index)}
        >
          {tabs.map((tab) => {
            return (
              <Tab
                key={tab.id}
                disableRipple
                label={
                  <Stack
                    direction="row"
                    gap={2}
                    alignItems="center"
                    justifyContent="center"
                  >
                    {tab.iconUrl && <img src={tab.iconUrl} alt={tab.label} />}

                    {tab.label}

                    {tab.itemsCount && (
                      <Box
                        height={16}
                        px={1}
                        bgcolor={palette.grey[200]}
                        borderRadius={1}
                        fontSize={8}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        {tab.itemsCount}
                      </Box>
                    )}
                  </Stack>
                }
              />
            );
          })}
        </Tabs>
      </Box>

      <Stack px={3} mt={4} gap={4} className="spy-section-wrapper">
        {tabs.map((tab, index) => (
          <Box
            ref={(el: Element) => {
              elements.current.push(el);
            }}
            key={index}
            width="100%"
            height={400}
            bgcolor={palette.grey[200]}
            borderRadius={2}
            className="spy-section"
            id={`spy-section-${index + 1}`}
            sx={{
              scrollMargin: "60px",
            }}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            {tab.label}
          </Box>
        ))}
      </Stack>
    </Container>
  );
}

export function HomePage() {
  useSetTitle("Scrollspy");

  const tabs = useTabsContents();
  const { palette } = useTheme();

  return (
    <Box>
      <Box bgcolor={palette.primary.main}>
        <Container>
          <Box pb={6}>
            <Box mb={6}>
              <AppBarNavigation />
            </Box>

            <AppSpotNavigation />

            <Box mt={4}>
              <HighlightsSwiper />
            </Box>
          </Box>
        </Container>
      </Box>

      <Box pb="84px">
        <HomePageTabsContent tabs={tabs} />

        <Container sx={{ mt: 4, px: 3 }}>
          <AppFooter />
        </Container>
      </Box>

      <AppBottomNavigation />
    </Box>
  );
}
