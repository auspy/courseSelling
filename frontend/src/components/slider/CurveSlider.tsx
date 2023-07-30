"use client";
import FullCurve from "../../static/parts/curves/FullCurve";
import { useEffect, useState } from "react";
const CurveSlider = () => {
  const [percent, setPercent] = useState(0.5);
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
    return () => window.removeEventListener("resize", () => {});
  }, []);
  return (
    <>
      <FullCurve
        percent={String(width * percent)}
        bgLineColor="var(--bg)"
        width={String(width)}
      />
    </>
  );
};

export default CurveSlider;
