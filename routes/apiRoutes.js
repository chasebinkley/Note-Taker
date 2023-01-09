const fs = require ("fs");
const {v4: uuidv4} = require("uuid");

module.exports = (app) => {
    fs.readFile("db/db.json", "utf-8", (err, data) => {
        if (err) throw err;

        var notes = JSON.parse(data);

        function updateDB() {
            fs.writeFile("db/db.json", JSON.stringify(notes, "\t"), (err) => {
                if (err) throw err;
                return true;
            });
        }
        app.get("/api/notes", function (req,res) {
            res.json(notes);
        });
        app.post("/api/notes", function (req,res) {
            let newNote = req.body;
            newNote.id = uuidv4();
            notes.push(newNote);
            updateDB();
            res.json(newNote);
            return console.log("New note added: " + newNote.title);
        });

        app.delete("/api/notes/:id", function (req,res) {
            let noteID = req.params.id;
            deletedNote = notes.filter((note, i) => note.id === noteID);
            console.log("Notes deleted", deletedNote);
            console.log("index", notes.indexOf(deletedNote[0]));
            let newNotes = notes.filter((note, i) => notes.indexOf(note) !== i);
            console.log("new array", newNotes);
            res.json(newNotes);
        });
    });
};