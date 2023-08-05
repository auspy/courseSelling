const typeCourses = `#related to courses
type Creator{
    _id: ID!
    username: String!
    createdCourses: [Course!]!
}
type Course {
    _id: ID!
    title: String!
    description: String
    price: Float!
    imageLink: String
    published: Boolean!
    createdAt: String!
    creator: Creator!
    benefits: [String]
    rating: Float
    purchaseCount: Int
    category: String
  }
input CreateCourseInput {
    title: String!
    description: String
    price: Float!
    imageLink: String
    published: Boolean = false
    createdAt: String
    creator: ID
    benefits: [String]
    rating: Float
    purchaseCount: Int
    category: String!
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
