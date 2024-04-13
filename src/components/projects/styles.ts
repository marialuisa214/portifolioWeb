import styled from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Container = styled.div`
  display: flex;
  height: 500px;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 120px 30px;
  
`

export const ProjectTemplate = styled.div<{cor: string}>`
  display: flex;
  height: 100%;
  min-width: calc(calc(100% - 46px) / 3);
  object-fit: cover;
  margin-left: 10px;
  margin-right: 10px;
  
  background-color: ${(props) => props.cor};

  
  @media screen and (max-width: 900px){
    min-width: (calc(100% - 46px)/2);
  }
  @media screen and (max-width: 550px){
    min-width: calc(100% - 46px) ;
  }
`
export const CarroselDiv = styled(Carousel)`
  height: 100%;
  width: 100%;
  ul{
    height: 100%;
  }
  button{
    background-color: ${(props) => props.theme['blue-200']};
    opacity: 0.5;
    border: none;
  }
`