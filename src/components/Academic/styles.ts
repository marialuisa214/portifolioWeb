import styled from "styled-components";

export const Container = styled.div`
 /* background: ${props => props.theme["blue-500"]}; */
 width: 100%;
 height: 230px;
 border-radius: 12px;
 display: grid;
 align-items: center;
 justify-content: center;
grid-template-columns: 2fr 1fr;
border: 1px solid ${props => props.theme["blue-500"]};
 gap: 20px;

 h1{
            color: ${props => props.theme["white"]};
            font-size: 2rem;
            letter-spacing: .2rem;
            font-family: "Tilt Neon", sans-serif;
        }

@media screen and (max-width: 1024px) {
        display: flex;
        flex-direction: column;
        -webkit-flex-direction: column-reverse;
        flex-direction: column-reverse;
        justify-content: center;
        align-items: center;
        border: 1px solid ${props => props.theme["blue-500"]};
        height: 100%;

        h1{
            color: ${props => props.theme["white"]};
            font-size: 1.5rem;
            letter-spacing: .1rem;
            font-family: "Tilt Neon", sans-serif;
        }

        span{
            display: -webkit-box; 
            text-overflow: ellipsis; 
            overflow: hidden; 
            -webkit-line-clamp: 3; 
            -webkit-box-orient: vertical;
        }
    }

    @media screen and (max-width: 520px) {
        gap: 30px;
        font-size: 1.1rem;

    }


 :last-child{
        display: flex;
        justify-content: center;
        align-items: center;
        
 }
`

export const AcademicDiv = styled.div`
 /* background-color: red; */
 display: flex;
 flex-direction: row;
 justify-content: space-around;
 margin: 15px;
 gap: 20px;

 @media screen and (max-width: 620px) {
    flex-direction: column;

    }

`

export const AcademicCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 220px;
  height: 150px;
  background-color: white;
  opacity: 0.8;
  border-radius: 12px;
  

  span{
    text-align: center;
    padding: 10px;
    color: ${props => props.theme["blue-500"]};
    @media screen and (max-width: 620px) {
        font-size: 0.8rem;
    }
    
  }

  img{
    padding: 10px;
    border-radius: 10px;
    width: 220px;
    height: 120px;
    object-fit: cover;

    @media screen and (max-width: 620px) {
        width: 180px;
        height: 110px;
    }
    }   
    `
