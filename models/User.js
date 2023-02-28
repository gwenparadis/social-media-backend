const { Schema, model, Types } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      max_length: 25,
    },
    email: {
      type: String,
      required: true,
      max_length: 140,
    },
    thoughts: [
      {
        type: Types.ObjectId,
        ref: "Thought",
      },
    ],
    friends: [
      {
        type: Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

const User = model("user", userSchema);

module.exports = User;
