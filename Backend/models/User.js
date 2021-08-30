const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
	{
		name: {
			type: String,
            required: true
		},
		password: {
            type: String,
			required: true,
		},
		society: {
            type: String,
            required: true,
        },
		phoneNumber: {
            type: String,
            required: true
		},
    }
);

module.exports = mongoose.model("User", UserSchema);