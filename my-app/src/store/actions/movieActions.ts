import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { db, app } from "../../firebase.config"
import {  MOVIE_LIST_ACTION_TYPE,  } from "../types/movieAction";
import { createAction } from "../../utils/reducer.utils";
import { AnyAction, Dispatch } from "redux";
import axios from "axios";
import { errorHandler } from "./errorHandler";
import { AppThunk } from "../store";
import { MOVIE_DETAILS_ACTION_TYPE } from "../types/movieDetails";

export const getMovies = ():AppThunk => async (dispatch) => {
    
    
    try {
        dispatch(createAction(
            MOVIE_LIST_ACTION_TYPE.MOVIES_FETCH_REQUEST
        ))

        const config={
            headers:{
                "Content-Type":"application/json",
            }
        }

        const {data}=await axios.get(
            "/api/movies",
            config
        )
        
        dispatch(createAction(
            MOVIE_LIST_ACTION_TYPE.MOVIES_FETCH_SUCCESS,
            data
        ))


    } catch (error) {
        dispatch(createAction(
            MOVIE_LIST_ACTION_TYPE.MOVIES_FETCH_FAIL,
            errorHandler(error)
        ))
    }
}

export const listMovieDetails = (id:string):AppThunk => async (dispatch) => {
    
    
    try {
        dispatch(createAction(
            MOVIE_DETAILS_ACTION_TYPE.MOVIES_DETAILS_REQUEST
        ))

        console.log("listMovieDetails");
        
        const config={
            headers:{
                "Content-Type":"application/json",
            }
        }

        const {data}=await axios.get(
            `/api/movies/${id}`,
            config
        )
        
        dispatch(createAction(
            MOVIE_DETAILS_ACTION_TYPE.MOVIES_DETAILS_SUCCESS,
            data
        ))


    } catch (error) {
        dispatch(createAction(
            MOVIE_DETAILS_ACTION_TYPE.MOVIES_DETAILS_FAIL,
            errorHandler(error)
        ))
    }
}