import HeroCourse from "@/components/coursesPage/hero/HeroCourse";
import List from "@/components/lists/List";
import {
  CourseProps,
  CourseQueryProps,
  CoursesQueryProps,
} from "@/types/types.course";
import CourseCardGrid from "@/components/cards/CourseCardGrid";
import GET_COURSE from "@/api/graphql/queries/getACourse.graphql";
import GET_COURSES from "@/api/graphql/queries/getCourses.graphql";
import { dummyCardData } from "@/data/dummy/data.courses";
import { listData } from "@/data/dummy/data.lists";
import { defaultCourseImg } from "@/helper/constants.global";
import { modifyCoursesData } from "@/data/modify/modify.courses";
import { getClient } from "@/api/graphql/ApolloClient";
import CourseDetails from "./CourseDesc";
import { DeviceTypeEnum } from "@/types/types.ui";
import CourseHeader from "../header/CourseHeader";

const CoursePage = async ({ id }: { id: string }) => {
  // console.log("course apage is ssr");
  const { data } = await getClient().query<CourseQueryProps>({
    query: GET_COURSE,
    variables: { id },
  });
  const foundCourse = data.getCourse.status == "success";
  const dataReceived = data.getCourse.data[0];
  // todo can limit the number of courses to be fetched. can add based on recommendations.
  // mostly will be getting from apollo cache or will store to cache to used later
  const { data: coursesData } = await getClient().query<CoursesQueryProps>({
    query: GET_COURSES,
  });
  const foundCourses = coursesData?.getCourses?.status == "success";
  return (
    <div className="topContainer" style={{ height: "100%", paddingBottom: 80 }}>
      <CourseHeader
        heading={dataReceived.title}
        purchaseCount={dataReceived.purchaseCount}
        price={dataReceived.price}
        _id={dataReceived._id}
      />
      <div
        className={`container1200 ${!foundCourse && "fcc"}`}
        style={{ height: "100%" }}
      >
        {foundCourse && (
          <HeroCourse
            courseData={{
              ...dataReceived,
              img: {
                ...dataReceived.img,
                src:
                  dataReceived.img?.src ||
                  dataReceived.imageLink ||
                  defaultCourseImg.src,
              },
            }}
          >
            <CourseDetails
              styleContainer={{ paddingInlineEnd: 350 }}
              courseData={dataReceived}
              deviceType={DeviceTypeEnum.desktop}
            />
          </HeroCourse>
        )}
        {/* BELOW HERO SECTIONS */}
        <div
          style={{
            maxWidth: foundCourse ? 834 : 1200,
            gap: 30,
            paddingTop: 30,
          }}
          className="w100 fcfs"
        >
          {/* WHAT YOU WILL LEARN */}
          <div className="w100">
            <h3 className="semi mb20">What you'll learn</h3>
            <List data={listData} maxColumns={2} maxRows={3} />
          </div>
          <div className="w100">
            <h3 className="semi mb20">
              {foundCourse
                ? "Students also bought"
                : "Some courses you might like"}
            </h3>
            <CourseCardGrid
              type={"grid"}
              cardData={
                foundCourses
                  ? modifyCoursesData(
                      coursesData?.getCourses?.data as CourseProps[]
                    )
                  : dummyCardData(5)
              }
              gridStyle={{
                width: "100%",
                gap: foundCourse ? 25 : "30px",
                padding: 0,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CoursePage;
