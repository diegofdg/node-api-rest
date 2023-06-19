const { bookProvider } = require("../providers");

const createBook = async (book) => {
  return await bookProvider.createBook(book);
};

const getBooks = async () => {
  return await bookProvider.getBooks();
};

const getBook = async (bookId) => {
  return await bookProvider.getBook(bookId);
};

const updateBook = async (id, book) => {
  return await bookProvider.updateBook(id, book);
};

const deleteBook = async (id) => {
  return await bookProvider.deleteBook(id);
};

module.exports = { createBook, getBooks, getBook, updateBook, deleteBook };