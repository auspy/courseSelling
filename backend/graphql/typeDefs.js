import typeAuth from "./typedefs/type.auth.js";
import typeCourses from "./typedefs/type.courses.js";
import typeQuery from "./typedefs/type.query.js";
import typeUser from "./typedefs/type.user.js";

const typeDefs = [typeCourses, typeUser, typeAuth, typeQuery];

// console.log(typeDefs);
export default typeDefs;
