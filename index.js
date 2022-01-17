const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const route = require("./routes/user");
// eslint-disable-next-line no-unused-vars
const db = require("./model/user").sequelize;
const users = require("./model/user").User;

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/user", route);
users.sync({ force: true });
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening at ${PORT}`);
});
