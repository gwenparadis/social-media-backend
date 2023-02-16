const { Schema, model } = require("mongoose");
const userSchema = require("./User");
const reactionSchema = require("./Reaction");
const thoughtSchema = require("./Thought");

const Friend = model("friend", friendSchema);

module.exports = Friend;
