const { ObjectId } = require("mongoose").Types;
const { User, Friend, Thought, Reaction } = require("..models");

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
