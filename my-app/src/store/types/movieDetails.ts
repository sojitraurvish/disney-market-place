import { Action ,ActionWithPayload} from "../../utils/reducer.utils"
import { Movie } from "./movie"

export type MovieDetailsState={
    readonly movie?:Movie,
    readonly loading?:boolean,
    readonly error?:Error | null
}

export enum MOVIE_DETAILS_ACTION_TYPE{
    MOVIES_DETAILS_REQUEST="movie/MOVIES_DETAILS_REQUEST",
    MOVIES_DETAILS_SUCCESS="movie/MOVIES_DETAILS_SUCCESS",
    MOVIES_DETAILS_FAIL="movie/MOVIES_DETAILS_FAIL",
} 

export type MovieDetailsRequestAction=Action<MOVIE_DETAILS_ACTION_TYPE.MOVIES_DETAILS_REQUEST>
export type MovieDetailsSuccessAction=ActionWithPayload<MOVIE_DETAILS_ACTION_TYPE.MOVIES_DETAILS_SUCCESS,Movie>
export type MovieDetailsFailAction=ActionWithPayload<MOVIE_DETAILS_ACTION_TYPE.MOVIES_DETAILS_FAIL,Error>

export type MovieDetailsAction=
MovieDetailsRequestAction | 
MovieDetailsSuccessAction | 
MovieDetailsFailAction





