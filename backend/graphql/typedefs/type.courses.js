const typeCourses = `#related to courses
type Course {
    _id: ID!
    title: String!
    description: String
    price: Float!
    imageLink: String
    published: Boolean!
    createdAt: String!
    creator: ID!
  }
input CreateCourseInput {
    title: String!
    description: String
    price: Float!
    imageLink: String
    published: Boolean = false
    createdAt: String
    creator: ID
}
input UpdateCourseInput {
    title: String
    description: String
    price: Float
    imageLink: String
    published: Boolean
}
union CourseResData = Course | updateRes
type courseRes{
    msg: String
    err: String
    status: String!
    data: [CourseResData!]
}`;

export default typeCourses;
