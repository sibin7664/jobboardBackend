import mongoose from "mongoose";

const JobSchema = new mongoose.Schema({
  title: String,
  company: String,
  category: String,
  location: String,
  description: String,
}, { timestamps: true });

const Job = mongoose.model('Job', JobSchema);
export default Job;

