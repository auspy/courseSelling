import { DetailTabProps } from "@/types/types.text";
import DetailTabGroup from "../text/DetailTabGroup";
import Heading from "../text/Heading";
import { CourseDetailsProps, CourseProps } from "@/types/types.course";
import { convertCamelCaseToSentence } from "@/helper/common";
import { memo } from "react";

const detailTabGroupData = (courseData: CourseProps): DetailTabProps[] => {
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

const CourseDetails = ({
  styleContainer,
  courseData,
  deviceType,
}: CourseDetailsProps) => {
  console.log("courseDetails is ssr");
  return (
    <>
      <div style={{ width: "100%", ...styleContainer }}>
        <Heading
          headingStyle={{ lineHeight: "125%" }}
          text={courseData.title}
        />
        <p className="regu16 os mt15 mb20" style={{ opacity: 0.8 }}>
          {courseData.description &&
            courseData.description.charAt(0)?.toUpperCase() +
              courseData.description.slice(1)}
        </p>
        <DetailTabGroup
          deviceType={deviceType}
          data={detailTabGroupData(courseData)}
        />
      </div>
    </>
  );
};

export default memo(CourseDetails);
