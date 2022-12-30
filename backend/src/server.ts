import express, {Request,Response} from "express"
import dotenv from "dotenv"
import path from "path";
import colors from "colors"
import morgan from "morgan"
import connectDb from "./config/db";
import { errorHandler, notFound } from "./middleware/errorMiddleware";

// Routes
import movieRoutes from "./routes/moviesRoutes"


dotenv.config({path:path.join(__dirname,"..","config.env")})

connectDb();

const app=express();

if(process.env.NODE_ENV==="development"){
    app.use(morgan("dev"))
}

app.use(express.json())

// To enable colors
colors.enable();

app.get("/",(req:Request,res:Response)=>{
    res.send("API IS RUNNING...")
})

app.use("/api/movies",movieRoutes)

app.use(notFound)

app.use(errorHandler)

const PORT=process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server running in ${process.env.NODE_ENV} in port ${PORT}`.yellow.bold)
})