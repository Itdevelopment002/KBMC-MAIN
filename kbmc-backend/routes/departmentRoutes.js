const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const router = express.Router();
const db = require("../config/db.js");

router.get("/departments", (req, res) => {
  db.query("SELECT * FROM departments", (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

router.post("/departments", (req, res) => {
  const { name, hod, link } = req.body;
  const sql = "INSERT INTO departments (name, hod, link) VALUES (?, ?, ?)";
  db.query(sql, [name, hod, link], (err, result) => {
    if (err) throw err;
    res.json({ id: result.insertId, name, hod, link });
  });
});

router.put("/departments/:id", (req, res) => {
  const { name, hod, link } = req.body;
  const sql = "UPDATE departments SET name = ?, hod = ?, link = ? WHERE id = ?";
  db.query(sql, [name, hod, link, req.params.id], (err, result) => {
    if (err) throw err;
    res.json({ success: true });
  });
});

router.delete("/departments/:id", (req, res) => {
  const sql = "DELETE FROM departments WHERE id = ?";
  db.query(sql, [req.params.id], (err, result) => {
    if (err) throw err;
    res.json({ success: true });
  });
});

module.exports = router;
