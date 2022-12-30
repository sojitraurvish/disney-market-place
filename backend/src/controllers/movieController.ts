import asyncHandler from "express-async-handler"
import { Request,Response } from "express";
import { Movie } from "../models/movieModel";

/**
 * Get all movies
 * @route POST /api/orders
 * @access Private
 */
export const getAllMovies=asyncHandler(async(req:Request,res:Response)=>{
    const movies=await Movie.find({});
   
    
    res.status(200).json(movies)
})

/**
 * get Movie by id
 * @route POST /api/orders
 * @access Private
 */
export const getMovieById=asyncHandler(async(req:Request,res:Response)=>{
    const movie=await Movie.findById(req.params.id);
   
    if(movie){
        res.status(200).json(movie)
    }else{
        throw new Error("Product not Found")
    }
    
})
