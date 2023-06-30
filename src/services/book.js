const { bookProvider } = require("../providers");
const { Book } = require("../models");

const createBook = async (book) => {
  return await bookProvider.createBook(book);
};

const getBooksByCriteria = async (options) => {
  const booksFound = await bookProvider.getBooksByCriteria(options);

  if (booksFound.length === 0) {
    return null;
  }

  return booksFound;
};

const updateBookById = async (id, update) => {
  await bookProvider.updateBookById(id, update);
  const updatedBook = await bookProvider.getBooksByCriteria({ id });
  return updatedBook;
};

const deleteBookById = async (id) => {
  const deletedBook = await bookProvider.deleteBookById(id);
  return deletedBook;
};

module.exports = {
  createBook,
  getBooksByCriteria,
  updateBookById,
  deleteBookById,
};
