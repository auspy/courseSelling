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
enum Category{
    design
    development
    marketing
    business
    it
    personalDevelopment
    photography
    music
    lifestyle
    healthFitness
    teacherTraining
    academics
    language
    testPrep
}
input CreateCourseInput {
    title: String!
    description: String
    price: Float!
    imageLink: String
    published: Boolean = false
    benefits: [String]
    rating: Float
    purchaseCount: Int
    category: Category!
}
input UpdateCourseInput {
    title: String
    description: String
    price: Float
    imageLink: String
    published: Boolean
    benefits: [String]
    rating: Float
    purchaseCount: Int
    category: Category
}
union CourseResData = Course | updateRes
type courseRes{
    msg: String
    err: String
    status: String!
    data: [CourseResData!]
}`;

export default typeCourses;
