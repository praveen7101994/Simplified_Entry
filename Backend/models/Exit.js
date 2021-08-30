const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExitSchema = new mongoose.Schema({
    At: {
        type: Date,
        default: Date.now,
    },
    User_Id: {
        type: Schema.Types.ObjectId
    },
    User_Name: {
        type: String
    },
    Society_Name: {
        type: String
    }

})

module.exports = mongoose.model("Exit", ExitSchema);