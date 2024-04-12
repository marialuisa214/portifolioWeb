import styled from 'styled-components'

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 32px 0;
    border-radius: 12px;
    width: 100%;
    height: 80px;
    overflow: hidden;
    padding: 0 3%;
    
    
    border: 1px solid ${(props) => props.theme['blue-100']};
    
`

export const ImgLogo = styled.img`
    height: 70px;
`

export const Nav = styled.nav`
    width: 100%;

    ul { display: flex;
        align-items: center;
        justify-content: space-evenly;
        width: 100%;
        list-style: none;
        

        a{
            text-decoration: none;
            font-size: 22px;
            font-family: "Tilt Neon", sans-serif;
            
            color: ${(props) => props.theme['white']};
            
            &:after{
                content: '';
                display: block;
                padding: 1px;
                border-bottom: 2px solid ${(props) => props.theme['blue-100']};
                transform: scaleX(0);
                transition: transform 0.3s;

            }
            &:hover:after{
                transform: scaleX(1);
                transition: transform 0.3s;
            }

            
            &:focus{
                box-shadow: none;
            }
            &:hover{
            transition: all 0.3s;
            padding-bottom: 4px;
            transform: translateX(10px);
            
        }
        }
    }

`
export const DivSocialMidia = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    /* width: 50%; */
`

export const ButtonSocialMidia = styled.button`
    background: none;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    border: 2px solid ${(props) => props.theme['blue-100']};
    opacity: 0.4;
    margin: 0 10px;
    &:hover{
        opacity: 0.8;
        transition: all 0.3s;
    }
`