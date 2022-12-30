import styled from "styled-components";
import {useDispatch,useSelector} from "react-redux"
import { login, logout } from "../store/actions/userActions";
import { Dispatch, useEffect } from "react";
import {useNavigate} from "react-router-dom"
import { selectUserLogin } from "../store/selectors/userSelectors";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { AppDispatch } from "../store/store";


const Header=()=>{
    const dispatch=useDispatch<AppDispatch>();
    const navigate=useNavigate();
    
    const {userInfo,loading,error}=useSelector(selectUserLogin) 

    useEffect(()=>{
        if(!userInfo){
            navigate("/");
        }

    },[userInfo])

    const handleAuth=async()=>{
        dispatch(login());
    }
    const logoutHandler=()=>{
        dispatch(logout())
        navigate("/");
    }

    return (
        <Nav>
            <Logo>
                <img src="/images/logo.svg" alt="Disney+"></img>
            </Logo>
            {userInfo ? (
                <>
                <NavMenu>
                <a href="/home">
                    <img src="/images/home-icon.svg" alt="HOME"/>
                    <span>HOME</span>
                </a>
                <a href="/search">
                    <img src="/images/search-icon.svg" alt="SEARCH"/>
                    <span>SEARCH</span>
                </a>
                <a href="/watchlist">
                    <img src="/images/watchlist-icon.svg" alt="WATCHLIST"/>
                    <span>WATCHLIST</span>
                </a>
                <a href="/original">
                    <img src="/images/original-icon.svg" alt="ORIGINAL"/>
                    <span>ORIGINAL</span>
                </a>
                <a href="/movie">
                    <img src="/images/movie-icon.svg" alt="MOVIE"/>
                    <span>MOVIE</span>
                </a>
                <a href="/series">
                    <img src="/images/series-icon.svg" alt="SERIES"/>
                    <span>SERIES</span>
                </a>
            </NavMenu>
            {/* {console.log(userInfo.user)} */}
            <SignOut>
                <UserImg src={userInfo.user.photoURL} alt={userInfo.user.displayName || 'Image'}/>
                <DropDown>
                    <span onClick={logoutHandler}>SignOut</span>
                </DropDown>
            </SignOut>
            </>

        ):<Login onClick={handleAuth}>Login</Login>
        }
        </Nav> 
    )
}

const Nav=styled.nav`
    // border:2px solid green;
    position:fixed;
    top:0;
    left:0;
    right:0;
    height:90px;
    background-color:#090b13;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:0 36px;
    letter-spacing:16px;
    z-index:1;
`

const Logo=styled.a`
    width:100px;
    max-height:70px;
    display:inline-block;
    img{
        display:block;
        width:100%;
    }
`

const NavMenu=styled.div`
    display:flex;
    align-items:center;
    flex-flow:row nowrap;
    height:100%;
    // justify-content:flex-end;
    margin:0;
    padding:0;
    position:relative;
    margin-right:auto;
    margin-left:25px;
    // border:2px solid red;

    a{
        display:flex;
        align-items:center;
        padding:0 12px;
        cursor:pointer;

        img{
            height:250px;
            width:25px;
            min-width:20px; 
            z-index:auto;
        }

        span{
            color:rgb(249,249,249);
            font-size:13px;
            letter-spacing:2.42px;
            padding:2px 0;
            white-space:nowrap;
            position:relative;

            &:before{
                content:"";
                background-color:rgb(249,249,249);
                border-radius:4px 4px 4px 4px;
                bottom:-6px;
                height:3px;
                left:0px;
                opacity:0;
                position:absolute;
                right:0px;
                transform-origin:left center;
                transform:scaleX(0);
                transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.95) 0s;
                visibility:hidden;
                width:auto;
            }
        }

        &:hover{
            span:before{
                transform:scaleX(1);
                visibility:visible;
                opacity:1 !important;
            }
        }
}

//    @media only screen and (max-width:768px){
//     display:none;
//    }
`

const Login=styled.a`
    background-color:rgb(0,0,0,0.6);
    padding:8px 16px;
    text-transform:uppercase;
    letter-spacing:1.5px;
    border:1px solid white;
    border-radius:4px;
    // font-weight:bold;
    transition:all 0.2 ease 0s;
    &:hover{
        background-color:white;
        color:#000;
        border-color:transparent;
    }
`



const UserImg=styled.img`
    margin:20px 0;
    width:100%;
    height:100%;
    border:2px solid white;
    border-radius:50%;

    &:hover{
        border:3px solid blue;
    }
`

const DropDown=styled.div`
    position:absolute;
    top:87px;
    right:0px;
    background-color:rgb(19,19,19);
    border:1px solid rgba(151,151,151,0.34);
    border-radius:4px;
    box-shadow:4px;
    padding:10px;
    padding-right:0px;
    font-size:14px;
    letter-spacing:10px;
    width:150px;
    display:flex;
    justify-content:center;
    // text-align:center;
    opacity:0;
    transition-duration:1s;
    
    &:hover{
        background-color:white;
        color:black;
    }
`
const SignOut=styled.div`
    overflow:hidden;
    // border:2px solid red;
    height:50px;
    width:50px;
    display:flex;
    justify-content:center;
    align-items:center;
    
    &:hover{
        ${DropDown}{
            opacity:1;
        }
    }
`

export default Header;