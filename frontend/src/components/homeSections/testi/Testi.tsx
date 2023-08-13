"use client";
import Heading from "@/components/text/Heading";
import { useEffect, useRef, useState } from "react";
import IconLeftArrow from "@/../public/icons/IconLeftArrow";
import IconRightArrow from "@/../public/icons/IconRightArrow";
import ArrowButtonCurve from "@/static/parts/curves/ArrowButtonCurve";
import Image from "next/image";
import TestiImgCurve from "@/static/parts/curves/TestiImgCurve";
import { dummyTestimonials } from "@/data/dummy/data.testi";

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
    if (nextIndex < 0) nextIndex = dummyTestimonials.length - 1;
    else if (nextIndex > dummyTestimonials.length - 1) nextIndex = 0;
    setActive(nextIndex);
    activeRef.current = nextIndex;
  };
  useEffect(() => {
    const interval = setInterval(() => {
      changeActive(activeRef.current + 1);
      activeRef.current === dummyTestimonials.length - 1;
    }, 15000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div
      id="testiContainer"
      className="container1200 frcsb"
      style={{ height: 560 }}
    >
      {/* DETAILS */}
      <div
        style={{
          maxHeight: 360,
          paddingInline: 20,
          height: "100%",
          maxWidth: 615,
          width: "100%",
        }}
        className="fcfssb"
      >
        <Heading
          headingStyle={{
            lineHeight: "150%",
          }}
          text={dummyTestimonials[active].msg.text}
          highlightText={dummyTestimonials[active].msg.highlightText}
          afterHighlightText={dummyTestimonials[active].msg.afterHighlightText}
        />
        <div
          className="frcsb w100"
          id="testiAuthorContainer"
          // style={{ gap: "30px 80px", flexWrap: "wrap" }}
        >
          {/* AUTHOR */}
          <div
            id="testiAuthor"
            className="frc"
            style={{ flexWrap: "wrap", gap: 10 }}
          >
            <p className="semi16 fs0">{dummyTestimonials[active].name}</p>
            <p className="regu16 fs0" style={{ fontWeight: 300 }}>
              {dummyTestimonials[active].designation}
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
        id="testiImgContainer"
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
        <div
          style={{
            width: dummyTestimonials[active].img.width,
            height: 407,
            ...imgStyle,
          }}
        >
          <Image
            src={dummyTestimonials[active].img.src}
            alt={dummyTestimonials[active].img.alt}
            fill
            style={{ ...dummyTestimonials[active].img.style }}
          />
        </div>
        <div style={{ position: "absolute", right: -950, top: 40, zIndex: 0 }}>
          <TestiImgCurve />
        </div>
      </div>
    </div>
  );
};

export default Testi;
