const typeMutation = `#graphql
type Mutation {
    # AUTH
    login(username: ID!, password: String!, role: Role!): authResponse!
    register(user: UserInput!): authResponse!
    logout: authResponse!

    # COURSES
    addCourse(input: CreateCourseInput!): courseRes!
    updateCourse(input: UpdateCourseInput!, id: ID!): courseRes!
    purchaseCourse(courseId: ID! ,amount: Float! ,payMethod: String!): courseRes!
    # deleteCourse(id: ID!): courseRes! # this is not needed as on deleting course, users with that course will still have that course in their purchased courses and cant be refunded
}`;

export default typeMutation;
