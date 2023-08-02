import Button from "@/components/buttons/Button";
import { ImgProps } from "@/types/types.img";
import Image from "next/image";
import ButtonPrimaryLong from "../buttons/ButtonPrimaryLong";

const BuyNowCard = ({ img, alt }: ImgProps) => {
  return (
    <>
      <div
        className="fcc"
        style={{
          width: 307,
          position: "absolute",
          right: 20,
          top: 20,
          border: "1px solid #383838",
          boxShadow: "0px 5px 15px 0px rgba(4, 4, 4, 0.30)",
          borderRadius: 5,
          backgroundColor: "var(--dark-bg)",
        }}
      >
        <Image src={img} alt={alt} height={176} width={303} />
        {/* BELOW IMAGE DATA */}
        <div className="p20 w100">
          <div className="frc" style={{ gap: 10 }}>
            <h3 className="os">₹ 699</h3>
            <p
              className="regu16 os"
              style={{ textDecorationLine: "line-through" }}
            >
              ₹ 3129
            </p>

            <p className="mw bold16" style={{ color: "var(--primary)" }}>
              80% off
            </p>
          </div>
          {/* SALE ALARM */}
          <p className="regu12 mt5" style={{ color: "var(--red)" }}>
            Hurry 😱<span className="semi"> 7 hours</span> left at this price!
          </p>
          {/* BUTTON */}
          <ButtonPrimaryLong value="buy now" buttonClass="mt20" />
        </div>
      </div>
    </>
  );
};

export default BuyNowCard;
