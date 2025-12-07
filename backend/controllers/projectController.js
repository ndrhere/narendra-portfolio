import cloudinary from "../lib/cloudinary.js";
import Project from "../models/Project.js";

export async function getProjects(req, res) {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    console.log("Error in getProjects Controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function getProject(req, res) {
  try {
    const project = await Project.findById(req.params.id);
    res.status(200).json(project);
  } catch (error) {
    console.log("Error in getProject Controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function createProject(req, res) {
  try {
    const { project_name, project_description, project_duration } = req.body;

    if (!project_name || !project_description || !project_duration) {
      return res.status(400).json({ message: "All fields are required" });
    }

    let attachmentUrl = null;

    // multer se file aayi?
    if (req.file) {
      attachmentUrl = req.file.path;
    }

    console.log("Request File", req.file);

    const project = new Project({
      project_name,
      project_description,
      project_duration,
      attachments: attachmentUrl ? attachmentUrl : "",
      thumbnail: attachmentUrl,
      resourceType: req.file ? req.file.resourceType : "",
    });

    await project.save();

    res.status(201).json({message: "Project created successfully", project});
  } catch (error) {
    console.log("Error in createProject Controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function updateProject(req, res) {
    const { id } = req.params;
    const { project_name, project_description, project_duration } = req.body;
  try{
     const project = await Project.findById(id);

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    project.project_name = project_name || project.project_name;
    project.project_description = project_description || project.project_description;
    project.project_duration = project_duration || project.project_duration;

    if (req.file) {

      if(project.thumbnail) {
        const publicId = project.thumbnail.split("/").pop().split(".")[0];
          await cloudinary.uploader.destroy(`portfolio/${publicId}`, {
          resource_type: project.resourceType,
        });
      }
    }

    project.thumbnail = req.file ? req.file.path : project.thumbnail;
    project.attachments = req.file ? req.file.path : project.attachments;
    project.resourceType = req.file ? req.file.resourceType : project.resourceType;

    await project.save();
    res.status(200).json({message: "Project updated successfully", project});

  } catch(error) {
    console.log("Error in updateProject Controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function deleteProject(req, res) {

  try {
    const { id } = req.params;
    const project = await Project.findById(id);

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    if (project.thumbnail) {

      const publicId = project.thumbnail.split("/").pop().split(".")[0];

      await cloudinary.uploader.destroy(
        `portfolio/${publicId}`,
        { resource_type: project.resourceType }
      );
    }

    const deletedProject = await Project.findByIdAndDelete(id);
    res.status(200).json({message: "Project deleted successfully", deletedProject});
  } catch(error) {
    console.log("Error in deleteProject Controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
