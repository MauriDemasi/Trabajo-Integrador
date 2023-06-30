const { Book } = require("../models");

const createBook = async (book) => {
  try {
    const newBook = await Book.create(book);
    return newBook;
  } catch (error) {
    console.error("The book could not be created due to an error.", error);
    throw error;
  }
};

//Esta funcion busca todos los libros, o aquellos que cumplan con un criterio de busqueda

const getBooksByCriteria = async (options) => {
  try {
    const where = {};
    const validOptions = ["titulo", "autor", "anio", "isbn", "id", "library"];
    validOptions.forEach((option) => {
      if (options[option]) where[option] = options[option];
    });
    where.deletedAt = null;
    const books = await Book.findAll({
      where,
      attributes: { exclude: ["deletedAt"] },
    });
    return books;
  } catch (error) {
    console.error("The books could not be retrieved due to an error.", error);
    throw error;
  }
};

const updateBookById = async (id, book) => {
  try {
    const updatedBook = await Book.update(book, {
      where: {
        id: id,
      },
      returning: true, // Agrega esta opción para obtener el libro actualizado
    });
    return updatedBook[1][0]; // Devuelve el primer libro actualizado de la matriz
  } catch (error) {
    console.error("El libro no pudo ser actualizado debido a un error.", error);
    throw error;
  }
};

const deleteBookById = async (id) => {
  try {
    const deletedBook = await Book.findOne({
      where: {
        id: id,
      },
    });
    await Book.destroy({
      where: {
        id: id,
      },
    });
    return deletedBook;
  } catch (error) {
    console.error("El libro no pudo ser eliminado debido a un error.", error);
    throw error;
  }
};

module.exports = {
  createBook,
  getBooksByCriteria,
  updateBookById,
  deleteBookById,
};
