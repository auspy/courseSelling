import Heading from "@/components/text/Heading";
import { dummyLogos } from "@/data/dummy/data.logos";
import Image from "next/image";

const Trust = () => {
  return (
    <div className="container1200 fcc pv100" style={{}}>
      <Heading
        text="We"
        highlightText="Collaborate"
        afterHighlightText="with 200+ Leading universities and companies"
        type={1}
        headingStyle={{ textAlign: "center", maxWidth: 730, paddingInline: 25 }}
      />
      <div
        id="logoListContainer"
        className="container1200 frcsb mt50"
        style={{
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {dummyLogos.map((item, index) => (
          <Image
            priority
            key={item.alt + index}
            src={item.src}
            alt={item.alt}
            height={item.height || 100}
            width={item.width}
          />
        ))}
      </div>
    </div>
  );
};

export default Trust;
