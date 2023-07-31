import { HeroImgContainerProps } from "@/types/types.hero";
import HeroImgContainer from "./HeroImgContainer";

const imgs: HeroImgContainerProps[][] = [
  [
    {
      img: "/images/hero/management.png",
      alt: "management",
      width: 235,
      height: 241,
    },
    {
      img: "/images/hero/interior.png",
      alt: "interior",
      width: 235,
      height: 287,
      heading: "interior design",
    },
    {
      img: "/images/hero/video.png",
      alt: "video",
      width: 235,
      height: 204,
      heading: "video editing",
    },
  ],
  [
    {
      img: "/images/hero/business.png",
      alt: "business",
      width: 235,
      height: 179,
      needGradient: true,
    },
    {
      img: "/images/hero/teaching.png",
      alt: "teaching",
      width: 235,
      height: 256,
    },
    {
      img: "/images/hero/art.png",
      alt: "art",
      width: 235,
      height: 204,
    },
  ],
];
const HeroImgs = () => {
  return (
    <>
      <div
        className="frfs"
        style={{
          gap: 25,
          alignSelf: "flex-start",
          height: "inherit",
          overflow: "hidden",
        }}
      >
        {/* rows */}
        {imgs.map((row, index) => (
          <div key={index}>
            {row.map((item, i) => (
              <HeroImgContainer
                key={item.alt + i}
                {...item}
                style={{ marginBottom: 20 }}
              />
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default HeroImgs;
