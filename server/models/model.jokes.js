const mongoose = require("mongoose");
// const random = require("mongoose-simple-random");

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "setup is required for a joke"],
        minlength: [10, "setup must be at least 10 characters"]
    },
    punchline: {
        type: String,
        required: [true, "punchline is required for a joke"],
        minlength: [3, "punchline must be at least 3 characters"]
    }
}, {timestamps:true})

const Joke = mongoose.model("Joke", JokeSchema);
module.exports = Joke;