const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction");

const thoughtSchema = new Schema(
  {
    id: {
      type: Number,
      autoincrement: true,
    },
    thoughtText: {
      type: String,
      required: true,
      max_length: 300,
    },
    username: {
      type: String,
      required: true,
      max_length: 25,
    },
    reactions: [reactionSchema],
    reactionCount: [reactionSchema.length],
  },
  { timestamps: true },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Thought = model("thought", thoughtSchema);

module.exports = Thought;
