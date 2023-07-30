import Heading from "@/components/text/Heading";
import RightText from "./RightText";
import OfferBox from "../trust/OfferBox";

const Offer = () => {
  return (
    <div
      className="topContainer"
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
        <RightText />
      </div>
    </div>
  );
};

export default Offer;
