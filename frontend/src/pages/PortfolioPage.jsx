import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteProject, getAdminUser, getAllProjects } from "../lib/api.js";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { useState } from "react";
import toast from "react-hot-toast";


const PortfolioPage = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  
  const { data: projects, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: () => getAllProjects(),
    
  });
   
  const {data} = useQuery({
    queryKey: ["admin"],
    queryFn: getAdminUser
  })

  const isAdmin = Boolean(data?.user?._id)


  const { mutate: deleteProjectMutation, isPending } = useMutation({
    mutationFn: deleteProject,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
    },
  });

  const handleDelete = (id) => {
    if(!isAdmin) {
      toast.error("Not Allowed, Admin only.");
      return;
    }

     if (!confirm("Delete this project?")) return;
      deleteProjectMutation(id);
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-lg" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200 px-6 py-10">
      <div className="max-w-6xl mx-auto">
        {/* {HEADER} */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold">Portfolio</h1>
          <Link to="/portfolio/add" className="btn btn-primary">
            Add Project
          </Link>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
          {projects?.map((project) => (
            <div
              key={project._id}
              className="group card bg-base-100 shadow-xl relative overflow-hidden"
            >
              {/* IMAGE/VIDEO */}
              {project.thumbnail?.includes("video") ? (
                <video
                  src={project.thumbnail}
                  controls
                  className="h-48 w-full object-cover"
                />
              ) : (
                <img
                  src={project.thumbnail}
                  className="h-48 w-full object-cover"
                  alt={project.project_name}
                />
              )}

              {/* BODY */}
              <div className="card-body">
                <h2 className="card-title !text-2xl text-warning">{project.project_name}</h2>

                <p className="line-clamp-3">{project.project_description}</p>
              </div>

              {/* HOVER OVERLAY */}
              <div
                className="
                  absolute inset-0 bg-black bg-opacity-60
                  opacity-0 group-hover:opacity-100
                  transition duration-200
                  flex items-start justify-end gap-8
                  pointer-events-none
                "
              >
                {/* EDIT    */}
                <button
                  onClick={() => navigate(`/portfolio/edit/${project._id}`)}
                  className="btn btn-circle btn-warning pointer-events-auto"
                ><FiEdit2 size={22} />
                </button>

                {/* DELETE */}
                <button onClick={() => handleDelete(project._id)} className="btn btn-circle btn-error pointer-events-auto">
                   <FiTrash2 size={22} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
