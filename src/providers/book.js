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

const getBook = async (bookId) => {
  try {
    const book = await Book.findByPk(bookId, { include: { all: true } });
    return book;
  } catch (err) {
    console.error("Error when fetching Book", err);
    throw err;
  }
};

const updateBook = async (id, book) => {
  try {
    const updateBook = await Book.update(book,{where: { id }});
    return book;
  } catch (err) {
    console.error("Error when creating Book", err);
    throw err;
  }
};

module.exports = { getBooks, createBook, getBook, updateBook };