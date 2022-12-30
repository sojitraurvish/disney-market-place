import { createSelector } from "reselect";
import { RootState } from "../store"
import { MoviesMap } from "../types/movie";

export const selectMoviesReducer=(state:RootState)=>state.movieList;

export const selectMovies=createSelector(
    [selectMoviesReducer],
    (movieList)=>movieList.movies
)

export const selectMoviesMap=createSelector(
    [selectMovies],
    (movies)=>{
        return movies
    }
)

export const selectMovieDetailReducer=(state:RootState)=>state.movieDetails;

export const selectMovieDetails=createSelector(
    [selectMovieDetailReducer],
    (movieDetails)=>{
        console.log("selector");
        
        return movieDetails
    }
)
