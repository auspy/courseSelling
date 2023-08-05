const typeQuery = `#related to queries
type Query {
    # COURSES
    getCourse(id: ID!): courseRes!
    getCourses: courseRes!
    getPurchasedCourses: courseRes!
    getCreatedCourses: courseRes!
    
}`;
export default typeQuery;
