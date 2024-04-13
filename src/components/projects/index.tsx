import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { ButtonIcon, Carousel, Container,ProjectTemplate } from "./styles";

export function Projects() {
    const projects = [ 'projeto 1', 'projeto 2', 'projeto 3', 'projeto 4', 'projeto 5', 'projeto 6', 'projeto 7', 'projeto 8', 'projeto 9', 'projeto 10', 'projeto 11', 'projeto 12', 'projeto 13', 'projeto 14', 'projeto 15', 'projeto 16', 'projeto 17', 'projeto 18', 'projeto 19', 'projeto 20']
    return (
        <Container>
            <ButtonIcon>
                <CaretLeft size={35}/>

            </ButtonIcon>
            <Carousel>
                    {projects.map((project, i) => (
                        <ProjectTemplate>
                    <p key={i}>{project}</p>
                    </ProjectTemplate>
                    ))}
            </Carousel>
            <ButtonIcon>
                <CaretRight size={35}/>
            </ButtonIcon>
        </Container>
    )
    
}