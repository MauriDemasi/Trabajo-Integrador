const {bookProvider}= require('../providers');

const createBook = async (book) => {
    return await bookProvider.createBook(book);
  };

module.exports = {createBook}