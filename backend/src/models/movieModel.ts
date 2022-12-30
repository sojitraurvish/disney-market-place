import mongoose from "mongoose"

const MovieSchema=new mongoose.Schema({
    backgroundImg:{
        type:String,  
    },
    cardImg:{
        type:String,  
    },
    description:{
        type:String,  
    },
    subTitle:{
        type:String,  
    },
    title:{
        type:String,  
    },
    titleImg:{
        type:String,  
    },
    type:{
        type:String,  
    }
})

export const Movie=mongoose.model("Movie",MovieSchema)