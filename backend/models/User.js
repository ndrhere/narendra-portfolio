import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    role: {
        type: String,
        default: "admin"
    }
})


userSchema.methods.matchPassword = async function (enteredPassword) {
const isPasswordCorrect = await bcrypt.compare(enteredPassword, this.password);
return isPasswordCorrect;
}


const User = mongoose.model("user", userSchema);
export default User;