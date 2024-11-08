import  express  from "express";
import {config} from "dotenv";
import morgan from "morgan";  
import appRouter from "./routes/index.js";
config();

const app = express();

app.use(express.json());  // parse json data

// remove it in production
app.use(morgan("dev"));
 
app.use("/api/v1" , appRouter);  // all routes are prefixed with /api/v1

export default app;