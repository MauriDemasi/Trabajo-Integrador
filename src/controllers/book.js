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


const deleteBookById = async (req, res) => {
  try {
    console.log('Deleting book with id:', req.params.id);
    const deletedBook = await bookService.deleteBookById(req.params.id);
    console.log('Deleted book:', deletedBook);
    res.json(deletedBook);
  } catch (error) {
    console.error('Error deleting book:', error);
    res.status(400).json({ action: "deleteBookById", error: error.message });
  }

}


module.exports = {createBook, getBooksByCriteria, updateBookById, deleteBookById}