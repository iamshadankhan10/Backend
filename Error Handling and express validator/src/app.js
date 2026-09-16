import express from "express";
import authRouter from "./routes/auth.routes.js";
import handleError from "./middleware/error.middleware.js";

const app = express();

app.use("/api/auth", authRouter);


app.use(handleError); // middleware to handle errors, isko sabse last me rakhna hai taki agar koi error aaye to ye middleware usko handle kar sake
export default app;