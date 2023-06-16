const { bookProvider } = require("../providers");

const getBooks = async () => {
  const books = await bookProvider.getBooks();
  if (books) {
    console.log(books);
  }
  return books;
};

const createBook = async (book) => {
  return await bookProvider.createBook(book);
};

module.exports = { getBooks, createBook };