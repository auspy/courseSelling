import Heading from "@/components/text/Heading";
import HeroLeftContainer from "./HeroLeftContainer";
import HeroImgs from "./HeroImgs";
import Button from "@/components/buttons/Button";
import ButtonSec from "@/components/buttons/ButtonSec";

const Hero = () => {
  return (
    <div className="topContainer">
      <div
        className="container1200"
        style={{
          overflow: "hidden",
          maxHeight: 656,
          height: 656,
        }}
      >
        <div
          className="frcsb"
          style={{
            height: "inherit",
          }}
        >
          <HeroLeftContainer
            heading={
              <>
                <Heading
                  text={"Improve your"}
                  highlightText={"skills"}
                  afterHighlightText={"faster"}
                  highlightTextStyle={{
                    display: "inline-block",
                    width: 152,
                    backgroundColor: "var(--white)",
                    borderRadius: 20,
                    height: 74,
                  }}
                  highlightTextClass="mr10"
                  type={0}
                />
              </>
            }
            desc={
              "Speed up the skill acquisition process by finding unlimited courses that matches your niche."
            }
            descClass="mt20"
            descStyle={{
              opacity: 0.8,
            }}
            containerStyle={{ maxWidth: 438, maxHeight: "inherit" }}
            buttons={
              <div className="frc mt60">
                <Button
                  buttonStyle={{
                    height: 54,
                    width: 179,
                    alignSelf: "flex-start",
                    position: "relative",
                  }}
                  buttonClass="mr25"
                  value="Try demo"
                />
                <ButtonSec value="explore" />
              </div>
            }
          />
          <HeroImgs />
        </div>
      </div>
    </div>
  );
};

export default Hero;
