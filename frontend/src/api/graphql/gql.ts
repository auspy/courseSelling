// all graphql queries and mutations are defined here
// queries
import GET_COURSES from "@/api/graphql/queries/getCourses.graphql";
import GET_COURSE from "@/api/graphql/queries/getACourse.graphql";
import GET_PURCHASED_COURSES from "@/api/graphql/queries/getPurchasedCourses.graphql";
import GET_CREATED_COURSES from "@/api/graphql/queries/getCreatedCourses.graphql";
// mutations
import CREATE_COURSE from "@/api/graphql/mutations/addCourse.graphql";
import UPDATE_COURSE from "@/api/graphql/mutations/updateCourse.graphql";
import PURCHASE_COURSE from "@/api/graphql/mutations/purchaseCourse.graphql";
import LOGIN from "@/api/graphql/mutations/login.graphql";
import REGISTER from "@/api/graphql/mutations/register.graphql";
import LOGOUT from "@/api/graphql/mutations/logout.graphql";

export {
  GET_COURSES,
  GET_COURSE,
  GET_PURCHASED_COURSES,
  GET_CREATED_COURSES as getCreatedCourses,
  CREATE_COURSE,
  UPDATE_COURSE,
  PURCHASE_COURSE,
  LOGIN,
  REGISTER,
  LOGOUT,
};
