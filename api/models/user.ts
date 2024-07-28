import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
	firstName: {
		required: true,
		type: String,
	},
	lastName: {
		required: false,
		type: String,
	},
	email: {
		required: true,
		type: String,
		unique: true,
	},
	password: {
		required: true,
		type: String,
	},
});

export default mongoose.model("User", userSchema);
