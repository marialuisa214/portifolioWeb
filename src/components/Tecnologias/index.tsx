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
                    <FaReact />
                </DivIcon>

                <DivIcon labelContent="TypeScript - 1 Ano de experiencia">
                    <TbFileTypeTsx />   
                </DivIcon>
                <DivIcon labelContent="JavaScript - 2 Anos de experiencia">
                    <IoLogoJavascript />
                </DivIcon>

                <DivIcon labelContent="JCSS - 2 Anos de experiencia">
                    <MdOutlineCss/>
                </DivIcon>

                <DivIcon labelContent="Tailwind - 6 meses">
                    <BiLogoTailwindCss />
                </DivIcon>

                <DivIcon labelContent="Styled-components - 1 Ano de experiencia">
                    <SiStyledcomponents  />
                </DivIcon>

                <DivIcon labelContent="Banco de Dados - aprendendo...">
                    <GrMysql />
                </DivIcon>

                <DivIcon labelContent="Docker - aprendendo...">
                    <FaDocker />
                </DivIcon>

                <DivIcon labelContent="Java - 3 Anos de experiencia">
                    <FaJava />
                </DivIcon>
            <ContainerLabel className={'text'}>
                
            </ContainerLabel>
            </ContainerIcons>

    </Container>
    )
}