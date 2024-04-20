import { BannerContainer, BannerText, ImgMalu, Paragrafo, TextOne,  TextTwo } from "./styles";
import Malu from '../../assets/iconMalu.svg'
import { Tecnologias } from "../Tecnologias";
import { Projects } from "../Projects";
import { AboutMe } from "../AboutMe";
import { Academic } from "../Academic";

export function Banner(){
    return (<div>

        <BannerContainer>
            <ImgMalu src={Malu} alt="Malu" />
            <Paragrafo>Desenvolvedora Front-End.</Paragrafo>
            <BannerText>
                <TextOne>
                    <span>Desenvolvedora</span>
                    <span>Front-end</span>
                    <span>Desenvolvedora</span>
                    <span>Front-end</span>
                    <span>Desenvolvedora</span>
                    <span>Front-end</span>
                </TextOne>
                <TextTwo>
                    <span>Desenvolvedora</span>
                    <span>Front-end</span>
                    <span>Desenvolvedora</span>
                    <span>Front-end</span>
                    <span>Desenvolvedora</span>
                    <span>Front-end</span>
                </TextTwo>
            </BannerText>
        </BannerContainer>
        <Tecnologias />
        <Projects />
        <Academic />
        <AboutMe/>
    </div>
    )
}