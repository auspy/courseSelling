const typeQuery = `#related to queries
type Query {
    getCourse(id: ID!): Course
    getCourses: [Course!]!
    getPurchasedCourses(userId: ID!,test:String): [Course!]!
    }`;
export default typeQuery;
