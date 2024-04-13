import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['green-500']};

}

body{
    width: 100vw;
    /* height: 100vh; */
    background-color: #020024;
    background-image: linear-gradient(151deg, #3922c3 5%, #020024);


    color: ${(props) => props.theme['orange-300']};
    -webkit-font-smoothing: antialiased;
}

body, input, textarea, button{
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
}

`