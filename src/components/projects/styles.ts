import styled from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Container = styled.div`
  display: flex;
  height: 800px;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 120px 30px;
  
`
export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  height: 100%;
  padding: 25px 30px;
  min-width: calc(calc(100% - 46px) / 3);
  object-fit: cover;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 10px;
  color: ${(props) => props.theme['white']};
  background-color: ${(props) => props.theme['blue-500']};
  
  @media screen and (max-width: 900px){
    min-width: (calc(100% - 46px)/2);
  }
  @media screen and (max-width: 550px){
    min-width: calc(100% - 46px) ;
  }
`
export const ProjectExtra = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: "Tilt Neon", sans-serif;
  font-size: 14px;
  button{
    border: 5px solid ${(props) => props.theme['white']};
    cursor: pointer;
  }

`

export const ProjectImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50%;
  border-radius: 10px;
  background-color: ${(props) => props.theme['white']};
  opacity: 0.8;
  img{
    padding: 10px;
    border-radius: 10px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const ProjectDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-family: "Tilt Neon", sans-serif;
  font-size: 14px;
  strong{
    font-size: 20px;
  }
  p{
    font-size: 16px;
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