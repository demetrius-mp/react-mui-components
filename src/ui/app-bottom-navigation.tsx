import { Home, LiveTv, Person, Preview } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router";

import {
  BottomNavigation,
  BottomNavigationItem,
} from "@/components/navigation/bottom-navigation";

export function AppBottomNavigation() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <BottomNavigation>
      <BottomNavigationItem
        active={location.pathname === "/"}
        icon={<Home />}
        label="Início"
        onClick={() => navigate("/")}
      />

      <BottomNavigationItem
        active={location.pathname.startsWith("/scrollspy")}
        icon={<Preview />}
        label="Scroll spy"
        onClick={() => navigate("/scrollspy")}
      />

      <BottomNavigationItem
        icon={<LiveTv />}
        label="Ao vivo"
        onClick={() => console.log("Ao vivo")}
      />

      <BottomNavigationItem
        icon={<Person />}
        label="Conta"
        onClick={() => console.log("Conta")}
      />
    </BottomNavigation>
  );
}
