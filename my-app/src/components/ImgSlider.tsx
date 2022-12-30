import styled from "styled-components"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

const ImgSlider=()=>{
    let settings={
        dots:true,
        infinite:true,
        speed:500,
        slidesToShow:1,
        slidesToScroll:1,
        autoplay:true,
    }
    return(
            <Carousel {...settings}>
                <Warp>
                    <a>
                        <img src="/images/slider-badging.jpg" alt=""/>
                    </a>
                </Warp>
                <Warp>
                    <a>
                        <img src="/images/slider-scale.jpg" alt=""/>
                    </a>
                </Warp>
                <Warp>
                    <a>
                        <img src="/images/slider-badag.jpg" alt=""/>
                    </a>
                </Warp>
                <Warp>
                    <a>
                        <img src="/images/slider-scales.jpg" alt=""/>
                    </a>
                </Warp>
            </Carousel>
    )
}

const Carousel=styled(Slider)`
    // border:2px solid red;
    // margin:10px 10px;
    // margin-left:90px;
    // padding-left:190px;
    margin-top:20px;
    

    //button's setting
    & > button{
        opacity:0;
        height:100%;
        width:5vw;
        z-index:1;
        
        &:hover{
            transition:all 0.2s ease 0s;
            opacity:1;
        }
    }
    
    //dot's color
    ul li button{
        &:before{
            font-size:10px;
            color:rgb(150,158,171)
        }
    }

    li.slick-active button:before{
        color:white;
    }
    
    .slick-list{
        overflow:visible;
    }

    .slick-prev{
        left:-75px;
    }
    .slick-next{
        right:-75px;
    }

`

const Warp=styled.div`
    // border:2px solid red;
    cursor:pointer;
    position:relative;
    border-radius:4px;

    a{
        // border:2px solid green;
        border-radius:100px;
        box-shadow: 5px 5px 5px 5px lightblue;
        cursor:pointer;
        display:block;
        position:relative;
        // padding:4px;
        img{
            border-radius:100px;
            margin:auto;
            width:100%;
            height:100%;
        }

        &:hover{
            padding:0;
            border:4px solid rgba(249,249,249,0.8);
            transition-duration:360s;
        }
    }
`

export default ImgSlider