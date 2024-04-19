import styled from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Container = styled.div`
  display: flex;
  height: 830px;
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
`
export const ProjectExtra = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: "Tilt Neon", sans-serif;
  font-size: 1.1rem;
  button{
    border: 5px solid ${(props) => props.theme['white']};
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
  font-family: "Tilt Neon", sans-serif;
  flex-direction: column;
  gap: 10px;
  

  font-size: 14px;

  strong{
    font-size: 1.8rem;
  }
  /* p{
    display: none;
    font-size: 1.2rem;
    opacity: 0.7;

    &:before {
      transform: translate(-50%, -120%);
      padding: 0.3em;
      white-space: nowrap;
      transition: all 0.5s;
    }

  } */
`

export const DivProjectDescription = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  height: 70px;
  font-family: "Tilt Neon", sans-serif;
  font-size: 14px;
  margin-top: 5px;
  p{
    display: none;
    font-size: 1.2rem;
    opacity: 0.7;

    &:before {
      transform: translate(-50%, -120%);
      padding: 0.3em;
      white-space: nowrap;
      transition: all 0.5s;
    }
  }
`
export const DivTecnologias = styled.div`
  display: flex;
  font-size: 1.8rem;
  flex-direction: row;
  align-items: center;
  justify-content: star;
  gap: 15px;
`
export const DivIcon = styled.div`
div{
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: red; */
  }
`
export const buttonGit = styled.button`
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
  div:hover{
    opacity: 0.9;
    transition: all 0.3s;

    ${DivTecnologias}{
      display: none;
        
    }
    p{
      display: -webkit-box; 
      text-overflow: ellipsis; 
      overflow: hidden; 
      -webkit-line-clamp: 3; 
      -webkit-box-orient: vertical;
      transition: all 0.3s; 
    }
  }
  div{
    button{
      background-color: orange;
      opacity: 1;
      padding: 0 10px;
      border-radius: 6px;
    }
    buttonGit{
      display: flex;
      float: inline-start;
      width: 50%;
      background-color: orange;
      color: black;
      background-color: orange;
      opacity: 1;
      padding: 10px;
      gap: 10px;
      border-radius: 6px;

    }
  }  
`