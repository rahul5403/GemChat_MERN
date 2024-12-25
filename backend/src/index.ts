import express from "express";
import { config } from "dotenv";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import { connectToDatabase } from "./db/connection.js";
import appRouter from "./routes/index.js";
import  path  from "path";

config(); // Initialize environment variables
const app = express();
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));

// Remove it in production
app.use(morgan("dev"));

// Routes
app.use("/api/v1", appRouter);

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "/frontend/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
});

// Database connection and server listener
const PORT = process.env.PORT || 5000;
connectToDatabase()
  .then(() => {
    app.listen(PORT, () =>
      console.log(`Server Open & Connected To Databased 🤟 on port ${PORT}`)
    );
  })
  .catch((err) => console.log(err));
