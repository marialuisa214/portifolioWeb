// import { MapPin, ShoppingCart } from '@phosphor-icons/react'
// import { NavLink } from 'react-router-dom';
import { ButtonSocialMidia, DivSocialMidia, HeaderContainer, ImgLogo, Nav} from './style';
import maluLogo from '../../assets/logoMalu.svg'
import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react';
export function Header(){

    return (
        <HeaderContainer>
            <ImgLogo src={maluLogo} alt="logo" />
            
            <Nav>
                <ul>
                    <li><a href="#">Tecnologias</a></li>
                    <li><a href="#">Projetos</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>
            </Nav>

            <DivSocialMidia>
                <ButtonSocialMidia><LinkedinLogo size={20}  color="#01FEFE" weight="bold" /></ButtonSocialMidia>
                <ButtonSocialMidia><GithubLogo size={20} color="#01FEFE" weight="bold" /></ButtonSocialMidia>
            </DivSocialMidia>
            
            
        </HeaderContainer>
    
    )
}