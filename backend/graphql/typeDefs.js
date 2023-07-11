import typeCourses from "./typedefs/type.courses.js";
import typeQuery from "./typedefs/type.query.js";

const typeDefs = [
  `#graphql
type Book {
  title: String
  author: String
}`,
  `type Query {
  books: [Book]
}
`,
  typeCourses,
  typeQuery,
];

// console.log(typeDefs);
export default typeDefs;
