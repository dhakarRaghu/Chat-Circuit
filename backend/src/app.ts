import  express  from "express";
import {config} from "dotenv";
import morgan from "morgan";  
import appRouter from "./routes/index.js";
import { cookie } from "express-validator";
import cookieParser from "cookie-parser";
import cors from "cors";
config();

const app = express();

app.use(cors({origin: "http://localhost:5173", credentials: true}));  // enable cors
app.use(express.json());  // parse json data
app.use(cookieParser(process.env.COOKIE_SECRET));  // parse cookies

// remove it in production
app.use(morgan("dev"));
 
app.use("/api/v1" , appRouter);  // all routes are prefixed with /api/v1

export default app;