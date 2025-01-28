import reactLogo from "@/assets/react.svg";
import {
  SpotNavigation,
  SpotNavigationItem,
} from "@/components/navigation/spot-navigation";

export function AppSpotNavigation() {
  return (
    <SpotNavigation>
      {Array.from({ length: 20 }).map((_, index) => (
        <SpotNavigationItem
          key={index}
          label={`Item ${index + 1}`}
          icon={<img src={reactLogo} />}
        />
      ))}
    </SpotNavigation>
  );
}
