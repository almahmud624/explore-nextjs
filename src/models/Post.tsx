import mongoose from "mongoose";

const { Schema } = mongoose;

const postSchema = new Schema(
	{
		title: {
			type: String,
			requird: true,
		},
		desc: {
			type: String,
			requird: true,
		},
		img: {
			type: String,
			requird: true,
		},
		content: {
			type: String,
			requird: true,
		},
		username: {
			type: String,
			requird: true,
		},
	},
	{
		timestamps: true,
	},
);

export default mongoose.models.Post || mongoose.model("Post", postSchema);
