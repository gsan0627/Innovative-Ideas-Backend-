const container = require("./src/startup/container");
const server = container.resolve("app");
const { MONGO_URI } = container.resolve("config");

console.log(MONGO_URI);

const mongoose = require("mongoose");
mongoose.set("useCreateIndex", true);

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useFindAndModify: false })
  .then(() => server.start())
  .catch(console.error);