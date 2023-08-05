import {
  resolverCourses,
  resolverMutCourses,
} from "./resolvers/resolver.courses.js";
import resolverAuth from "./resolvers/resolvers.auth.js";

const resolvers = {
  CourseResData: {
    __resolveType(obj) {
      // console.log(obj, "resolve type");
      if (obj._id) return "Course";
      if (obj.acknowledged) return "updateRes";
      return null;
    },
  },
  Query: {
    ...resolverCourses,
  },
  Mutation: {
    ...resolverMutCourses,
    ...resolverAuth,
  },
};
export default resolvers;
