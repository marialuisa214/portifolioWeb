import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 110px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* background-color: red; */
`

export const ContainerIcons = styled.div`
    /* background-color: ${(props) => props.theme['white']}; */
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding: 0 20%;
    cursor: pointer;
    width: 100% ;
    height: 100%;
    font-size: 3rem;

    @media screen and (max-width: 768px) {
        font-size: 2.5rem;
        padding: 0 10%;
    }

    @media screen and (max-width: 576px) {
        font-size: 1.5rem;
        padding: 0 5%;
    }
`

export const ContainerLabel = styled.div`
      position: absolute;
      width: 110%;
      font-size: 1.2rem;
      color: ${(props) => props.theme['white']};
      font-family: "Tilt Neon", sans-serif;
    
      &:before {
        position: absolute;
        left: 50%;
        top: 85px;
        transform: translate(-50%, -120%);
        padding: 0.3em;
        white-space: nowrap;
        transition: all 0.5s;
    }
    
`
export const DivIcon = styled.div<{labelContent: string }>`
    display: inline-block;
    background: none;
    border: none;
    
    color: ${(props) => props.theme['blue-200']};
    &:hover{
        color: ${(props) => props.theme['blue-100']};
        opacity: 0.5;
        transform: scale(1.1);
        cursor: pointer;
        transition: all 0.3s;        
    }

    &:hover ~ ${ContainerLabel}::before {
        content: "${(props) => props.labelContent}";
        transition: all 0.5s;
    }
`