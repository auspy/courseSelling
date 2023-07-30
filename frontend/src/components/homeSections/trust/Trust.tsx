import Heading from "@/components/text/Heading";
import { ImgProps } from "@/types/interface.img";
import Image from "next/image";

const logos: ImgProps[] = [
  {
    img: "/images/trust/1.png",
    alt: "1",
    width: 100,
    height: 97,
  },
  {
    img: "/images/trust/2.png",
    alt: "2",
    width: 100,
    height: 112,
  },
  {
    img: "/images/trust/3.png",
    alt: "3",
    width: 100,
    height: 40,
  },
  {
    img: "/images/trust/4.png",
    alt: "4",
    width: 100,
    height: 109,
  },
  {
    img: "/images/trust/4.png",
    alt: "4",
    width: 100,
    height: 105,
  },
];
const Trust = () => {
  return (
    <div className="fcc" style={{ padding: "100px 0" }}>
      <Heading
        text="We"
        highlightText="Collaborate"
        afterHighlightText="with 200+ Leading universities and companies"
        type={1}
        headingStyle={{ textAlign: "center", maxWidth: 730 }}
      />
      <div className="container1200 frcsb mt50">
        {logos.map((item, index) => (
          <Image
            key={item.alt + index}
            src={item.img}
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
