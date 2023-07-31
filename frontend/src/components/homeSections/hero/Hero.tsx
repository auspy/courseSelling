import Heading from "@/components/text/Heading";
import HeroLeftContainer from "./HeroLeftContainer";
import HeroImgs from "./HeroImgs";
import Button from "@/components/buttons/Button";
import ButtonSec from "@/components/buttons/ButtonSec";
import Logo from "@/components/header/Logo";
import Navigation from "@/components/header/Navigation";
import HeroStyleCurve from "@/static/parts/curves/HeroStyleCurve";
import HeroBtnCurve from "@/static/parts/curves/HeroBtnCurve";

const Hero = () => {
  return (
    <div className="topContainer">
      <div
        className="fcc"
        style={{
          backgroundImage: "url(/svgs/heroBg.svg)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100%",
          width: "100%",
        }}
      >
        {/* HEADER */}
        <div className="frcsb container1200" style={{ height: 80 }}>
          <Logo />
          <Navigation />
        </div>
        {/* HERO */}
        <div
          className="container1200"
          style={{
            position: "relative",
            maxHeight: 656,
            height: 656,
          }}
        >
          {/* left curve */}
          <div
            style={{
              position: "absolute",
              left: -937,
              top: 160,
              zIndex: 0,
            }}
          >
            <HeroStyleCurve />
          </div>
          <div
            className="frcsb"
            style={{
              height: "inherit",
              position: "relative",
              zIndex: 1,
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
                <div className="frc mt60" style={{ position: "relative" }}>
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
                  <div
                    style={{
                      position: "absolute",
                      right: -280,
                      top: 14,
                    }}
                  >
                    <HeroBtnCurve />
                  </div>
                </div>
              }
            />
            <HeroImgs />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
