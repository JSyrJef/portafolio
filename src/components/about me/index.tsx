import styled from "styled-components";
import { Container } from "../container";
import { Title } from "../title";

const Subtitle = styled.p`
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  box-sizing: border-box;
`;
const Seccion = styled.section`
  margin: 120px 0;
  box-sizing: border-box;
  display: block;

  @media only screen and (max-width: 768px) {
    margin: 60px 0;
  }
`;

const ContainerPrincipal = styled.div`
  align-items: center;
  display: flex;
  margin: 0 auto;
  max-width: 1140px;
  overflow: hidden;

  @media only screen and (max-width: 1024px) {
    flex-direction: row;
  }
  @media only screen and (max-width: 768px) {
    margin: 0 48px;
    flex-direction: column;
    
  }
  @media only screen and (max-width: 576px) {
    margin: 0 24px;
  }
`;
const AboutProfile = styled.div`
  flex: 0 0 50%;
  height: 320px;
  max-width: 50%;
  padding: 16px;
  text-align: center;
  box-sizing: border-box;
  display: block;

  @media only screen and (max-width: 768px) {
    flex: none;
    height: 360px;
    max-width: none;
    width: auto;
  }
`;

const AboutDetails = styled.div`
  flex: 0 0 50%;
  max-width: 50%;
  padding: 16px;
  box-sizing: border-box;
  display: block;
  font-size: 1.5rem;

  @media only screen and (max-width: 1024px) {
    font-size: 1rem;
  }
  @media only screen and (max-width: 768px) {
    padding: 0;
    max-width: none;
    width: auto;
    
  }
  @media only screen and (max-width: 576px) {
    font-size: 1rem;
    margin-bottom: 24px;
  }
`;

const AboutProfileIMG = styled.img`
  border-radius: 4px;
  box-shadow: 0 10px 30px -10px rgba(30, 30, 30, 0.7);
  height: 100%;
  box-sizing: border-box;

  &:hover{
    transform: translateY(-2px);
  }
`;

const AboutCV = styled.a`
  align-items: center;
  appearance: none;
  background: #ccc;
  border: 1px solid transparent;
  border-radius: 4px;
  box-shadow: none;
  color: #1e1e1e;
  cursor: pointer;
  display: inline-flex;
  font-size: 1.25rem;
  justify-content: center;
  padding: calc(0.5em - 1px) 1em;
  text-align: center;
  text-decoration: none;
  transition: color 0.3s, background-color 0.3s, border-color 0.3s;
  white-space: nowrap;

  &:hover {
    background: #1e1e1e;
    color: #ccc;
  }
  @media only screen and (max-width: 768px) {
    display: block;
  }
`;
export function Aboutme() {
  return (
    <Container>
      <Seccion>
        <ContainerPrincipal>
          <AboutProfile>
            <AboutProfileIMG
              src="https://avatars.githubusercontent.com/u/90538822?v=4"
              alt="Jefferson Sanchez"
            />
          </AboutProfile>
          <AboutDetails>
            <Title id="curriculum">SOBRE Mí</Title>
            <Subtitle>
              Soy un ingeniero apasionado por las tecnologías, ya sean sitios
              web, aplicaciones móviles o cualquier otra cosa. Mi objetivo es
              crear siempre aplicaciones que sean escalables, seguras y
              confiables, ofreciendo una excelente experiencia de usuario.
            </Subtitle>
            <AboutCV href="https://drive.google.com/file/d/1Wo2V-2OmJ8iaMRS5D3Xw4UTLaXzrRi1m/view?usp=sharing"  target="_blank">
              DESCARGAR CV
            </AboutCV>
          </AboutDetails>
        </ContainerPrincipal>
      </Seccion>
    </Container>
  );
}
