import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { useState } from "react";
import { createProject, editProject, getAdminUser, getProject } from "../lib/api.js";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

const PortfolioFormPage = () => {
  const { id } = useParams();
  const isEdit = Boolean(id);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    project_name: "",
    project_description: "",
    project_duration: "",
  });

  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const {data} = useQuery({
    queryKey: ["admin"],
    queryFn: getAdminUser
  })
  console.log("Admin-data", data);

  const isAdmin = Boolean(data?.user?._id)

  const { data: project } = useQuery({
    queryKey: ["project"],
    queryFn: () => getProject(id),
    enabled: isEdit,
  });
  console.log("project", project);

  useEffect(() => {
    if (project) {
      setForm({
        project_name: project.project_name,
        project_description: project.project_description,
        project_duration: project.project_duration,
      });
      setPreview(project.thumbnail);
    }
  }, [project]);

  const { mutate: createProjectMutation, isPending: isCreating } = useMutation({
    mutationFn: createProject,
    onSuccess: () => {
      toast.success("Project created successfully");
      navigate("/")
    }
  });

  const { mutate: editProjectMutation, isPending: isEditing } = useMutation({
    mutationFn: editProject,
    onSuccess: () => {
      toast.success("Project updated successfully");
      navigate("/");
    }
  });

  const handleChange = (event) => {
    setForm(prev => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleFile = (event) => {
    const file = event.target.files[0];
    setFile(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if(!isAdmin) {
      toast.error("Not Allowed, Admin only.");
      return;
    }

    const formData = new FormData();
    formData.append("project_name", form.project_name);
    formData.append("project_description", form.project_description);
    formData.append("project_duration", form.project_duration);

    if (file) {
      formData.append("attachment", file);
    }

    console.log("formData", formData);
    if (isEdit) {
      editProjectMutation({id, formData });
    } else {
      createProjectMutation(formData);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-10">
      <div className="card w-full max-w-xl bg-base-100 shadow-lg">
        <div className="card-body">
          <h2 className="text-xl font-bold mb-3">
            {isEdit ? "Edit Project" : "Add New Project"}
          </h2>

          {/* // PORTFOLIO FORM */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="project_name"
              value={form.project_name}
              onChange={handleChange}
              required
              className="input input-bordered w-full"
              placeholder="Project Title"
            />

            <textarea
              name="project_description"
              value={form.project_description}
              onChange={handleChange}
              required
              className="textarea textarea-bordered w-full"
              placeholder="Project Description"
            />

            <input
              name="project_duration"
              value={form.project_duration}
              onChange={handleChange}
              required
              className="input input-bordered w-full"
              placeholder="Duration (eg. 3 days)"
            />

            <input
              type="file"
              accept="image/*,video/*"
              onChange={handleFile}
              className="file-input w-full"
            />

            {preview && (
              <>
                {preview.includes("video") || file?.type?.includes("video") ? (
                  <video
                    controls
                    src={preview}
                    className="w-full mt-4 rounded"
                  />
                ) : (
                  <img
                    src={preview}
                    alt="preview"
                    className="w-full mt-4 rounded"
                  />
                )}
              </>
            )}

            <button
              className="btn btn-primary w-full mt-4"
              disabled={isCreating || isEditing}
            >
              {isCreating || isEditing ? "Loading..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PortfolioFormPage;
