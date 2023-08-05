import { defaultCourseImg } from "@/helper/constants.global";
import { CourseProps } from "@/types/types.course";

export const modifyCoursesData = (courses: CourseProps[]) => {
  return courses.map((course) => ({
    course: {
      ...course,
      img: {
        src: course.img?.src || course.imageLink || defaultCourseImg.src,
        alt: course.img?.alt || course.imageLink || defaultCourseImg.alt,
        fill: true,
      },
    },
  }));
};
