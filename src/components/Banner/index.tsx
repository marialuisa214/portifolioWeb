import { BannerContainer, BannerText, ImgMalu } from "./styles";
import Malu from '../../assets/iconMalu.svg'

export function Banner(){
    return (<div>

        <BannerContainer>
                <ImgMalu src={Malu} alt="Malu" />
                <BannerText>
                    <span> Desenvolvedora </span>
                    <span> Front </span>
                    <span> - </span>
                    <span> end </span>
                    <span> Desenvolvedora </span>
                    <span> Front </span>
                    <span> - </span>
                    <span> end </span>
                    <span> Desenvolvedora </span>
                    <span> Front </span>
                    <span> - </span>
                    <span> end </span>
                </BannerText>

        </BannerContainer>
    </div>
    )
}