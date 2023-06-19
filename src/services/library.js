const { libraryProvider } = require("../providers");

const createLibrary = async (library) => {
  return await libraryProvider.createLibrary(library);
};

const getLibraries = async () => {
  return await libraryProvider.getLibraries();
};

const getLibrary = async (libraryId) => {
  return await libraryProvider.getLibrary(libraryId);
};

const updateLibrary = async (id, library) => {
  return await libraryProvider.updateLibrary(id, library);
};

const deleteLibrary = async (id) => {
  return await libraryProvider.deleteLibrary(id);
};

module.exports = { createLibrary, getLibraries, getLibrary, updateLibrary, deleteLibrary };