import resolverCourses from "./resolvers/resolver.courses.js";

const resolvers = {
  Query: {
    books: () => books,
  },
  ...resolverCourses,
};
export default resolvers;
