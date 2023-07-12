const typeQuery = `#related to queries
type Query {
    # COURSES
    getCourse(id: ID!): Course
    getCourses: [Course!]!
    getPurchasedCourses(userId: ID!,test:String): [Course!]!
    getCreatedCourses(userId: ID!): [Course!]!
    
    # AUTH
    login(username: ID!, password: String!, role: Role!): authResponse!
    register(user: UserInput!): authResponse!
}`;
export default typeQuery;
