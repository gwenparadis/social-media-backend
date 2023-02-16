const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction");
const thoughtSchema = require("./Thought");
const friendSchema = require("./Friend");

const User = model("user", userSchema);

module.exports = User;
