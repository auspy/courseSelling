"use client";
import { GET_COURSES } from "@/api/graphql/gql";
import TabButtonsRow from "@/components/buttons/TabButtons/TabButtonsRow";
import CourseCardGrid from "@/components/cards/CourseCardGrid";
import Heading from "@/components/text/Heading";
import { dummyTrainCardData } from "@/data/dummy/data.courses";
import { modifyDivideIntoCategories } from "@/data/modify/modify.courses";
import { CourseCardProps } from "@/types/types.card";
import {
  CategoryEnum,
  CourseCategorySortedProps,
  CourseProps,
  CoursesQueryProps,
} from "@/types/types.course";
import { useSuspenseQuery } from "@apollo/client";
import { useState } from "react";

const Train = () => {
  const [active, setActive] = useState<CategoryEnum>(CategoryEnum.design);
  const cardData: { [key: string]: CourseCardProps[] } = dummyTrainCardData();
  const { data } = useSuspenseQuery<CoursesQueryProps>(GET_COURSES);
  const foundCourses = data?.getCourses?.status == "success";
  const courses: CourseCategorySortedProps = modifyDivideIntoCategories(
    data?.getCourses?.data as CourseProps[]
  );
  return (
    <div
      className="topContainer"
      style={{
        // background: "linear-gradient(135deg, #383838 0%, #292929 100%)",
        background: "none",
      }}
    >
      <div className="container1200 fcc pv100" style={{}}>
        {/* HEADING */}
        <Heading
          headingStyle={{
            textAlign: "center",
            maxWidth: 630,
          }}
          text=""
          highlightText="Train"
          afterHighlightText="your team with real world skills and knowledge"
        />
        {/* TAB BUTTONS */}
        <div className="mt50 w100 fcc">
          <TabButtonsRow
            width={918}
            active={active}
            setActive={setActive}
            buttonList={Object.keys(cardData).slice(0, 7)}
            buttonStyle={{ width: "100%" }}
          />
        </div>
        {/* CARDS */}
        <CourseCardGrid
          type="row"
          gridStyle={{
            // grid: "auto/ repeat(4,minmax(260px,1fr))",
            // justifyContent: cardData[active].length == 4 ? "center" : "flex-start",
            gap: 25,
          }}
          maxItems={8}
          cardData={foundCourses ? courses[active] : cardData[active]}
          gridClass="mt30"
        />
      </div>
    </div>
  );
};

export default Train;
