import { Router } from "express";
import { getAllUsers } from "../controllers/user-controllers";
import { userSignup, userLogin, verifyUser, userLogout } from "../controllers/user-controllers";
import { signupValidator, loginValidator, validate } from "../utils/validator";
import { verifyToken } from "../utils/token-managers";


const userRoutes = Router();

userRoutes.get("/", getAllUsers);
userRoutes.post("/signup", validate(signupValidator), userSignup);
userRoutes.post("/login", validate(loginValidator), userLogin);
userRoutes.get("/auth-status", verifyToken, verifyUser);
userRoutes.get("/logout", verifyToken, userLogout);

export default userRoutes;