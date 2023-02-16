const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction");
const thoughtSchema = require("./Thought");
const friendSchema = require("./Friend");

const userSchema = new Schema(
  {
    thoughts: [thoughtSchema],
    friends: [friendSchema],
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
    friendcount: [friendSchema.length],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const User = model("user", userSchema);

module.exports = User;
