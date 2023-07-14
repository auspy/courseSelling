import mongoose from "mongoose";
import { Admin, Course, User } from "../../mongoose/modals/modals.js";

const resolverCourses = {
  getCourses: async () => {
    const docs = await Course.find({});
    return {
      msg: "Courses fetched successfully",
      status: "success",
      data: docs,
    };
  },
  getCourse: async (_, args) => {
    try {
      const { id } = args;
      const data = await Course.findById(id);
      // console.log(data);
      return {
        msg: "Courses fetched successfully",
        status: "success",
        data: [data],
      };
    } catch (error) {
      console.log(`Error in getCourse: ${error.message}`);
      return {
        msg: error.message,
        status: "failed",
        err: JSON.stringify(error),
      };
    }
  },
  getPurchasedCourses: async (_, __, context) => {
    try {
      const { user } = context;
      if (!(user && user._id)) return { msg: "Invalid user", status: "failed" };
      // console.log("getting purchased courses for user", user._id);
      const courses = await User.findById(user._id)
        .populate("purchasedCourses")
        .exec();
      return {
        msg: "Courses fetched successfully",
        status: "success",
        data: courses.purchasedCourses,
      };
    } catch (error) {
      console.log(`Error in getPurchasedCourses: ${error.message}`);
      return {
        msg: error.message,
        status: "failed",
        err: JSON.stringify(error),
      };
    }
  },
  getCreatedCourses: async (_, __, context) => {
    try {
      const { user } = context;
      if (!(user && user._id)) return { msg: "Invalid user", status: "failed" };
      // console.log("getting courses for user", user._id);
      const courses = await Admin.findById(user._id)
        .populate("createdCourses")
        .exec();
      return {
        msg: "Courses fetched successfully",
        status: "success",
        data: courses.createdCourses || [],
      };
    } catch (error) {
      console.log(`Error in getCreatedCourses: ${error.message}`);
      return {
        msg: error.message,
        status: "failed",
        err: JSON.stringify(error),
      };
    }
  },
};

const resolverMutCourses = {
  addCourse: async (_, args, context) => {
    try {
      const { user } = context;
      // console.log(user, "in add course");
      if (!(user && user._id)) return { msg: "Invalid user", status: "failed" };
      const { course } = args;
      if (!course.createdAt) course.createdAt = new Date();
      if (!course.creator) course.creator = user._id;
      course.creator = new mongoose.Types.ObjectId(course.creator);
      const newCourse = new Course(course);
      const updateCreatedCourses = await Admin.updateOne(
        { _id: course.creator },
        { $push: { createdCourses: newCourse._id } }
      );
      // console.log(updateCreatedCourses);
      if (
        updateCreatedCourses.acknowledged === false ||
        updateCreatedCourses.modifiedCount === 0 ||
        updateCreatedCourses.matchedCount === 0
      )
        // not updated
        return {
          msg: "failed to add course to admim",
          status: "failed",
          data: [updateCreatedCourses],
        };
      const doc = await newCourse.save();
      // console.log(doc);
      return {
        msg: "Course added successfully",
        status: "success",
        data: [doc],
      };
    } catch (error) {
      console.log(`Error in addCourse: ${error.message}`);
      return {
        msg: error.message,
        status: "failed",
        err: error,
      };
    }
  },
  updateCourse: async (_, args, context) => {
    try {
      // CHECKING USER
      const { user } = context;
      if (!(user && user._id)) return { msg: "Invalid user", status: "failed" };
      // DATA RECEIVED
      const input = args.input;
      const id = args.id;
      // console.log("data received", input, id, user);
      if (!id) return { msg: "Invalid id", status: "failed" };
      // UPDATING DATA
      const updateData = await Course.updateOne(
        { _id: id, creator: user._id }, // using creator to make sure that only the creator can update the course
        { $set: input }
      );
      // console.log("doc found to update", updateData);
      // CHECKING IF UPDATED
      if (
        updateData.acknowledged === false ||
        updateData.modifiedCount === 0 ||
        updateData.matchedCount === 0
      )
        // not updated
        return {
          msg: "failed to update course",
          status: "failed",
          data: [updateData],
        };
      // RETURNING UPDATED DATA ON SUCCESS
      return {
        msg: "Course updated successfully",
        status: "success",
        data: [updateData],
      };
    } catch (error) {
      console.log(`Error in updateCourse: ${error.message}`);
      return {
        msg: error.message,
        status: "failed",
        err: JSON.stringify(error),
      };
    }
  },
  purchaseCourse: async (_, args, context) => {
    try {
      const { user } = context;
      if (!(user && user._id)) return { msg: "Invalid user", status: "failed" };
      const { courseId, amount, payMethod } = args;
      // check if course exists
      const course = await Course.findById(courseId);
      // match price with amount
      if (course.price !== amount)
        return { msg: "Invalid amount", status: "failed" };
      // Add to purchased courses
      const updatePurchasedCourses = await User.updateOne(
        { _id: user._id },
        { $push: { purchasedCourses: courseId } }
      );
      if (
        updatePurchasedCourses.acknowledged === false ||
        updatePurchasedCourses.modifiedCount === 0 ||
        updatePurchasedCourses.matchedCount === 0
      )
        // not updated
        return {
          msg: "failed to add course to user",
          status: "failed",
          data: [updatePurchasedCourses],
        };
      return {
        msg: "Course purchased successfully",
        status: "success",
        data: [updatePurchasedCourses],
      };
    } catch (error) {
      console.log(`Error in purchaseCourse: ${error.message}`);
      return {
        msg: error.message,
        status: "failed",
        err: JSON.stringify(error),
      };
    }
  },
  // deleteCourse: async (_, args, context) => {
  //   try {
  //     // CHECKING USER
  //     const { user } = context;
  //     console.log(user);
  //     if (!(user && user._id)) return { msg: "Invalid user", status: "failed" };
  //     // DATA RECEIVED
  //     const id = args.id;
  //     // console.log("data received", id, user);
  //     if (!id) return { msg: "Invalid id", status: "failed" };
  //     // DELETING DATA
  //     const deleteData = await Course.deleteOne({
  //       _id: id,
  //       creator: user._id, // using creator to make sure that only the creator can delete the course
  //     });
  //     // console.log("doc found to delete", deleteData);
  //     // CHECKING IF DELETED
  //     if (
  //       deleteData.acknowledged === false ||
  //       deleteData.deletedCount === 0 ||
  //       deleteData.matchedCount === 0
  //     )
  //       // not deleted
  //       return {
  //         msg: "failed to delete course",
  //         status: "failed",
  //         data: [deleteData],
  //       };
  //     // RETURNING DELETED DATA ON SUCCESS
  //     return {
  //       msg: "Course deleted successfully",
  //       status: "success",
  //       data: [deleteData],
  //     };
  //   } catch (error) {
  //     console.log(`Error in deleteCourse: ${error.message}`);
  //     return {
  //       msg: error.message,
  //       status: "failed",
  //       err: JSON.stringify(error),
  //     };
  //   }
  // },
};

export { resolverCourses, resolverMutCourses };
