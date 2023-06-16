const { Op } = require("sequelize");
const { Book } = require("../models");

const getBooks = async () => {
  try {
    const books = await Book.findAll();
    return books;
  } catch (err) {
    console.error("Error when fetching Books", err);
    throw err;
  }
};

const createBook = async (book) => {
  try {
    const newBook = await Book.create(book);
    return newBook;
  } catch (err) {
    console.error("Error when creating Book", err);
    throw err;
  }
};

module.exports = { getBooks, createBook };