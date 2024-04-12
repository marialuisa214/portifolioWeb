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
`

// export const BannerPosition = styled.div`
//     po
// `

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
`

export const ImgMalu = styled.img`
    width: 360px;
    
    z-index: 1;
`