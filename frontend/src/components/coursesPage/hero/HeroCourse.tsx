import BuyNowCard from "@/components/cards/BuyNowCard";
import Header from "@/components/header/Header";
import DetailTabGroup from "@/components/text/DetailTabGroup";
import Heading from "@/components/text/Heading";
import { convertCamelCaseToSentence } from "@/helper/common";
import { HeroCourseProps } from "@/types/types.hero";
import { DetailTabProps } from "@/types/types.text";

const HeroCourse = ({ courseData }: HeroCourseProps) => {
  const detailTabGroupData = (): DetailTabProps[] => {
    const data: DetailTabProps[] = [];
    const { img, price, desc, title, id, ...rest } = courseData;
    type Rest = typeof rest & {
      [key: string]: string | number;
    };
    const dt: Rest = rest;
    for (const key in dt) {
      if (Object.prototype.hasOwnProperty.call(dt, key)) {
        const obj: DetailTabProps = {
          title: convertCamelCaseToSentence(key),
          value: String(dt[key]),
        };
        data.push(obj);
      }
    }
    return data;
  };
  return (
    <div className="topContainer" style={{ height: "100vh" }}>
      <div
        className="topContainer"
        style={{
          borderBottom: "1px solid var(--light-bg)",
        }}
      >
        <Header />
      </div>
      {/* Course */}
      <div className="container1200 mt40">
        {/* HERO */}
        <div
          className="w100"
          style={{
            padding: "30px 20px",
            borderRadius: 5,
            backgroundColor: "var(--bg)",
            border: "1px solid var(--light-bg)",
            position: "relative",
          }}
        >
          {/* TEXT CONTAINER */}
          <div style={{ width: "100%", paddingInlineEnd: 350 }}>
            <Heading
              headingStyle={{ lineHeight: "125%" }}
              text="creative writing: Crafting personal essays with impact"
            />
            <p className="regu16 os mt15 mb20" style={{ opacity: 0.8 }}>
              {courseData.desc}
            </p>
            <DetailTabGroup data={detailTabGroupData()} />
          </div>
          {/* BUY BTN CONTAINER */}
          <BuyNowCard {...courseData.img} />
        </div>
      </div>
    </div>
  );
};
export default HeroCourse;
