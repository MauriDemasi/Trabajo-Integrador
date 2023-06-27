const {bookProvider}= require('../providers');
const { Book } = require('../models');


const createBook = async (book) => {
    return await bookProvider.createBook(book);
  };


const getBooksByCriteria= async (options) => {
  const booksFound = await bookProvider.getBooksByCriteria(options);
  
  if(booksFound.length === 0) {
    return null;
  }

  return booksFound;
}

// bookService.js
const updateBookById = async (id, update) => {
  // ...
  await Book.update(update, { where: { id } });
  const updatedBook = await Book.findByPk(id);
  return updatedBook;
};


module.exports = {createBook, getBooksByCriteria, updateBookById}