import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { ButtonIcon, Carousel, Container,ProjectTemplate } from "./styles";
import { useState } from "react";

export function Projects() {
    const projects = [ 'projeto 1', 'projeto 2', 'projeto 3', 'projeto 4', 'projeto 5', 'projeto 6', 'projeto 7', 'projeto 8', 'projeto 9', 'projeto 10', 'projeto 11', 'projeto 12', 'projeto 13', 'projeto 14', 'projeto 15', 'projeto 16', 'projeto 17', 'projeto 18', 'projeto 19', 'projeto 20']
    
    const [startIndex, setStartIndex] = useState(0);

    const nextProject = () => {
        setStartIndex(startIndex + 3 >= projects.length ? 0 : startIndex + 1);
    };

    const previousProject = () => {
        setStartIndex(startIndex === 0 ? projects.length - 3 : startIndex - 1);
    };


    return (
        <Container>
            <ButtonIcon onClick={previousProject}>
                <CaretLeft size={35} />
            </ButtonIcon>
            <Carousel>
            {projects.slice(startIndex, startIndex + 3).map((project, index) => (
                    <ProjectTemplate key={index}>
                        <p>{project}</p>
                    </ProjectTemplate>
                ))}
            </Carousel>
            <ButtonIcon onClick={nextProject}>
                <CaretRight size={35} />
            </ButtonIcon>
        </Container>
    )
    
}