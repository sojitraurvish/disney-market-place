import { Action ,ActionWithPayload} from "../../utils/reducer.utils"
import { Movie } from "./movie"

export type MovieListState={
    readonly movies?:Movie[],
    readonly loading?:boolean,
    readonly error?:Error | null
}

export enum MOVIE_LIST_ACTION_TYPE{
    MOVIES_FETCH_REQUEST="movie/MOVIES_FETCH_REQUEST",
    MOVIES_FETCH_SUCCESS="movie/MOVIES_FETCH_SUCCESS",
    MOVIES_FETCH_FAIL="movie/MOVIES_FETCH_FAIL",
} 

export type MovieListRequestAction=Action<MOVIE_LIST_ACTION_TYPE.MOVIES_FETCH_REQUEST>
export type MovieListSuccessAction=ActionWithPayload<MOVIE_LIST_ACTION_TYPE.MOVIES_FETCH_SUCCESS,Movie[]>
export type MovieListFailAction=ActionWithPayload<MOVIE_LIST_ACTION_TYPE.MOVIES_FETCH_FAIL,Error>

export type MovieListAction=
MovieListRequestAction | 
MovieListSuccessAction | 
MovieListFailAction





