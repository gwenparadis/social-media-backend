const connection = require("../config/connection");
const { Thought, User } = require("../models");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");

  // Clear existing data
  await Thought.deleteMany({});
  await User.deleteMany({});

  console.info("Seeding complete! Data reset 🌱");
  process.exit(0);
});
