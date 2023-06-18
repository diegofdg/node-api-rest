const { Book } = require("../models");

const createBook = async (book) => {
  try {
    const library = book.library;
    const newBook = await Book.create({
      ...book,
      LibraryId: library
    });
    return newBook;
  } catch (err) {
    console.error("Error when creating Book", err);
    throw err;
  }
};

const getBooks = async () => {
  try {
    const books = await Book.findAll({
      where: {
        status: true
      }});
    return books;
  } catch (err) {
    console.error("Error when fetching Books", err);
    throw err;
  }
};

const getBook = async (bookId) => {
  try {
    const book = await Book.findOne({
      where: {
        id: bookId,
        status: true
      }});
    return book;
  } catch (err) {
    console.error("Error when fetching Book", err);
    throw err;
  }
};

const updateBook = async (id, book) => {
  try {
    const updateBook = await Book.update(
      book,
      { 
        where: 
        {
          id
        }
      });
    return book;
  } catch (err) {
    console.error("Error when updating Book", err);
    throw err;
  }
};

const deleteBook = async (id) => {
  try {
    const deleteBook = await Book.update({
      status: false
    },
    {
      where: { 
        id
      }
    });
    return deleteBook;
  } catch (err) {
    console.error("Error when deleting Book", err);
    throw err;
  }
};

module.exports = { getBooks, createBook, getBook, updateBook, deleteBook };