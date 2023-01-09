// the dependencies
const express = require("express")
// initializes express
const app = express()
const PORT = process.env.PORT || 3001;
// setup data parsing
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(express.static("public"));
// require for the routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);
// PORT listener
app.listen(PORT, function () {
    console.log("app listening on PORT: " + PORT);
});