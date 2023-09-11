import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
	{
		name: {
			type: String,
			unique: true,
			requird: true,
		},
		email: {
			type: String,
			unique: true,
			requird: true,
		},
		password: {
			type: String,

			requird: true,
		},
	},
	{
		timestamps: true,
	},
);

export default mongoose.model("User", userSchema);
