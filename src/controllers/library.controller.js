const { libraryService } = require("../services");

const createLibrary = async (req, res) => {
  try {
    const newLibrary = await libraryService.createLibrary(req.body);
    res.json(newLibrary);
  } catch (err) {
    res.status(500).json({ action: "createLibrary", error: err.message });
  }
};

const getLibraries = async (req, res) => {
  try {
    const libraries = await libraryService.getLibraries();
    if (!libraries) {
      res.status(404).json({ action: "getLibraries", error: "Libraries Not Found" });
    } else {
      res.json(libraries);
    }
  } catch (err) {
    res.status(500).json({ action: "getLibraries", error: err.message });
  }
};

const getLibrary = async (req, res) => {
  try {
    const library = await libraryService.getLibrary(req.params.libraryId);
    if (!library) {
      res.status(404).json({ action: "getLibrary", error: "Library Not Found" });
    } else {
      res.json(library);
    }
  } catch (err) {
    res.status(500).json({ action: "getLibrary", error: err.message });
  }
};

const updateLibrary = async (req, res) => {
  try {
    const library = await libraryService.getLibrary(req.params.libraryId);
    if (!library) {
      res.status(404).json({ action: "updateLibrary", error: "Library Not Found" });
    } else {
      const updatedLibrary = await libraryService.updateLibrary(req.params.libraryId, req.body);
      res.json(updatedLibrary);
    }
  } catch (err) {
    res.status(500).json({ action: "updateLibrary", error: err.message });
  }
};

const deleteLibrary = async (req, res) => {
  try {
    await libraryService.deleteLibrary(req.params.libraryId);
    res.json({ action: "deleteLibrary", message: "sucessful" });
  } catch (err) {
    res.status(500).json({ action: "deleteLibrary", error: err.message });
  }
};


module.exports = { getLibraries, createLibrary, getLibrary, updateLibrary, deleteLibrary };