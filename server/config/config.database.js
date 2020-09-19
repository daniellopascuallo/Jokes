const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/jokes_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("You are now in the mainframe"))
    .catch(() => console.log("Houston: we have a problem"));

