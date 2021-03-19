const mongoose = require("mongoose")

// Model User
const UserSchema = new mongoose.Schema({
    name: String,
    email: String
});

module.exports = mongoose.model("User", UserSchema)