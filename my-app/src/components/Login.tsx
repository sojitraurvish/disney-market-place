import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { useSelector } from "react-redux"
import { selectUserLogin } from "../store/selectors/userSelectors"

const Login=()=>{
    const navigate=useNavigate();

    const {userInfo}=useSelector(selectUserLogin)

    useEffect(()=>{
        if(userInfo){
            navigate("/home");
        }
    },[userInfo])
    

    return (
     
            
            <Content>
                <CTA>
                    <CTALogo src="/images/cta-logo-one.svg" alt="not found"/>
                    <SignUp>GET ALL THERE</SignUp>
                    <Description>
                        Marversal offers mobile ad formats like banners, videos, and native creatives. The platform provides ad inventory like banner ads, video ads, and native ads. They provide accurate targeting, management and optimization, machine learning, fraud detection, and features.
                    </Description>
                    <CTNLogoTwo src="/images/cta-logo-two.png" alt="not found"/>
                </CTA>
                <BgImage/>
            </Content>
          
        
       
    )
}


const Content=styled.div`
    // border:2px solid green;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    min-height:100vh;
    // width:100%
    // margin-bottom:10vh
    // position:relative;
    box-sizing:border-box;
    // padding:80px 40px;
    height:100%;
`

const BgImage=styled.div`
    background-image:url("/images/login-background.jpg");
    background-repeat:no-repeat;
    background-size:cover;
    background-position:top;
    position:absolute;
    top:0;
    left:0;
    right:0;
    height:100%;
    z-index:-1;
`   

const CTA=styled.div`
    max-width:650px;
    width:100%;
    // border:2px solid red;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    height:100%;
    max-height:650px;
    // flex-wrap:wrap;
    justify-content:center;
    align-items:center;
    text-align:center;
    // margin-top:0;
    // margin-left:auto;
    // margin-right:auto;
    // margin-bottom:2vw;
    // transition:opacity 0.2s;
    // transition-timing-function: ease-out;
`

const CTALogo=styled.img`
    // border:2px solid red;
    // margin:auto;
    margin-bottom:12px;
    // max-width:600px;
    min-height:1px;
    width:100%;
    max-width:600px;
    
`

const SignUp=styled.a`
    font-weight:bold;
    color:#f9f9f9;
    background-color:#0063e5;
    margin-bottom:12px;
    width:100%;
    letter-spacing:1.5px;
    font-size:18px;
    padding:16.5px 0;
    border:1px solid transparent;
    border-radius:4px;

    &:hover{
       background-color:#0483ee; 
    }
`
const Description=styled.p`
    color:hsla(0,0%,95.3%,1);
    font-size:11px;
    margin:0 0 24px 0;
    line-height:1.5;
    letter-spacing:1.5px;
`

const CTNLogoTwo=styled.img`
    max-width:600px;
    width:100%;
    margin-bottom:20px;
    display:inline-block;
    vertical-align:bottom;
`

export default Login