import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../lib/cloudinary.js";

const storage = new CloudinaryStorage({
  cloudinary,
  params: async (req, file) => ({
    folder: "portfolio",
    resource_type: "auto",
  }),
});

export const upload = multer({ storage });