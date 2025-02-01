import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

import { AppRoutes } from "@/app-routes";
import { theme } from "@/lib/theme";
import { BottomsheetsProvider } from "@/ui/bottomsheets/bottomsheets-provider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <BottomsheetsProvider>
          <AppRoutes />
        </BottomsheetsProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
);
