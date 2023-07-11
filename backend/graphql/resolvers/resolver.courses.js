import { Course } from "../../mongoose/modals/modals.js";

const resolverCourses = {
  Query: {
    getCourses: async () => {
      const docs = await Course.find({});
      return docs;
    },
    getCourse: async (_, args) => {
      try {
        const { id } = args;
        const data = await Course.findById(id);
        console.log(data);
        return data;
      } catch (error) {
        throw new Error(`Error in getCourse: ${error.message}`);
      }
    },
  },
};

export default resolverCourses;
