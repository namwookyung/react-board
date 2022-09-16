const express = require("express");
const app = express();
const mysql = require("mysql");
const PORT = process.env.port || 8000;

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "nwk951207@",
  database: "board",
});

app.get("/", (req, res) => {
  const sqlQuery =
    "INSERT INTO post (postIdx, postTitle, postContent, postDate) VALUES ('1', '테스트 제목', '테스트 내용', '2022-09-16')";
  db.query(sqlQuery, (err, result) => {
    res.send("-----success-----");
  });
});

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
