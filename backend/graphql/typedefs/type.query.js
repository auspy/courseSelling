const typeQuery = `#related to queries
type Query {
    # COURSES
    getCourse(id: ID!): courseRes!
    getCourses: courseRes!
    getPurchasedCourses: courseRes!
    getCreatedCourses: courseRes!
    
    # AUTH
    login(username: ID!, password: String!, role: Role!): authResponse!
}`;
export default typeQuery;
