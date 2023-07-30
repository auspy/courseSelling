import PartBoxRight from "@/static/parts/box/PartBoxRight";
import PartBoxLeft from "@/static/parts/box/PartBoxLeft";
import PartBoxCenter from "@/static/parts/box/PartBoxCenter";
import styles from "@/static/styles/button.module.scss";
import Heading from "@/components/text/Heading";
import ButtonPlay from "@/components/buttons/ButtonPlay";

const OfferBox = () => {
  return (
    <div
      className={`${styles.hover} ${styles.parent} ${styles.boxTransform}`}
      style={{
        position: "absolute",
        bottom: 8,
        left: "50%",
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
        <PartBoxRight />
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
