const { bookProvider } = require("../providers");

const getBooks = async () => {
  const books = await bookProvider.getBooks();
  if (books) {
    console.log(books);
  }
  return books;
};

const getBook = async (bookId) => {
  const book = await bookProvider.getBook(bookId);
  if (book) {
    console.log(book);
  }
  return book;
};

const createBook = async (book) => {
  return await bookProvider.createBook(book);
};

const updateBook = async (id, book) => {
  return await bookProvider.updateBook(id, book);
};

const deleteBook = async (id) => {
  return await bookProvider.deleteBook(id);
};

module.exports = { getBooks, getBook, createBook, updateBook, deleteBook };