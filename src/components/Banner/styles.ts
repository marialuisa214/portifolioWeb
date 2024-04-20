import styled, { keyframes } from 'styled-components'

export const BannerContainer = styled.div`
    display: flex;
    position:relative;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    overflow: hidden;
    

    @media screen and (max-width: 1024px) {
        justify-content: center;
        align-items : center;
        align-items: space-between;
        gap: 25px;
    }

    @media screen and (max-width: 520px) {
        gap: 30px;

    }
`


export const Paragrafo = styled.h1`
display: none;
@media screen and (max-width: 1024px) {
  display: flex;
  letter-spacing: .1rem;
  font-size: 2rem;
  font-family: "Tilt Neon", sans-serif;
  background-image: linear-gradient(90deg, rgba(156,110,220,1) 0%, rgba(29,247,253,1) 50%, rgba(171,191,73,1) 100%);
  color: transparent;
  -webkit-background-clip: text;
  
}
@media screen and (max-width: 550px) {
    font-size: 0.9rem;
    letter-spacing: 0.1rem;

}


`

const textMoving = keyframes`
        0% {
            transform: translate(0%);
        }
        100% {
            transform: translate(-100%);
        }
`
const textMoving2 = keyframes`
        0% {
            transform: translate(100%);
        }
        100% {
            transform: translate(0%);
        }
`
export const BannerText = styled.span`
    position: absolute;
    width: 100vw;
    top: 50%;
    color: #fff;
    line-height: 220px;
    font-size: 10rem;
    font-family: "Tilt Neon", sans-serif;

    @media screen and (max-width: 1024px) {
        display:none ;
    }

    @media screen and (max-width: 580px) {
        display:none ;
    }
    
    transform: translateX(-50%); 
    /* animation: ${textMoving} 5s linear infinite; */
    
    `
export const TextOne = styled.div`
    position: absolute;
    z-index: 0;
    white-space: nowrap;
    animation: ${textMoving} 28s linear infinite;

    span{
        margin: 0 2rem;
    }

    @media screen and (max-width: 580px) {
        display: none;
    }
`
export const TextTwo = styled.div`
    position: absolute;
    top: 0;
    z-index: 0;

    white-space: nowrap;
    animation: ${textMoving2} 28s linear infinite;

    span{
        margin: 0 2rem;
    }

    @media screen and (max-width: 580px) {
        display: none;
    }
`
export const ImgMalu = styled.img`
    width: 360px;
    
    z-index: 1;

    @media screen and (max-width: 1024px) {
        width: 250px;
    }

    @media screen and (max-width: 580px) {
        width: 100px;

    }
`