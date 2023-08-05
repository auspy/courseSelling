"use client";
import Heading from "@/components/text/Heading";
import { useEffect, useRef, useState } from "react";
import IconLeftArrow from "@/../public/icons/IconLeftArrow";
import IconRightArrow from "@/../public/icons/IconRightArrow";
import ArrowButtonCurve from "@/static/parts/curves/ArrowButtonCurve";
import Image from "next/image";
import TestiImgCurve from "@/static/parts/curves/TestiImgCurve";
import { dummyTesties } from "@/data/dummy/data.testi";

const Testi = () => {
  const [active, setActive] = useState(0);
  const activeRef = useRef(active);
  const imgStyle: React.CSSProperties = {
    position: "absolute",
    bottom: 13.5,
    left: "50%",
    zIndex: 2,
    transform: "translateX(-50%)",
  };
  const changeActive = (value: number) => {
    let nextIndex = active + value;
    if (nextIndex < 0) nextIndex = dummyTesties.length - 1;
    else if (nextIndex > dummyTesties.length - 1) nextIndex = 0;
    setActive(nextIndex);
    activeRef.current = nextIndex;
  };
  useEffect(() => {
    const interval = setInterval(() => {
      changeActive(activeRef.current + 1);
      activeRef.current === dummyTesties.length - 1;
    }, 15000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="pv100 container1200 frcsb" style={{ height: 560 }}>
      {/* DETAILS */}
      <div
        style={{ maxHeight: 360, height: "100%", maxWidth: 615, width: "100%" }}
        className="fcfssb"
      >
        <Heading
          headingStyle={{
            lineHeight: "150%",
          }}
          text={dummyTesties[active].msg.text}
          highlightText={dummyTesties[active].msg.highlightText}
          afterHighlightText={dummyTesties[active].msg.afterHighlightText}
        />
        <div className="frcsb w100">
          {/* AUTHOR */}
          <div className="frc">
            <p className="semi16 mr15">{dummyTesties[active].name}</p>
            <p className="regu16" style={{ fontWeight: 300 }}>
              {dummyTesties[active].designation}
            </p>
          </div>

          {/* BUTTONS */}
          <div className="frc">
            <button
              onClick={() => {
                changeActive(-1);
              }}
              style={{ position: "relative", top: 8 }}
              className=""
            >
              <IconLeftArrow />
            </button>
            <ArrowButtonCurve />
            <button
              onClick={() => {
                changeActive(1);
              }}
              style={{ position: "relative", bottom: 8 }}
            >
              <IconRightArrow />
            </button>
          </div>
        </div>
      </div>
      {/* IMAGE */}
      <div
        style={{
          height: 395,
          width: 390,
          position: "relative",
          zIndex: 1,
        }}
        className="fcc"
      >
        <div
          style={{
            backgroundImage: `url(/svgs/bgbox.svg)`,
            height: "inherit",
            width: "inherit",
            position: "relative",
            zIndex: 1,
          }}
        />
        <Image
          src={dummyTesties[active].img.src}
          alt={dummyTesties[active].img.alt}
          height={dummyTesties[active].img.height}
          width={dummyTesties[active].img.width}
          style={{ ...imgStyle, ...dummyTesties[active].img.style }}
        />
        <div style={{ position: "absolute", right: -950, top: 40, zIndex: 0 }}>
          <TestiImgCurve />
        </div>
      </div>
    </div>
  );
};

export default Testi;
