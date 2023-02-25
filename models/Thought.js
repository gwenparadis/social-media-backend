const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction");

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      max_length: 300,
    },
    user_id: {
      type: String,
      required: true,
      max_length: 25,
    },
    reactions: [reactionSchema],
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
