import mongoose from "mongoose";

const connectDb=async()=>{
    if(process.env.MONGO_URI!==undefined){
        try{
            mongoose.set('strictQuery', false);
            const conn=await mongoose.connect(process.env.MONGO_URI,{

            })

            console.log(`MongoDB Connected : ${conn.connection.host}`.cyan.underline);
            
        }catch(error:any){
            console.log(`Error: ${error.message}`.red.underline.bold)
            process.exit(1);
        }
    }else
    {
        console.log("Error : MONGO_URI define into env file or not able to read it".red);
        
    }
}

export default connectDb;