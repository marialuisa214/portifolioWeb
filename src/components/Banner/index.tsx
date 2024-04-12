import { BannerContainer, BannerText, ImgMalu, TextOne,  TextTwo } from "./styles";
import Malu from '../../assets/iconMalu.svg'
import { Tecnologias } from "../Tecnologias";

export function Banner(){
    return (<div>

        <BannerContainer>
            <ImgMalu src={Malu} alt="Malu" />
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
    </div>
    )
}