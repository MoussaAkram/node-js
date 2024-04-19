import express from "express";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import morgan from "morgan";
import appRouter from "./src/routes";


config();
const app = express();
const cors_port = process.env.CORS_PORT

//middlewares
app.use(cors({ origin: cors_port, credentials: true }));
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));

// remove in production
app.use(morgan("dev"));

app.use("/api/v1", appRouter);

export default app;