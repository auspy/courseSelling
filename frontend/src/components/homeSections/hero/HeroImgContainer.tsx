import { HeroImgContainerProps } from "@/types/types.hero";
import Image from "next/image";

const HeroImgContainer = ({
  src = "/images/management.png",
  alt = "desc",
  width = 235,
  height = 235,
  needGradient = false,
  style = {},
  heading = "",
}: HeroImgContainerProps) => {
  return (
    <>
      <div
        style={{
          borderRadius: 5,
          overflow: "hidden",
          position: "relative",
          width: "max-content",
          height: "max-content",
          ...style,
        }}
      >
        {needGradient && (
          <div
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              zIndex: 2,
              background:
                "linear-gradient(133deg, rgba(249, 249, 249, 0.67) 0%, rgba(224, 224, 224, 0.00) 100%)",
            }}
          />
        )}
        <span className="heroImgText bold14 caps" style={{ maxWidth: 60 }}>
          {heading || alt}
        </span>
        <div
          className={"heroImgContainer"}
          style={{
            position: "relative",
            width: width,
            height: height,
            borderRadius: 5,
            overflow: "hidden",
          }}
        >
          <Image
            src={src}
            alt={alt}
            fill
            priority={true} // this is to make sure the image is loaded first. as the image is above the fold which means it is visible to the user without scrolling
          />
        </div>
      </div>
    </>
  );
};

export default HeroImgContainer;
