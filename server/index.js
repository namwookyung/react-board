const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");
const { urlencoded } = require("body-parser");
const PORT = process.env.port || 8000;

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "nwk951207@",
  database: "post",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/api/insert", (req, res) => {
  const postTitle = req.body.postTitle;
  const postContent = req.body.postContent;
  const sqlQuery =
    "INSERT INTO post (postTitle, postContent) VALUES ('제목', '내용?')";
  db.query(sqlQuery, [postTitle, postContent], (err, result) => {
    res.send("-----success-----");
  });
});

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
