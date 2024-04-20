
import unb from '../../assets/unb.png';
import udemy from '../../assets/udemy.png';

import { AcademicCard, AcademicDiv, Container } from "./styles";

export function Academic() {
  return (
    <Container>
        <AcademicDiv>
            <AcademicCard>
                <img src={unb} alt="" />
                <span>Engenharia de Software</span>
            </AcademicCard>
            <AcademicCard>
                <img src={udemy} alt="" />
                <span>React.Js e Next.Js</span>
            </AcademicCard>
        </AcademicDiv>
        <div>
            <h1>Academic</h1>
        </div>
    
      
    </Container>
  );
}