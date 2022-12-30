import {MovieListAction, MovieListState,MOVIE_LIST_ACTION_TYPE} from "../types/movieAction"
import { MovieDetailsAction, MovieDetailsState, MOVIE_DETAILS_ACTION_TYPE } from "../types/movieDetails";

export const MOVIE_LIST_INITIAL_STATE:MovieListState={
    movies:[],
    loading:false,
    error:null
}

export const movieListReducer=(state:MovieListState=MOVIE_LIST_INITIAL_STATE,action:MovieListAction):MovieListState=>{
    const {type}=action;

    if(type===MOVIE_LIST_ACTION_TYPE.MOVIES_FETCH_REQUEST){
        return {...state,loading:true}
    }

    if(type===MOVIE_LIST_ACTION_TYPE.MOVIES_FETCH_SUCCESS){
        return {...state,loading:false,movies:action.payload}
    }

    if(type===MOVIE_LIST_ACTION_TYPE.MOVIES_FETCH_FAIL){
        return {...state,loading:false,error:action.payload}
    }
    
    return state;
           
}

export const MOVIE_DETAILS_INITIAL_STATE:MovieDetailsState={
    loading:false,
    error:null
}

export const movieDetailsReducer=(state:MovieDetailsState=MOVIE_DETAILS_INITIAL_STATE,action:MovieDetailsAction):MovieDetailsState=>{
    const {type}=action;

    if(type===MOVIE_DETAILS_ACTION_TYPE.MOVIES_DETAILS_REQUEST){
        return {...state,loading:true}
    }

    if(type===MOVIE_DETAILS_ACTION_TYPE.MOVIES_DETAILS_SUCCESS){
        return {...state,loading:false,movie:action.payload}
    }

    if(type===MOVIE_DETAILS_ACTION_TYPE.MOVIES_DETAILS_FAIL){
        return {...state,loading:false,error:action.payload}
    }
    
    return state;
           
}