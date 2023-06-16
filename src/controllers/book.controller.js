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

module.exports = { getBooks, createBook };