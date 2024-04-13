import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  white-space: nowrap;
  overflow: hidden;
  justify-content: center;
  align-items: center;

  /* position: relative; */
  padding: 120px 30px;
`

export const ButtonIcon = styled.button`
height: 36px;
background: none;
width: 36px;
border: none;
font-size: 1.2rem;
text-align: center;
line-height: 36px;
color: ${props => props.theme['white']};
opacity: 0.5;
:hover{
  cursor: pointer;
  color: ${props => props.theme['blue-100']};
  opacity: 1;
  transform: scale(1.1);
  transition: all 0.3s; 
}

  :first-child{
    left: -23px;
  }

  :last-child{
    right: -23px;
  }
  
`

export const Carousel = styled.div`
  display: flex;
  overflow-x: auto;
  overflow: hidden;
  height: 340px;
  object-fit: cover;
  /* width: calc(100% / 3); */

`

export const ProjectTemplate = styled.div`
  display: flex;
 background-color: red;
 height: 100%;
 min-width: calc(calc(100% - 46px) / 3);
  object-fit: cover;
  margin-left: 14px;

  :first-child {
    margin-left: 0px;
  }
  @media screen and (max-width: 900px){
    min-width: (calc(100% - 46px)/2);
  }
  @media screen and (max-width: 550px){
    min-width: calc(100% - 46px) ;
  }


`

