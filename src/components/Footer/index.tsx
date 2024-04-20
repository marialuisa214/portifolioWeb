import { FooterContainer, FooterCopyRight, FooterIcons, FooterRedesSociais } from "./styles";
import maluLogo from '../../assets/logoMalu.svg'
import { FaGitlab, FaLinkedin, FaStackOverflow } from "react-icons/fa";
import { PiGithubLogoFill } from "react-icons/pi";

export function Footer() {
    const colors = [ 'blue', 'black', 'orange', 'purple']

    return (
        <FooterContainer>
            <FooterRedesSociais>
                <FooterIcons color={colors[0]} >
                    <FaLinkedin />
                </FooterIcons>
                <FooterIcons color={colors[1]}>
                    <PiGithubLogoFill />
                </FooterIcons>
                <FooterIcons color={colors[2]}>
                    <FaGitlab />
                </FooterIcons>
                <FooterIcons color={colors[3]}>
                    <FaStackOverflow />
                </FooterIcons>
            </FooterRedesSociais>

            <FooterCopyRight>
                <img src={maluLogo} alt="logo" />
                <span>2024 @copyRinght</span>
               
            </FooterCopyRight>
        </FooterContainer>
    )
}
