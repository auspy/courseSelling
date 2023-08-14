import PartBoxLeft from "../../../static/parts/box/PartBoxLeft";
import PartBoxCenter from "../../../static/parts/box/PartBoxCenter";
import styles from "@/static/styles/button.module.scss";
import Heading from "@/components/text/Heading";
import ButtonPlay from "@/components/buttons/ButtonPlay";

const OfferBox = () => {
  return (
    <div
      id="offerBox"
      className={`${styles.hover} ${styles.parent} ${styles.boxTransform}`}
      style={{
        position: "absolute",
        bottom: 8,
        left: "50%",
        marginInline: 20,
      }}
    >
      <div className={styles.bottom}>
        <PartBoxLeft />
      </div>
      <div style={{ position: "relative", zIndex: 2 }}>
        <div className={styles.text} style={{ width: 180 }}>
          <Heading
            text="50% off 
on starter pack"
          />
        </div>
        <PartBoxCenter />
      </div>
      <div className={styles.top}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="66"
          height="23"
          viewBox="0 0 66 23"
          fill="none"
        >
          <path
            d="M37.0802 15.7043C26.3631 14.2669 7.52631 6.04386 0.0802002 1.20428L65.0802 0.704285C65.2469 7.87095 65.4421 22.0339 65.0802 22.2043C64.5592 22.4495 50.0651 17.4458 37.0802 15.7043Z"
            fill="#CF4E16"
          />
        </svg>
      </div>
      <div
        style={{
          position: "absolute",
          right: -36,
          bottom: 22,
          zIndex: 3,
        }}
      >
        <ButtonPlay />
      </div>
    </div>
  );
};

export default OfferBox;
