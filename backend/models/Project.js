import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    project_name: {
      type: String,
      required: true,
    },
    project_description: {
      type: String,
      required: true,
    },
    project_duration: {
      type: String,
      required: true,
    },
    attachments: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    resourceType: {
      type: String,
    }
  },
  { timestamps: true }
);

const Project = mongoose.model("Project", projectSchema);
export default Project;
