import { CarroselDiv, Container,ProjectContainer, ProjectDescription, ProjectExtra, ProjectImg } 
from './styles';
import imgGato from '../../assets/image.png';

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
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
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
                          <button>figma</button>
                        </ProjectExtra>
                        <ProjectImg>
                          <img src={imgGato} alt="" />
                        </ProjectImg>
                        <ProjectDescription>
                          <strong>{project}</strong>
                          <p>Descrição do projeto</p>
                          <p>tecnologias</p>
                        </ProjectDescription>
                        <div>
                          <button>git</button>
                        </div>
                    </ProjectContainer>
                ))}
            </CarroselDiv>

        </Container>
    )
    
}