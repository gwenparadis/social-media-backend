//This is supposed to be schema only???

const { Schema, model } = require("mongoose");
const userSchema = require("./User");
const thoughtSchema = require("./Thought");
const friendSchema = require("./Friend");

const reactionSchema = new Schema({
  reactionCount: {
    type: number,
  },
});

const Reaction = model("reaction", reactionSchema);

module.exports = Reaction;
