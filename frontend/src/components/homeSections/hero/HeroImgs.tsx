import HeroImgContainer from "./HeroImgContainer";
import { dummyHeroImgs } from "@/data/dummy/data.imgs";

const HeroImgs = () => {
  return (
    <>
      <div
        id="heroImgConatiner"
        className="frfs"
        style={{
          gap: 25,
          alignSelf: "flex-start",
          height: "inherit",
          overflow: "hidden",
        }}
      >
        {/* rows */}
        {dummyHeroImgs.map((row, index) => (
          <div
            className={`heroImg${index == 0 ? "Left" : "Right"}`}
            key={index}
          >
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
