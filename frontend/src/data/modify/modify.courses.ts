import { generatePurchaseCount } from "@/helper/common";
import { defaultCourseImg } from "@/helper/constants.global";
import {
  CategoryEnum,
  CourseCategorySortedProps,
  CourseProps,
} from "@/types/types.course";

export const modifyCoursesData = (
  courses: CourseProps[],
  href: string | false = false
) => {
  return courses.map((course) => ({
    course: {
      ...course,
      img: {
        src: course.img?.src || course.imageLink || defaultCourseImg.src,
        alt: course.img?.alt || course.imageLink || defaultCourseImg.alt,
        fill: true,
      },
    },
    href,
  }));
};

export const modifyDivideIntoCategories = (
  courses: CourseProps[],
  href: string | false = false
): CourseCategorySortedProps => {
  const obj: Partial<CourseCategorySortedProps> = {};
  for (const course of courses) {
    if (!course.category) {
      continue;
    }
    if (!obj[CategoryEnum[course.category!]]) {
      obj[CategoryEnum[course.category]] = [];
    }
    obj[CategoryEnum[course.category]]!.push({
      course: {
        ...course,
        img: {
          ...course.img,
          src: course.img?.src || course.imageLink || defaultCourseImg.src,
          alt: course.img?.alt || course.imageLink || defaultCourseImg.alt,
          fill: true,
        },
      },
      href,
    });
  }
  return obj as CourseCategorySortedProps;
};
