import { useEffect, useRef, useState } from "react";

import { usePreviousValue } from "@/hooks/use-previous-value";

export function useScrollspy(
  elements: Element[],
  options?: {
    rootMargin?: string;
    root?: Element;
  },
): [number] {
  const [currentIntersectingElementIndex, setCurrentIntersectingElementIndex] =
    useState(0);
  const previousIntersectingElementIndex = usePreviousValue(
    currentIntersectingElementIndex,
  );

  const observer = useRef<IntersectionObserver>();

  useEffect(() => {
    if (observer.current) {
      observer.current.disconnect();
    }

    observer.current = new IntersectionObserver(
      (entries) => {
        const indexOfElementIntersecting = entries.findIndex((entry) => {
          return entry.intersectionRatio > 0;
        });

        setCurrentIntersectingElementIndex(indexOfElementIntersecting);
      },
      {
        root: options?.root,
        rootMargin: options?.rootMargin,
      },
    );

    const { current: currentObserver } = observer;

    elements.forEach((element) => {
      if (!element) {
        return;
      }

      currentObserver.observe(element);
    });

    return () => currentObserver.disconnect();
  }, [elements, options]);

  const value =
    currentIntersectingElementIndex === -1
      ? previousIntersectingElementIndex || 0
      : currentIntersectingElementIndex;

  return [value];
}
