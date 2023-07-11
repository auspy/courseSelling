const typeQuery = `#related to queries
type Query {
    getCourse(id: ID!): Course
    getCourses: [Course!]!
    }`;
export default typeQuery;
