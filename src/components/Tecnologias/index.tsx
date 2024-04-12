import { MdOutlineCss } from "react-icons/md";
import { IoLogoJavascript } from "react-icons/io5";
import { FaDocker, FaJava, FaReact } from "react-icons/fa";
import { SiStyledcomponents} from "react-icons/si";
import { BiLogoTailwindCss } from "react-icons/bi";
import { TbFileTypeTsx } from "react-icons/tb";
import { GrMysql } from "react-icons/gr";
import { Container, ContainerIcons, ContainerLabel,DivIcon } from "./styles";

export function Tecnologias(){
    return (<Container>

            <ContainerIcons>
                <DivIcon labelContent="React Native - 1 Ano de experiencia">
                    <FaReact size={50} />
                </DivIcon>

                <DivIcon labelContent="TypeScript - 1 Ano de experiencia">
                    <TbFileTypeTsx size={50} />   
                </DivIcon>
                <DivIcon labelContent="JavaScript - 2 Anos de experiencia">
                    <IoLogoJavascript size={50}/>
                </DivIcon>

                <DivIcon labelContent="JCSS - 2 Anos de experiencia">
                    <MdOutlineCss size={60}/>
                </DivIcon>

                <DivIcon labelContent="Tailwind - 6 meses">
                    <BiLogoTailwindCss size={50} />
                </DivIcon>

                <DivIcon labelContent="Styled-components - 1 Ano de experiencia">
                    <SiStyledcomponents size={60} />
                </DivIcon>

                <DivIcon labelContent="Banco de Dados - aprendendo...">
                    <GrMysql size={50}/>
                </DivIcon>

                <DivIcon labelContent="Docker - aprendendo...">
                    <FaDocker size={50}/>
                </DivIcon>

                <DivIcon labelContent="Java - 3 Anos de experiencia">
                    <FaJava size={50} />
                </DivIcon>
            <ContainerLabel className={'text'}>
                
            </ContainerLabel>
            </ContainerIcons>

    </Container>
    )
}