const {Book}= require ('../models');

const createBook = async (book) => {
    try {
        const newBook = await Book.create(book);
        return newBook;
    } catch (error) {
        console.error("The book could not be created due to an error.", error);
        throw error;
    }

}

module.exports= {createBook}