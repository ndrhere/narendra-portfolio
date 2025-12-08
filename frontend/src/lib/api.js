import { axiosInstance } from "./axios.js";


export const getAdminUser = async () => {
   try {
    const res = await axiosInstance.get("/auth/me");
    return res.data
   } catch(error) {
     console.log("Error in getAdminUser", error);
     return null;
   }
}

export const adminLogin = async (loginData) => {
   const response = await axiosInstance.post("/auth", loginData)
   return response.data
}

export const getAllProjects = async () => {
   const response = await axiosInstance.get("/project");
   return response.data
}
export const getProject = async (id) => {
   const response =  await axiosInstance.get(`/project/${id}`);
   return response.data
}

export const createProject = async (formData) => {
const response = await axiosInstance.post("/project", formData);
return response.data
}

export const editProject = async ({id, formData}) => {
const response = await axiosInstance.put(`/project/${id}`, formData);
return response.data
}

export const deleteProject =  async (id) => {
   const response = await axiosInstance.delete(`/project/${id}`);
   return response.data;
}

export const submitContact = async (form) => {
   const response = await axiosInstance.post("/contact", form);
   return response.data;
}