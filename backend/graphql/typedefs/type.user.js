const typeUser = `#user related types
enum Role{
    ADMIN
    USER
}
type User{
    id: ID!
    username:ID!
    password:String!
    role: Role!
    email:String
    firstName:String
    lastName:String
    phone:String
    address:String
    city:String
    state:String
    zip:String
    country:String
    purchasedCourses:[ID]
    createdCourses:[ID]
}
input UserInput{
    username:ID!
    password:String!
    role: Role!
    email:String
    firstName:String
    lastName:String
    phone:String
    address:String
    city:String
    state:String
    zip:String
    country:String
}
`;
export default typeUser;
