const { libraryProvider } = require("../providers");

const createLibrary = async (library) => {
  return await libraryProvider.createLibrary(library);
};

const getLibraries = async () => {
  const libraries = await libraryProvider.getLibraries();
  if (libraries) {
    console.log(libraries);
  }
  return libraries;
};

const getLibrary = async (libraryId) => {
  const library = await libraryProvider.getLibrary(libraryId);
  if (library) {
    console.log(library);
  }
  return library;
};

const updateLibrary = async (id, library) => {
  return await libraryProvider.updateLibrary(id, library);
};

const deleteLibrary = async (id) => {
  return await libraryProvider.deleteLibrary(id);
};

module.exports = { getLibraries, getLibrary, createLibrary, updateLibrary, deleteLibrary };