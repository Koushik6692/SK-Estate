import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default:
        "https://th.bing.com/th/id/OIP.puMo9ITfruXP8iQx9cYcqwHaGJ?rs=1&pid=ImgDetMain",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

export default User;
