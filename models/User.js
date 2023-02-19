const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    id: {
      type: Number,
      autoincrement: true,
    },
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
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
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
