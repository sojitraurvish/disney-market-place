import express from "express"

import {
    getAllMovies, 
    getMovieById
} from "../controllers/movieController"

const router=express.Router();

router.route("/:id")
        .get(getMovieById)

router.route("/")
        .get(getAllMovies)

export default router