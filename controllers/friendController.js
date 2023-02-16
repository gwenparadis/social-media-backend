const { Friend, User } = require("../models");

module.exports = {
  //get all Friends
  getFriends(req, res) {
    Friend.find()
      .then((friends) => res.json(friends))
      .catch((err) => res.status(500).json(err));
  },

  //TODO: add a

  //delete a friend
  deleteFriend(req, res) {
    Friend.findOneAndDelete({ _id: req.params.friendId })
      .then((friend) => res.json({ message: "friend deleted!" }))
      .catch((err) => res.status(500).json(err));
  },
};
