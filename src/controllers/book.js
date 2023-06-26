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

module.exports = {createBook}