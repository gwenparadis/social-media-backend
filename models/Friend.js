const { Schema, model } = require("mongoose");
const userSchema = require("./User");
const thoughtSchema = require("./Thought");

const friendSchema = new Schema(
  {
    thoughts: [thoughtSchema],
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

const Friend = model("friend", friendSchema);

module.exports = Friend;
