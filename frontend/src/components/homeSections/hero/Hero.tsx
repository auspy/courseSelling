import Heading from "@/components/text/Heading";
import HeroLeftContainer from "./HeroLeftContainer";
import HeroImgs from "./HeroImgs";
import HeroStyleCurve from "@/static/parts/curves/HeroStyleCurve";
import Header from "@/components/header/Header";
import ButtonsHeroHome from "@/components/buttons/ButtonsHeroHome";
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
        <Header />
        {/* HERO */}
        <div
          id="heroContainer"
          className="container1200"
          style={{
            position: "relative",
            maxHeight: 656,
            height: 656,
          }}
        >
          {/* left curve */}
          <div
            className="heroCurve"
            style={{
              position: "absolute",
              left: -910,
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
                      lineHeight: "80px",
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
                opacity: 0.7,
                fontWeight: 400,
                lineHeight: "150%",
              }}
              containerStyle={{
                maxWidth: 438,
                maxHeight: "inherit",
                marginRight: 20,
              }}
              buttons={
                <div
                  id="heroBtns"
                  className="frcsb mt60"
                  style={{ position: "relative", rowGap: 10, columnGap: 20 }}
                >
                  <ButtonsHeroHome />
                  <div
                    style={{
                      position: "absolute",
                      right: -310,
                      top: 14,
                    }}
                    className="heroCurve"
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
