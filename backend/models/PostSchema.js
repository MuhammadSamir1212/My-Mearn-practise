import mongoose from "mongoose";

const CreateUserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

const Users = mongoose.model("Users", CreateUserSchema);

export default Users;
