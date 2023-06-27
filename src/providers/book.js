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


//Esta funcion busca todos los libros, o aquellos que cumplan con un criterio de busqueda

const getBooksByCriteria = async (options) => {
    try {
        const where = {};
        if (options.titulo) where.titulo = options.titulo;
        if (options.autor) where.autor = options.autor;
        if (options.anio) where.anio = options.anio;
        if (options.isbn) where.isbn = options.isbn;
        if (options.id) where.id = options.id;
        if (options.library) where.library= options.library
        const books = await Book.findAll({ where })
        return books;
    }catch (error) {
        console.error("The books could not be retrieved due to an error.", error);
        throw error;
    }
}

const updateBookById = async (id, book) => {
    try {
      const updatedBook = await Book.update(book, {
        where: {
          id: id
        },
        returning: true // Agrega esta opción para obtener el libro actualizado
      });
      return updatedBook[1][0]; // Devuelve el primer libro actualizado de la matriz
    } catch (error) {
      console.error("El libro no pudo ser actualizado debido a un error.", error);
      throw error;
    }
  };
  



module.exports= {createBook, getBooksByCriteria, updateBookById}