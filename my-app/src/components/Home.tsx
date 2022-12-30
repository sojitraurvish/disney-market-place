import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Recommends from "./Recommends";
import Trending from "./Trending";
import Viewers from "./Viewers";
import {useEffect} from "react"
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import { getMovies } from "../store/actions/movieActions";
const Home=()=>{

    const dispatch=useDispatch<AppDispatch>();
    
    useEffect(() => {
        dispatch(getMovies())
    },[]);

    return (
        <Container>
            <ImgSlider/>
            <Viewers/>
            <Recommends/>
            <NewDisney/>
            <Originals/>
            <Trending/>
        </Container>
    )
}

const Container=styled.main`
    // border:2px solid red;
    overflow:hidden;
    position:relative;
    // display:block;
    min-height:100vh;
    top:89px;
    padding:0 4vw;
    

    &:after{
        content:"";
        background-image:url("/images/home-background.png") ;
        background-repeat:no-repeat;
        background-size:cover;
        background-position:top;
        position:absolute;
        top:0;
        left:0;
        right:0;
        min-height:100%;
        z-index:-1;
    }
`

export default Home;