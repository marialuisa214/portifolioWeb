import { ButtonGit, CarroselDiv, Container,DivIcon,DivProjectDescription,DivTecnologias,ProjectContainer, ProjectDescription, ProjectExtra, ProjectImg } 
from './styles';
import imgGato from '../../assets/image.png';
import { FaDocker,  FaFigma,  FaGithub, FaJava, FaReact } from "react-icons/fa";
import { GoArrowUpRight } from 'react-icons/go';


const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 700 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 699, min: 0 },
      items: 1
    }
  };

export function Projects() {
    const projects = [ 'projeto 1', 'projeto 2', 'projeto 3', 'projeto 4', 'projeto 5', 'projeto 6', 'projeto 7', 'projeto 8', 'projeto 9', 'projeto 10', 'projeto 11', 'projeto 12', 'projeto 13', 'projeto 14', 'projeto 15', 'projeto 16', 'projeto 17', 'projeto 18', 'projeto 19', 'projeto 20']


    return (
        <Container>
            <CarroselDiv responsive={responsive}>
            {projects.map((project, index) => (
                    <ProjectContainer  key={index}>
                        <ProjectExtra>
                          <p>Orientção a Objetos</p>
                          <div><FaFigma /></div>
                        </ProjectExtra>
                        <ProjectImg>
                          <img src={imgGato} alt="" />
                        </ProjectImg>
                        <ProjectDescription>
                          <strong>{project}</strong>
                          <DivProjectDescription>
                            <p>Descrição do projeto, muita baboseira para testar como fica com palavras diferentes</p>
                            <DivTecnologias>
                              <DivIcon>
                                <FaReact />
                              </DivIcon>
                              <DivIcon>
                                <FaJava />
                              </DivIcon>
                              <DivIcon>
                                <FaDocker />
                              </DivIcon>
                          </DivTecnologias>

                        </DivProjectDescription>
                        </ProjectDescription>
                        <ButtonGit>
                          <FaGithub />
                          <div>Git Hub</div>
                          <GoArrowUpRight />
                        </ButtonGit>
                    </ProjectContainer>
                ))}
            </CarroselDiv>

        </Container>
    )
    
}