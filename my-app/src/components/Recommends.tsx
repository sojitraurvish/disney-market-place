import styled from "styled-components"
import {Link} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectMoviesMap } from "../store/selectors/movieSelectors";
import { ReduxState } from "../store/types/reduxState";
import { AppDispatch } from "../store/store";
import { getMovies } from "../store/actions/movieActions";
import {useEffect} from "react"
const Recommends=()=>{

    const {movies}=useSelector((state:ReduxState)=>state.movieList);
    
    return (
        <Container>
            Recommended for You :
            <Content>
            {
                movies!.map((movie)=>(
                    <Warp key={movie._id}>
                        <Link to={"/details/"+movie._id}>
                            <img src={movie.cardImg} alt={movie.title}/>
                        </Link>
                    </Warp>
                ))
            }
        
                
            </Content>
        </Container>
    )
}

const Container=styled.div`
    margin-top:15px;
`
const Content=styled.div`
    margin-top:10px;
    padding:30px 0px 26px;
    display:grid;
    grid-gap:25px;
    grid-template-columns:repeat(4,minmax(0,1fr));
    grid template-rows:1;

    @media only screen and (max-width:768px){
        grid-template-columns:repeat(2,minmax(0,1fr))
    }
`

const Warp=styled.div`
    overflow:hidden;
    box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px,rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    border:2px solid rgba(249,249,249,0.1);
    cursor:pointer;
    transition:all 1s ease 0s;
    border-radius:10px;
    position:relative;

    img{
        inset:0px;
        display:block;
        width:100%;
        height:100%;
        object-fit:cover;
        // position:absolute;
        top:0;
        z-index:100%;
        opacity:1;
        transition:opacity 10s ease 0s;
    }

    &:hover{
        border-color:white;
        transform:scale(1.05);
        box-shadow:rgb(0 0 0 / 80%) 0px 26px 30px -10px,rgb(0 0 0 / 72%) 0px 16px 10px -10px;
    }
`


export default Recommends