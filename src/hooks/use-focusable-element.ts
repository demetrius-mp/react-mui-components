import { useEffect, useRef } from "react";

export function useClickableElement<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;

    function handleKeyUp(event: KeyboardEvent) {
      if (event.key === "Enter") {
        element.click();
      }

      if (event.key === " ") {
        element.click();
      }
    }

    element.tabIndex = 0;

    element.addEventListener("keyup", handleKeyUp);

    return () => {
      element.removeEventListener("keyup", handleKeyUp);
    };
  }, [ref]);

  return ref;
}
