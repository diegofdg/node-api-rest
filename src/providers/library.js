const { Library, Book } = require("../models");

const createLibrary = async (library) => {
  try {
    const newLibrary = await Library.create(library);
    return newLibrary;
  } catch (err) {
    console.error("Error when creating Library", err);
    throw err;
  }
};

const getLibraries = async () => {
  try {
    const library = await Library.findAll({
      where: { 
        status: true
      },
      include: {
        required: false,
          model: Book,
          where: {
            status: true
          }
      }});
    return library;
  } catch (err) {
    console.error("Error when fetching Libraries", err);
    throw err;
  }
};

const getLibrary = async (libraryId) => {
  try {
    const library = await Library.findOne({
      where: { 
        id: libraryId,
        status: true
      },
      include: [
        { 
          required: false,
          model: Book,
          where: {
            status: true
          }
        }
      ]});
    return library;
  } catch (err) {
    console.error("Error when fetching Library", err);
    throw err;
  }
};

const updateLibrary = async (id, library) => {
  try {
    await Library.update(
      library,
      {
        where: {
          id
        }
      });
    return library;
  } catch (err) {
    console.error("Error when updating Library", err);
    throw err;
  }
};

const deleteLibrary = async (id) => {
  try {
    const deleteLibrary = await Library.update(
      {
        status: false
      },
      {
        where: {
          id
        }
      });
    return deleteLibrary;
  } catch (err) {
    console.error("Error when deleting Library", err);
    throw err;
  }
};

module.exports = { createLibrary, getLibraries, getLibrary, updateLibrary, deleteLibrary };