const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000; 

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routing/apiroutes")(app);
require("./routing/htmlroutes")(app);


app.listen(PORT, function() {
    console.log("Hear YA!");
});
