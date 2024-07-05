const express = require("express");
const {
  getAllBooks,
  getSingleBookById,
  getAllIssuedBooks,
  addNewBook,
  updateBookById
} = require("../controllers/book-controller");


// const BookModel = require('../models/book-model');
// const UserModel = require("../models/user-model");

const router = express.Router();

const { UserModel, BookModel } = require("../models/index");


router.get("/:id", getSingleBookById);

router.get("/", getAllBooks);

router.get("/issued/by-user", getAllIssuedBooks);

router.post("/", addNewBook);


router.put("/updateBook/:id", updateBookById);


module.exports = router;