import { CarroselDiv, Container,ProjectTemplate } from "./styles";

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

    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#00ffff', '#ff00ff', '#f0f0f0', '#0f0f0f', '#123456', '#654321', '#abcdef', '#fedcba', '#321cba', '#cba321', '#13579a', '#97531a', '#86420f', '#f1e2d3', '#b2a9c8', '#abc123'];

    return (
        <Container>
            <CarroselDiv responsive={responsive}>
            {projects.map((project, index) => (
                    <ProjectTemplate  key={index} cor={colors[(index) % colors.length]}>
                        <p>{project}</p>
                    </ProjectTemplate>
                ))}
            </CarroselDiv>;

        </Container>
    )
    
}