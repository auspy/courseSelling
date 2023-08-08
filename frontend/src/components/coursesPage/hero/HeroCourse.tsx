import BuyNowCard from "@/components/cards/BuyNowCard";
import DetailTabGroup from "@/components/text/DetailTabGroup";
import Heading from "@/components/text/Heading";
import { convertCamelCaseToSentence } from "@/helper/common";
import { HeroCourseProps } from "@/types/types.hero";
import { DetailTabProps } from "@/types/types.text";

const HeroCourse = ({ courseData }: HeroCourseProps) => {
  const detailTabGroupData = (): DetailTabProps[] => {
    const data: DetailTabProps[] = [];
    const {
      img,
      price,
      description,
      title,
      _id,
      creator,
      published,
      createdAt,
      __typename,
      imageLink,
      benefits,
      ...rest
    } = courseData;
    type Rest = typeof rest & {
      [key: string]: string | number | boolean;
    };
    const dt: Rest = rest;
    data.push({ title: "Creator", value: String(creator?.username) });
    data.push({
      title: "Publish Date",
      value: new Date(Number(createdAt)).toDateString(),
    });
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
            text={courseData.title}
          />
          <p className="regu16 os mt15 mb20" style={{ opacity: 0.8 }}>
            {courseData.description &&
              courseData.description.charAt(0)?.toUpperCase() +
                courseData.description.slice(1)}
          </p>
          <DetailTabGroup data={detailTabGroupData()} />
        </div>
        {/* BUY BTN CONTAINER */}
        <BuyNowCard
          price={courseData.price}
          {...courseData.img}
          _id={courseData._id}
        />
      </div>
    </div>
  );
};
export default HeroCourse;
