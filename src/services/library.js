const {libraryProvider}= require('../providers');


const createLibrary = async (library) => {
    return await libraryProvider.createLibrary(library);
  };


const getLibrariesByCriteria= async (options) => {
  const librariesFound = await libraryProvider.getLibrariesByCriteria(options);
  
  if(librariesFound.length === 0) {
    return null;
  }

  return librariesFound;
}


const updateLibraryById = async (id, update) => {
  await libraryProvider.updateLibraryById(id, update);
  const updatedLibrary = await libraryProvider.getLibraryById(id)
  return updatedLibrary;
};


const deleteLibraryById = async (id) => {
  const deletedLibrary = await libraryProvider.deleteLibraryById(id);
  return deletedLibrary;
}

const createBookFromLibrary = async (libraryId, bookData) => {
  const newBook= await libraryProvider.createBookFromLibrary(libraryId, bookData);
  return newBook;

}


module.exports = {
  createLibrary, 
  getLibrariesByCriteria, 
  updateLibraryById, 
  deleteLibraryById, 
  createBookFromLibrary,
}