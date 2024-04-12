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
            transform: translate(0,-50%);
        }
        100% {
            transform: translate(-50%,-50%);
        }
`

export const BannerText = styled.span`
    position: absolute;
    top: 50%;
    white-space: nowrap;
    color: #fff;
    font-size: 8em;
    line-height: 220px;
    font-family: "Tilt Neon", sans-serif;
    

    transform: translateX(-50%); 
    animation: ${textMoving} 30s linear infinite;
   
`
export const ImgMalu = styled.img`
    width: 360px;
    
    
`