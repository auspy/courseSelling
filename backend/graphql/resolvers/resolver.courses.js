import { Course, User } from "../../mongoose/modals/modals.js";

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
    getPurchasedCourses: async (_, args) => {
      try {
        const courses = await User.findById(args.id)
          .populate("purchasedCourses")
          .exec();
        return courses || [];
      } catch (error) {
        console.log(`Error in getPurchasedCourses: ${error.message}`);
      }
    },
  },
};

export default resolverCourses;
