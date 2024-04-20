import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
  align-items: center;
  justify-content: center;
  padding: 12px 30px;
  img{
    width: 80%;
    filter: drop-shadow(12px 12px 7px rgba(0,0,0,0.5));
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    -webkit-flex-direction: column-reverse;
    flex-direction: column-reverse;
    gap: 30px;
    img{
      margin-top: 30px;
    }

    
  }
`
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  
  
  h1{
    font-family: "Tilt Neon", sans-serif;
    letter-spacing: .1rem;
    font-size: 2rem;
    color: ${(props) => props.theme['white']};
    opacity: 0.8;
    margin-bottom: 2px;
  }
  p{
    font-size: 1rem;
    color: ${(props) => props.theme['blue-200']};
    text-align: justify;
    margin-bottom: 10px;
  }
`

export const ImgContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  `