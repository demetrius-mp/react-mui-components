import { Route, Routes } from "react-router";

import { HomePage } from "@/routes/page";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
}
