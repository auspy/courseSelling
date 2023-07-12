import resolverCourses from "./resolvers/resolver.courses.js";
import resolverAuth from "./resolvers/resolvers.auth.js";

const resolvers = {
  Query: {
    ...resolverCourses,
    ...resolverAuth,
  },
};
export default resolvers;
