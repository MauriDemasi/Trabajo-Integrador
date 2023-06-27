const {bookService}= require('../services');

const createBook =  async (req, res) => {
    try {
      console.log(`Book created by user with role ${req.user.role}`);
  
      const newBook = await bookService.createBook(req.body);
      res.json(newBook);
    } catch (err) {
      res.status(400).json({ action: "createBook", error: err.message });
    }
  };


const getBooksByCriteria= async (req, res) => {
  try {
    const books = await bookService.getBooksByCriteria(req.query);
    res.json(books);
  } catch (err) {
    res.status(400).json({ action: "getBooksByCriteria", error: err.message });
  }

}

// controller/book.js
// controller/book.js
const updateBookById = async (req, res) => {
  try {
    console.log('Updating book with id:', req.params.id);
    const updatedBook = await bookService.updateBookById(req.params.id, req.body);
    console.log('Updated book:', updatedBook);
    res.json(updatedBook);
  } catch (error) {
    console.error('Error updating book:', error);
    res.status(400).json({ action: "updateBookById", error: error.message });
  }
};



module.exports = {createBook, getBooksByCriteria, updateBookById}