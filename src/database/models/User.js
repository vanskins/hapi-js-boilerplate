const Mongoose = require("mongoose"),
  //The document structure definition
    Mixed = Mongoose.Schema.Types.Mixed,
    Schema = Mongoose.Schema,
    ObjectId = Schema.Types.ObjectId;

const UserSchema = new Schema({
    username: String,
    email: String,
    password: String,
}, { timestamps: true });

const user = Mongoose.model('user', UserSchema);

module.exports = user;

