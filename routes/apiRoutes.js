const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

module.exports = (app) => {
  fs.readFile("db/db.json", "utf8", (err, data) => {
    if (err) throw err;
    var notes = JSON.parse(data);
    console.log("notes1", notes);
    function updateDb() {
      fs.writeFile("db/db.json", JSON.stringify(notes, "\t"), (err) => {
        if (err) throw err;
        return true;
      });
    }
    app.get("/api/notes", function (req, res) {
      res.json(notes);
    });
    app.post("/api/notes", function (req, res) {
      let newNote = req.body;
      newNote.id = uuidv4();
      notes.push(newNote);
      updateDb();
      res.json(newNote);
      return console.log("Added new note: " + newNote.title);
    });
    
  });
};