"use client";
import FullCurve from "../../static/parts/curves/FullCurve";
import { useEffect, useState } from "react";
const CurveSlider = () => {
  const [percent, setPercent] = useState(0.5);
  const [width, setWidth] = useState(1200);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
    return () => window.removeEventListener("resize", () => {});
  }, []);
  return (
    <>
      <FullCurve
        percent={String(width * percent)}
        bgLineColor="var(--dark-bg)"
        width={String(width)}
      />
    </>
  );
};

export default CurveSlider;
