const { Friend, Reaction, Thought, User } = require("../models");
const { ObjectId } = require("mongoose").Types;

module.exports = {
  //get all Users
  getUsers(req, res) {
    User.find();
    // .then(async (users) = > {
    //     const userObj = {
    //         users
    //     };
    //     return res.json(userObj);
  },
};
