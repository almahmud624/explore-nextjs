import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
	{
		name: {
			type: String,
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

export default mongoose.models.User || mongoose.model("User", userSchema);
