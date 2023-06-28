const {libraryProvider}= require('../providers');
const { Library } = require('../models');


const createLibrary = async (library) => {
    return await libraryProvider.createLibrary(library);
  };


const getBooksByCriteria= async (options) => {
  const booksFound = await bookProvider.getBooksByCriteria(options);
  
  if(booksFound.length === 0) {
    return null;
  }

  return booksFound;
}


const updateBookById = async (id, update) => {
  await bookProvider.updateBookById(id, update);
  const updatedBook = await bookProvider.getBooksByCriteria({id});
  return updatedBook;
};

const deleteBookById = async (id) => {
  const deletedBook = await bookProvider.deleteBookById(id);
  return deletedBook;
}


module.exports = {createLibrary}