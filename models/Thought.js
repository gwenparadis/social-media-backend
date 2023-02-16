const { Schema, model } = require("mongoose");
const userSchema = require("./User");
const reactionSchema = require("./Reaction");
const friendSchema = require("./Friend");

const Thought = model("thought", thoughtSchema);

module.exports = Thought;
