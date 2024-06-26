import { BannerContainer, BannerText, ImgMalu, Paragrafo, TextOne,  TextTwo } from "./styles";
import Malu from '../../assets/iconMalu.svg'
import { Tecnologias } from "../Tecnologias";
import { Projects } from "../Projects";
import { AboutMe } from "../AboutMe";
import { Academic } from "../Academic";
import { Footer } from "../Footer";

export function Banner(){
    return (<div>

        <BannerContainer>
            <Paragrafo>Desenvolvedora Front-end
            </Paragrafo>
            <ImgMalu src={Malu} alt="Malu" />
            <BannerText>
                <TextOne>
                    <span>Desenvolvedora</span>
                    <span>Front-end. </span>
                    <span>Desenvolvedora</span>
                    <span>Front-end. </span>
                    <span>Desenvolvedora</span>
                    <span>Front-end. </span>
                </TextOne>
                <TextTwo>
                    <span>Desenvolvedora</span>
                    <span>Front-end. </span>
                    <span>Desenvolvedora</span>
                    <span>Front-end. </span>
                    <span>Desenvolvedora</span>
                    <span>Front-end. </span>
                </TextTwo>
            </BannerText>
        </BannerContainer>
        <Tecnologias />
        <Projects />
        <Academic />
        <AboutMe/>
        <Footer />
    </div>
    )
}