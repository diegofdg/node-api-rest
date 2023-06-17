const { bookService } = require("../services");

const getBooks = async (req, res) => {
  try {
    const books = await bookService.getBooks();
    if (!books) {
      res.status(404).json({ action: "getBooks", error: "Books Not Found" });
    } else {
      res.json(books);
    }
  } catch (err) {
    res.status(500).json({ action: "getBooks", error: err.message });
  }
};

const createBook = async (req, res) => {
  try {
    const newBook = await bookService.createBook(req.body);
    res.json(newBook);
  } catch (err) {
    res.status(500).json({ action: "createBook", error: err.message });
  }
};

const getBook = async (req, res) => {
  try {
    const book = await bookService.getBook(req.params.bookId);
    if (!book) {
      res.status(404).json({ action: "getBook", error: "Book Not Found" });
    } else {
      res.json(book);
    }
  } catch (err) {
    res.status(500).json({ action: "getBook", error: err.message });
  }
};

const updateBook = async (req, res) => {
  try {
    const book = await bookService.getBook(req.params.bookId);
    if (!book) {
      res.status(404).json({ action: "updateBook", error: "Book Not Found" });
    } else {
      const updatedBook = await bookService.updateBook(req.params.bookId, req.body);
      res.json(updatedBook);
    }
  } catch (err) {
    res.status(500).json({ action: "updateBook", error: err.message });
  }
};

const deleteBook = async (req, res) => {
  try {
    await bookService.deleteBook(req.params.bookId);
    res.json({ action: "deleteBook", message: "sucessful" });
  } catch (err) {
    res.status(500).json({ action: "deleteBook", error: err.message });
  }
};


module.exports = { getBooks, createBook, getBook, updateBook, deleteBook };