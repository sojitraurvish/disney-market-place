import styled from "styled-components"
const Viewers=()=>{
    
    return (
        <Container>
            <Wrap>
                <img src="/images/viewers-disney.png" alt="not_found"/>
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src="/videos/1564674844-disney.mp4" type="video/mp4"/>
                </video>
            </Wrap>
            <Wrap>
                <img src="/images/viewers-marvel.png" alt="not_found"/>
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src="/videos/1564676115-marvel.mp4" type="video/mp4"/>
                </video>
            </Wrap>
            <Wrap>
                <img src="/images/viewers-national.png" alt="not_found"/>
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src="/videos/1564676296-national-geographic.mp4" type="video/mp4"/>
                </video>
            </Wrap>
            <Wrap>
                <img src="/images/viewers-pixar.png" alt="not_found"/>
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src="/videos/1564676714-pixar.mp4" type="video/mp4"/>
                </video>
            </Wrap>
            <Wrap>
                <img src="/images/viewers-starwars.png" alt="not_found"/>
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src="/videos/1608229455-star-wars.mp4" type="video/mp4"/>
                </video>
            </Wrap>
            
            
        </Container>
    )
}

const Container=styled.div`
    margin-top:30px;
    padding:30px 0px 26px;
    display:grid;
    grid-gap:25px;
    grid-template-columns:repeat(5,minmax(0,1fr));

    @media only screen and (max-width:768px){
        grid-template-columns:repeat(1,minmax(0,1fr))
    }
`

const Wrap=styled.div`
    // padding-top:10px;
    border-radius:10px;
    overflow:hidden;
    position:relative;
    box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px,rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    border:2px solid rgba(249,249,249,0.1);
    cursor:pointer;
    transition:all 1s ease 0s;

    img{
        inset:0;
        display:block;
        width:100%;
        height:100%;
        object-fit:cover;
        opacity:1;
        position:absolute;
        transition:opacity 10s ease 0s;
        z-index:100%;
        top:0;
    }

    video{
        width:100%;
        height:100%; 
        display:block;
        // position:absolute;
        opacity:0;
        z-index:0;
    }

    &:hover{
        box-shadow:rgb(0 0 0 / 80%) 0px 26px 30px -10px,rgb(0 0 0 / 72%) 0px 16px 10px -10px;

        transform:scale(1.05);
        border-color:rgb(249,249,249);


        video{
            opacity:1;
        }
    }
`


export default Viewers