import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { db,app } from "../../firebase.config"
import { createAction} from "../../utils/reducer.utils";
import { AppThunk } from "../store";
import { USER_LOGIN_ACTION_TYPE } from "../types/userLogin";
import { errorHandler } from "./errorHandler";



export const login = ():AppThunk=> async(dispatch) => {
        try {
            dispatch(createAction(
                USER_LOGIN_ACTION_TYPE.USER_LOGIN_REQUEST
            ))
    
            const auth = getAuth();
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider)
            // console.log(result); 
    
            dispatch(createAction(
                USER_LOGIN_ACTION_TYPE.USER_LOGIN_SUCCESS,
                result
            ))
    
            localStorage.setItem("userInfo", JSON.stringify(result))
        } catch (error) {
            dispatch(createAction(
                USER_LOGIN_ACTION_TYPE.USER_LOGIN_FAIL,
                errorHandler(error)
            ))
        }
    }

    // export const logout = ():ThunkAction<Promise<void>,{},{},AnyAction> =>{
    //     return async(dispatch:ThunkDispatch<{}, {}, AnyAction>):Promise<void> => {

// export const logout = () => async(dispatch:ThunkDispatch<UserLoginState, void, AnyAction>):Promise<void> => {
export const logout = ():AppThunk => async(dispatch) => {
    
        try{

            const auth = getAuth(app);
            auth.signOut();
            localStorage.removeItem("userInfo");
 
            dispatch(createAction(
                USER_LOGIN_ACTION_TYPE.USER_LOGOUT
            ))
        } catch (error) {
            dispatch(createAction(
                USER_LOGIN_ACTION_TYPE.USER_LOGIN_FAIL,
                errorHandler(error)
            ))
        }
    }
