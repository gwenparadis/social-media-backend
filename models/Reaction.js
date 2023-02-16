const { Schema, model } = require("mongoose");
const userSchema = require("./User");
const thoughtSchema = require("./Thought");
const friendSchema = require("./Friend");

const Reaction = model("reaction", reactionSchema);

module.exports = Reaction;
