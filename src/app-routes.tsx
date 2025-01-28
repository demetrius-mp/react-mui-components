import { Route, Routes } from "react-router";

import { HomePage } from "@/routes/page";
import { ScrollspyPage } from "@/routes/scrollspy/page";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<HomePage />} />
        <Route path="scrollspy" element={<ScrollspyPage />} />
      </Route>
    </Routes>
  );
}
