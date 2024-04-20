import styled from "styled-components";

export const FooterRedesSociais = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
width: 90%;
height: 100px;
border: 5px solid rgba(0, 0, 0, .4);
margin-top: -90px;
background-color: ${(props) => props.theme['blue-500']};
border-radius: 10px;

@media screen and (max-width: 550px){
    height: 70px;
}

`

export const FooterIcons = styled.div<{color: string}>`
display: flex;
justify-content: center;
align-items: center;
margin: 0px;
font-size: 20px;
padding: 10px;
border-radius: 6px;
background-color: ${(props) => props.color};
border: 3px solid white;

@media screen and (max-width: 550px){
    font-size: 15px;
    padding: 8px;
    border: 2px solid white;
    
}

`


export const FooterContainer = styled.div`
display: flex;
background-color: ${(props) => props.theme['blue-500']};
flex-direction: column;
height: 130px;
width: 100%;
align-items: center;
justify-content: center;
margin-top: 100px;
color: white;
border-radius: 6px;
border: 5px solid rgba(0, 0, 0, .4);;
`

export const FooterCopyRight = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding-inline: 20px;
width: 90%;
letter-spacing: 0.1rem;
font-family: 'Roboto', sans-serif;
margin-bottom: 0px;
padding-top: 20px;
opacity: 0.8;

img{
    height: 30px;
    width: 100px;
}
@media screen and (max-width: 550px){
    padding-inline: 4px;
    font-size: 0.8rem;
    img{
        height: 20px;
        width: 70px;
    }   

}
`