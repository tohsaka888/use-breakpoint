import React, { useDeferredValue, useEffect, useState } from "react";

type BreakPointConfig = {
  xs?: number; // < 576px
  sm?: number; // >=576px
  md?: number; // >= 768px
  lg?: number; // >= 960px
  xl?: number; // >= 1200px
  xxl?: number; // >=1400
};

type BreakPoint = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";

const defaultBreakPoints: BreakPointConfig = {
  xs: 576,
  sm: 768,
  md: 960,
  lg: 1200,
  xl: 1400,
  xxl: 1600,
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
      if (breakPoints[keys[i]] && currentWidth < breakPoints[keys[i + 1]]) {
        setSize(keys[i]);
        break;
      }
    }
  }, [deferedWidth]);

  return [deferedWidth, deferedSize];
}

export default useBreakPoint;
