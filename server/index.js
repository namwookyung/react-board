const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");
const { urlencoded } = require("body-parser");

const PORT = process.env.port || 8000;

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "nwk951207@",
  database: "post",
});

exports.getConnectionPool = (callback) => {
  db.getConnection((err, conn) => {
    if (!err) callback(conn);
  });
};

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("connect!");
});

app.get("/api/get", (req, res) => {
  db.query("SELECT * FROM post", (err, rows, fields) => {
    if (err) throw err;
    res.send(rows);
  });
});

app.post("/api/insert", (req, res) => {
  const postTitle = req.body.postTitle;
  const postContent = req.body.postContent;
  const sqlQuery =
    "insert to post (postTitle, postContent) values ('asdfa?', 'asdfsdf?')";
  db.query(sqlQuery, [postTitle, postContent], (err, result) => {
    res.send("-----success-----");
  });
});
