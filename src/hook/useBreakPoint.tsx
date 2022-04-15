import React, { useDeferredValue, useEffect, useState } from "react";

type BreakPointConfig = {
  sm?: number; // 576px
  md?: number; // 768px
  lg?: number; // 960px
  xl?: number; // 1200px
  xxl?: number; // 1400px
};

type BreakPoint = "sm" | "md" | "lg" | "xl" | "xxl";

const defaultBreakPoints: BreakPointConfig = {
  sm: 576,
  md: 768,
  lg: 960,
  xl: 1200,
  xxl: 1400,
};

function useBreakPoint(breakPoints: BreakPointConfig = defaultBreakPoints) {
  const [currentWidth, setCurrentWidth] = useState(window.innerWidth);
  const [size, setSize] = useState<string>("xl");
  const deferedWidth = useDeferredValue(currentWidth);
  const deferedSize = useDeferredValue(size);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setCurrentWidth(window.innerWidth);
    });
  }, []);

  useEffect(() => {
    let keys = Object.keys(breakPoints) as BreakPoint[];
    for (let i = 0; i < Object.keys(breakPoints).length; i++) {
      if (currentWidth < breakPoints["sm"]) {
        setSize("xs");
        break;
      }
      if (breakPoints[keys[i]] && currentWidth < breakPoints[keys[i + 1]]) {
        setSize(keys[i]);
        break;
      }
      if (currentWidth > breakPoints["xxl"]) {
        setSize("xxl");
        break;
      }
    }
  }, [deferedWidth]);

  return { deferedWidth, deferedSize };
}

export default useBreakPoint;
