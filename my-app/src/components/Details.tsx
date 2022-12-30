import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavigateFunction, useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"
import { listMovieDetails } from "../store/actions/movieActions";
import { selectMovieDetails } from "../store/selectors/movieSelectors";
import { AppDispatch } from "../store/store";
import Spinner from "./Spinner";
import { toast } from "react-toastify";


const Details=()=>{
    const dispatch=useDispatch<AppDispatch>();
    const navigate=useNavigate();
    const {id}=useParams();
    
    const {movie,loading,error}=useSelector(selectMovieDetails);
    // console.log(movie,loading,error);

    useEffect(()=>{
        // console.log("heolo");
        dispatch(listMovieDetails(id!));
        // console.log("heolo1");
    },[id])

    if(!movie){
        return 
    }

    return (
        <>
            { loading ? (<Spinner/>) : error ? toast.error("Error : "+error) : (
                    <Container>
                    <BgImage src={movie!.backgroundImg ?? "/images/viewers-starwars.png"} alt="not_found"/>
                    
                    <ImageTitle>
                        <img src={movie?.titleImg ?? "/images/viewers-starwars.png"} alt="not_found" />
                    </ImageTitle>

                    <Controls>
                        <PlayBtn>
                            <img src="/images/play-icon-black.png" alt="not_found"></img>
                            <span>play</span>
                        </PlayBtn>
                        <Tailer>
                            <img src="/images/play-icon-black.png" alt="not_found"></img>
                            <span>trailer</span>
                        </Tailer>

                        <AddList>
                            <span></span>
                            <span></span>
                        </AddList>

                        <GroupWatch>
                            <img src="/images/group-icon.png" alt="not found"/>
                        </GroupWatch>

                        
                    </Controls>
                        
                        <SubTitle>
                            {movie?.subTitle}
                        </SubTitle>

                        <Description>
                            {movie?.description}
                        </Description>
                    </Container>
            ) }
                
            
        </>
    )
}

const Container=styled.div`
    // border:2px solid red;
    // background-color:white;
    color:white;

    position:relative;
    min-height:100vh;
    display:block;
    top:90px;
    padding:0 3.5vw;
`


const BgImage=styled.img`
// border:2px solid green;
position:absolute;
top:0px;
left:0px;
right:0px;
width:100%;
min-height:100vh;
object-fit:cover;
z-index:-1;

@media (max-width:768px){
    width:100:initial;
}

// inset:0px;
// display:block;
// width:100%;
// height:100%;
// object-fit:cover;
// position:relative;
// top:0;
// z-index:100%;
// opacity:1;
// transition:opacity 10s ease 0s;

// background-image:url("/images/login-background.jpg");
// background-repeat:no-repeat;
// background-size:cover;
// background-position:top;
// position:absolute;
// top:0;
// left:0;
// right:0;
// height:100%;
// z-index:-1;
`

const ImageTitle=styled.div`
    // border:2px solid green;
    display:flex;
    justify-content:flex-start;
    align-items:flex-end;
    margin:0px auto;
    height:30vh;
    min-height:170px;
    width:100%;
    overflow:hidden;

    img{
        // border:2px solid red;
        min-width:200px;
        max-width:300px;
        width:29vw;
    }
`
const Controls=styled.div`
    // border:2px solid red;
    width:825px;
    display:flex;
    margin:24px 0px;
    min-height:56px;
`
const PlayBtn=styled.button`
    display:flex;
    text-align:center;
    align-items:center;
    justify-content:center;
    background-color:rgb (249, 249, 249);
    font-size:15px;
    padding:0 27px 0 24px;
    height:56px;
    border-radius:4px;
    margin:0 22px 0 0;
    letter-spacing:1.8px;
    text-transform:uppercase;
    border:none;
    color:rgb(0, 0, 0);

    img{
        width:30px;
    }

    &:hover{
        background:rgb(198,198,198);
    }

    @media (max-width:768px){
        height:45px;
        padding:0 12px;
        font-size:12px;
        margin:0 10px 0px 0px;

        img{
            width:25px;
        }
    }
`

const Tailer=styled(PlayBtn)`
    background-color: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);

    img{
        filter:invert(100%);
    }

    &:hover{
        img{
            filter:brightness(0.25); 
        }
        span{
            color:black;
        }
    }
`

const AddList=styled.div`
   border:2px solid white;
   border-radius:100%;
   height:44px;
   width:44px;
   display:flex;
   text-align:center;
   align-items:center;
   justify-content:center;
   margin:0 22px 0 0;
    cursor:pointer;
    background-color:rgba(0, 0, 0, 0.6);

    span{
        display:inline-block;
        background-color:rgb(249,249,249);

        &:first-child{
            width:16px;
            height:2px;
            position:absolute;
        }
        &:nth-child(2){
            width:2px;
            height:16px
        }
    }

    @media (min-width:768px){
        height:56px;
        width:56px;
    }
`

const GroupWatch=styled.div`
    border:2px solid white;
    border-radius:100%;
    height:44px;
    width:44px;
    display:flex;
    justify-content:center;
    align-items:center;
    cursor:pointer;
    background: rgb(0, 0, 0);
    
    img{
        width:100%;
    }
    @media (min-width:768px){
        height:56px;
        width:56px;
    }
`

const SubTitle=styled.div`
    color:rgb(249,249,249);
    font-size:15px;
    min-height:20px;

    @media (max-width:768px){
        font-size:12px;
    }
`
const Description=styled.div`
    color:rgb(249,249,249);
    font-size:20px;
    padding:16px 0;
    line-height:1.4;
    letter-spacing:1.4px;

    @media (max-width:768px){
        font-size:14px;
    }
`


export default Details