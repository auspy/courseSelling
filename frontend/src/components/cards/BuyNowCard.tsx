import Image from "next/image";
import { defaultCourseImg } from "@/helper/constants.global";
import { BuyNowCardProps } from "@/types/types.card";
import PurchaseCourse from "@/components/coursesPage/PurchaseCourse";

const BuyNowCard = ({
  src = defaultCourseImg.src,
  alt = defaultCourseImg.alt,
  price,
  discount,
  _id,
  saleAlarm = (
    <>
      Hurry 😱<span className="semi"> 7 hours</span> left at this price!
    </>
  ),
}: BuyNowCardProps) => {
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
        <div
          style={{
            height: 176,
            width: 303,
            position: "relative",
            borderRadius: "5px 5px 0 0",
            overflow: "hidden",
          }}
        >
          <Image
            src={src || defaultCourseImg.src}
            alt={alt || defaultCourseImg.alt}
            fill
            style={{ objectFit: "cover" }}
            // height={176}
            // width={303}
          />
        </div>
        {/* BELOW IMAGE DATA */}
        <div className="p20 w100">
          <div className="frc" style={{ gap: 10 }}>
            <h3 className="os">₹ {price}</h3>
            <p
              className="regu16 os"
              style={{ textDecorationLine: "line-through" }}
            >
              ₹ 3129
            </p>

            <p className="mw bold16" style={{ color: "var(--primary)" }}>
              {discount || 100 - Number(((price / 3129) * 100).toFixed())}% off
            </p>
          </div>
          {/* SALE ALARM */}
          <p className="regu12 mt5" style={{ color: "var(--red)" }}>
            {saleAlarm}
          </p>
          {/* BUTTON */}
          <PurchaseCourse amount={price} _id={_id} />
        </div>
      </div>
    </>
  );
};

export default BuyNowCard;
