const express = require("express");
const mongoose = require("mongoose");
const app = express();
const db = require("./config/keys").MongoURI;
const users = require("./routes/api/users");
const posts = require("./routes/api/posts");
const profile = require("./routes/api/profile");
//connect to the database
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to mongoDB...");
  })
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello From Express");
});

//setup routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
