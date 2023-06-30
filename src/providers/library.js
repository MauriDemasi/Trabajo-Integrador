const { Library, Book } = require("../models");

const createLibrary = async (library) => {
  try {
    const newLibrary = await Library.create(library);
    return newLibrary;
  } catch (error) {
    console.error("The library could not be created due to an error.", error);
    throw error;
  }
};

//Esta funcion busca todos las librerias, o aquellas que cumplan con un criterio de busqueda

const getLibrariesByCriteria = async (options) => {
  try {
    const where = {};
    const validOptions = ["id", "name", "location", "telefono"];
    validOptions.forEach((option) => {
      if (options[option]) where[option] = options[option];
    });
    where.deletedAt = null;

    const libraries = await Library.findAll({
      where,
      include: {
        model: Book,
        where: { deletedAt: null },
        attributes: { exclude: ["deletedAt"] },
      },
      attributes: { exclude: ["deletedAt"] },
    });

    return libraries;
  } catch (error) {
    console.error(
      "The library/ies could not be retrieved due to an error.",
      error
    );
    throw error;
  }
};

const getLibraryById = async (id) => {
  try {
    const library = await Library.findByPk(id, {
      include: {
        model: Book,
        where: { deletedAt: null },
        attributes: { exclude: ["deletedAt"] },
      },
      attributes: { exclude: ["deletedAt"] },
    });

    if (!library) {
      throw new Error(`No library found with id ${id}`);
    }

    return library;
  } catch (error) {
    console.error("The library could not be retrieved due to an error.", error);
    throw error;
  }
};

const updateLibraryById = async (id, library) => {
  try {
    const updatedLibrary = await Library.update(library, {
      where: {
        id: id,
      },
      returning: true, // Agrega esta opción para obtener la libreria actualizada
    });
    return updatedLibrary[1][0];
  } catch (error) {
    console.error(
      "La libreria no pudo ser actualizado debido a un error.",
      error
    );
    throw error;
  }
};

const deleteLibraryById = async (id) => {
  try {
    const deletedLibrary = await Library.findOne({
      where: {
        id: id,
      },
    });
    await Library.destroy({
      where: {
        id: id,
      },
    });
    return deletedLibrary;
  } catch (error) {
    console.error(
      "La libreria no pudo ser eliminado debido a un error.",
      error
    );
    throw error;
  }
};

const createBookFromLibrary = async (libraryId, bookData) => {
  const newBook = await Book.create(bookData);
  await newBook.setLibrary(libraryId);
  return newBook;
};

module.exports = {
  createLibrary,
  getLibrariesByCriteria,
  getLibraryById,
  updateLibraryById,
  deleteLibraryById,
  createBookFromLibrary,
};
