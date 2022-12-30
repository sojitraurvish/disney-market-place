import { MovieListState } from "./movieAction";
import { MovieDetailsState } from "./movieDetails";
import { UserLoginState } from "./userLogin";

export interface ReduxState{
    userLogin:UserLoginState,

    movieList:MovieListState,
    movieDetails:MovieDetailsState
}