// the dependencies
const path = require("path");

module.exports = (app) => {
  // the GET request to return notes.html
  app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });
  // and the GET request to return index.html
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};