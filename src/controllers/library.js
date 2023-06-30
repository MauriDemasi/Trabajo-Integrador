const { libraryService } = require("../services");

const createLibrary = async (req, res) => {
  try {
    console.log(`Library created by user with role ${req.user.role}`);

    const newLibrary = await libraryService.createLibrary(req.body);
    res.json(newLibrary);
  } catch (err) {
    res.status(400).json({ action: "createLibrary", error: err.message });
  }
};

//Esta funcion busca todos los libros, o aquellos que cumplan con un criterio de busqueda

const getLibrariesByCriteria = async (req, res) => {
  try {
    const libraries = await libraryService.getLibrariesByCriteria(req.query);
    res.json(libraries);
  } catch (err) {
    res
      .status(400)
      .json({ action: "getLibrariesByCriteria", error: err.message });
  }
};

const updateLibraryById = async (req, res) => {
  try {
    console.log("Updating libraru with id:", req.params.id);
    const updatedLibrary = await libraryService.updateLibraryById(
      req.params.id,
      req.body
    );
    console.log("Updated library:", updatedLibrary);
    res.json(updatedLibrary);
  } catch (error) {
    console.error("Error updating library:", error);
    res.status(400).json({ action: "updateLibraryById", error: error.message });
  }
};

const deleteLibraryById = async (req, res) => {
  try {
    console.log("Deleting library with id:", req.params.id);
    const deletedLibrary = await libraryService.deleteLibraryById(
      req.params.id
    );
    console.log("Deleted library:", deletedLibrary);
    res.json(deletedLibrary);
  } catch (error) {
    console.error("Error deleting library:", error);
    res.status(400).json({ action: "deleteLibraryById", error: error.message });
  }
};
const createBookFromLibrary = async (req, res) => {
  try {
    const bookData = req.body;
    const libraryId = req.params.id;

    console.log("bookData:", bookData);

    const newBook = await libraryService.createBookFromLibrary(
      libraryId,
      bookData
    );
    res.status(201).json(newBook);
  } catch (error) {
    console.error("Error creating book:", error);
    res
      .status(400)
      .json({ action: "createBookFromLibrary", error: error.message });
  }
};

module.exports = {
  createLibrary,
  getLibrariesByCriteria,
  updateLibraryById,
  deleteLibraryById,
  createBookFromLibrary,
};
