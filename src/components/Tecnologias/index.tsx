import { MdOutlineCss } from "react-icons/md";
import { IoLogoJavascript } from "react-icons/io5";
import { FaDocker, FaJava, FaReact } from "react-icons/fa";
import { SiStyledcomponents} from "react-icons/si";
import { BiLogoTailwindCss } from "react-icons/bi";
import { TbFileTypeTsx } from "react-icons/tb";
import { GrMysql } from "react-icons/gr";
import { Container } from "./styles";

export function Tecnologias(){
    return (
        <div>
            <Container>
                <FaReact size={50}  color="#66A2FF" />
                <TbFileTypeTsx size={50}  color="#66A2FF" />
                <IoLogoJavascript size={50}  color="#66A2FF"/>
                <MdOutlineCss size={60}  color="#66A2FF"/>
                <BiLogoTailwindCss size={50}  color="#66A2FF" />
                <SiStyledcomponents size={60}  color="#66A2FF" />
                <GrMysql size={50}  color="#66A2FF"/>
                <FaDocker size={50}  color="#66A2FF"/>
                <FaJava size={50}  color="#66A2FF" />
                {/* <FaGitAlt size={60}  color="#66A2FF" /> */}

            </Container>
        </div>
    )
}