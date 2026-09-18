import express from "express";
import cookieParser from "cookie-parser";

const app = express();

// ── Middleware ──────────────────────────────────────────────
app.use(express.json());                     // parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // parse URL-encoded bodies
app.use(cookieParser());                     // parse cookies

// ── Health check ────────────────────────────────────────────
app.get("/", (req, res) => {
  res.json({ success: true, message: "Perplexity API is running 🚀" });
});

// ── Routes (to be added) ────────────────────────────────────
// import authRoutes from "./routes/auth.routes.js";
// app.use("/api/auth", authRoutes);

export default app;
