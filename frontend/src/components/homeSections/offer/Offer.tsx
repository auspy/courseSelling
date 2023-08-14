import Heading from "@/components/text/Heading";
import RightText from "./RightText";
import OfferBox from "./OfferBox";
import OfferCurve from "../../../static/parts/curves/OfferCurve";

const Offer = () => {
  return (
    <div
      className="topContainer"
      id="offerContainer"
      style={{
        padding: "83px 0",
        backgroundColor: "var(--light-bg)",
        position: "relative",
      }}
    >
      <div className="frcsb container1200" style={{ height: 94 }}>
        <Heading
          text="Join now to get special"
          headingStyle={{ width: 277 }}
          highlightText="offer"
        />
        <OfferBox />
        <div style={{ position: "relative" }}>
          <RightText />
          <div
            style={{ position: "absolute", right: -947, top: -54, zIndex: 0 }}
          >
            <OfferCurve />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
