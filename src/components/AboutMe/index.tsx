import  ImgMalu from '../../assets/perfilMalu.svg'
import { Container, ImgContainer, TextContainer } from './styles'


export function AboutMe(){
    return (<Container>
                <TextContainer>
                    <h1>Sobre Mim...</h1>
                    <p>Apaixonada por livros, pugs e crochet.</p>
                    <p>Me chamo Maria Luisa e iniciei minha jornada como desenvolvedora durante minha graduação em Engenharia de Software, onde me apaixonei pela programação. <br/><br/>
                    Durante esse período, tive a oportunidade de mergulhar no mundo da inteligência artificial, trabalhando como desenvolvedora de modelos de IA durante 2 anos. No entanto, meu desejo por uma área mais criativa e meu interresse em design me levaram a buscar novos horizontes na área de desenvolvimento Web.
                    </p>
                </TextContainer>
                <ImgContainer>
                    <img src={ImgMalu} alt="" />
                </ImgContainer>

                
            </Container>)

}