//import mongoose package
import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Please enter your first name"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Please enter your email"],
    },
    message: {
      type: String,
      trim: true,
    },

    profileImageUrl: {
      type: String,
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
  },
  {
    timestamps: true,
  }
);
//export the model
export default mongoose.model("Contact", ContactSchema);
