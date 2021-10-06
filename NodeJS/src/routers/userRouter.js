import express from "express";
import {
  finishGithubLogin,
  getChangePassword,
  getEdit,
  logout,
  postChangePassword,
  postEdit,
  see,
  startGithubLogin,
} from "../controllers/userControllers.js";
import {
  protectMiddleWare,
  publicOnlyMiddleware,
  uploadFiles,
} from "../middlewares.js";

const userRouter = express.Router();

userRouter
  .route("/edit")
  .all(protectMiddleWare)
  .get(getEdit)
  .post(uploadFiles.single("avatar"), postEdit);
userRouter
  .route("/change-password")
  .all(protectMiddleWare)
  .get(getChangePassword)
  .post(postChangePassword);
userRouter.get("/logout", protectMiddleWare, logout);
userRouter.get("/github/start", publicOnlyMiddleware, startGithubLogin);
userRouter.get("/github/finish", publicOnlyMiddleware, finishGithubLogin);
userRouter.get(":id", see);

export default userRouter;
