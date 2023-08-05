// store courses as a map of course id to course
// this is to make it easier to get, remove,update a course
// we can even get all the courses by just getting the values of the map
import { CourseProps } from "@/types/types.course";
import { useLocalStorage } from "./constants.data";
import { getFromBrowser, storeInBrowser } from "./store.basic";

export const storeGetCourses = (
  onlyCourses: boolean = false,
  local: boolean = useLocalStorage
) => {
  const courses = JSON.parse(getFromBrowser("courses", local));
  if (onlyCourses && courses) {
    return Object.values(courses);
  }
  return courses;
};

export const storeGetCourse = (
  id: string,
  local: boolean = useLocalStorage
) => {
  const courses = storeGetCourses(local);
  return courses?.[id];
};

export const storeAddCourse = (course: CourseProps) => {
  const courses = storeGetCourses();
  if (!courses) {
    return null;
  }
  courses[course._id] = course;
  storeInBrowser("courses", courses);
};

export const storeAddCourses = (courses: CourseProps[]) => {
  const coursesMap: { [id: string]: CourseProps } = {};
  for (const course of courses) {
    coursesMap[course._id] = course;
  }
  storeInBrowser("courses", coursesMap);
};
