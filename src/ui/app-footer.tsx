import { Apple, Google } from "@mui/icons-material";
import { Box, Button, Container, Link, Stack, Typography } from "@mui/material";

const sections = [
  {
    title: "Seção 1",
    items: [
      {
        title: "Item 1",
        url: "/",
      },
      {
        title: "Item 2",
        url: "/",
      },
      {
        title: "Item 3",
        url: "/",
      },
    ],
  },
  {
    title: "Seção 2",
    items: [
      {
        title: "Item 1",
        url: "/",
      },
      {
        title: "Item 2",
        url: "/",
      },
      {
        title: "Item 3",
        url: "/",
      },
    ],
  },
  {
    title: "Seção 3",
    items: [
      {
        title: "Item 1",
        url: "/",
      },
    ],
  },
];

export function AppFooter() {
  return (
    <Container>
      <Stack direction="row">
        <Stack direction="row" flexGrow={1} gap={4}>
          {sections.map((section) => (
            <Stack key={section.title}>
              <Typography variant="h6">{section.title}</Typography>

              {section.items.map((item) => (
                <Link key={item.title} href={item.url}>
                  {item.title}
                </Link>
              ))}
            </Stack>
          ))}
        </Stack>

        <Stack flexGrow={1} gap={2} alignItems="end">
          <Typography textAlign="center" variant="h4">
            Baixe nosso app
          </Typography>

          <Box>
            <Button
              sx={{
                width: "250px",
              }}
              variant="outlined"
              color="inherit"
              startIcon={<Google />}
            >
              Baixar no Google Play
            </Button>
          </Box>

          <Box>
            <Button
              sx={{
                width: "250px",
              }}
              variant="outlined"
              startIcon={<Apple />}
              color="inherit"
            >
              Baixar na App Store
            </Button>
          </Box>
        </Stack>
      </Stack>
    </Container>
  );
}
