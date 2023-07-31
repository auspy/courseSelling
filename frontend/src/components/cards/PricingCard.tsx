import IconStar from "@/../public/icons/IconStar";
import IconStarBlur from "@/../public/icons/IconStarBlur";
import PricingCurve from "@/static/parts/curves/PricingCurve";
import { PricingCardProps, PricingType } from "@/types/types.card";

const PricingCard = ({
  price,
  type,
  features,
  active,
  setActive,
}: PricingCardProps) => {
  const isActive = active === type;
  const rotate = () => {
    switch (type) {
      case PricingType.Free:
        return "rotate(-4.19deg) translate(0px, 10px)";
      case PricingType.Basic:
        return "none";
      case PricingType.Premium:
        return "rotate(4.19deg) translate(0px, 10px)";
      default:
        break;
    }
  };
  return (
    <div
      onClick={() => {
        setActive(type);
      }}
      className="hover"
      style={{
        transition: "opacity 0.3s ease-in-out",
        transform: rotate(),
        opacity: isActive ? 1 : 0.6,
        borderRadius: 5,
        width: 310,
        height: 501,
        background: "linear-gradient(135deg, var(--light-bg) 0%, #292929 100%)",
      }}
    >
      <div
        className="fcc"
        style={{
          width: "inherit",
          height: "inherit",
          backgroundImage: isActive ? "url(/svgs/CircleBg.svg)" : "unset",
          padding: "70px 35px",
          position: "relative",
        }}
      >
        {/* PRICING TYPE */}
        <div
          className="frc"
          style={{
            position: "absolute",
            top: 20,
            left: 0,
          }}
        >
          <PricingCurve />
          <h3
            style={{
              color: "var(--light-bg)",
              fontStyle: "normal",
              backgroundColor: "var(--white)",
              padding: "0 2px",
              borderRadius: 5,
              width: "min-content",
              position: "relative",
              top: 10,
            }}
          >
            {type}
          </h3>
        </div>
        {/* PRICE */}
        <div className="frfe">
          <div className="frfs">
            <p>₹</p>
            <h1 className="os frc" style={{ height: 51 }}>
              {price}
            </h1>
          </div>
          <p style={{ opacity: 0.7 }}>/Month</p>
        </div>
        {/* FEATURES */}
        <div className="w100 fcfs" style={{ gap: 30, marginTop: 35 }}>
          {features.map((value, index) => (
            <div key={index} className="frc">
              {value.available ? <IconStar /> : <IconStarBlur />}
              <p className="ml15 medi16">{value.feature}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
