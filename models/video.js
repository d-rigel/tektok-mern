import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  url: String,
  channel: String,
  likes: String,
  messages: String,
  description: String,
  song: String,
  shares: String,
});

export default mongoose.model("tektokVideo", videoSchema);
