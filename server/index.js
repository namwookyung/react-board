const express = require("express");
const router = express.Router();
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");
const { urlencoded } = require("body-parser");

const PORT = process.env.port || 4000;

const db = mysql.createConnection({
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

router.use(cors());
router.use(express.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get("/", (req, res) => {
  res.send("localhost:4000 -> connect");
});

router.get("/api", (req, res) => {
  res.send("localhost:4000/api -> connect");
});

router.get("/api/get", (req, res) => {
  db.query("SELECT * FROM post", (err, rows, fields) => {
    if (err) throw err;
    res.send(rows);
  });
});

router.post("/api/insert", (req, res) => {
  const postTitle = req.body.postTitle;
  const postContent = req.body.postContent;
  db.query(
    "INSERT INTO post (postTitle, postContent) values (?, ?)",
    [postTitle, postContent],
    (err, rows, fields) => {
      if (err) {
        console.log(err);
      } else {
        console.log(rows);
        res.send("localhost:4000/api/insert -> connect");
      }
    }
  );
});
