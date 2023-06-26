import { styled } from "styled-components";
import { Container } from "../container";
import { Title } from "../title";

const Wrapper = styled.div`
  margin-bottom: 50px;

  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    margin: 0 64px;
    padding-top: 20px;
  }
  @media only screen and (max-width: 768px) {
    margin: 0 48px;
    
  }
  @media only screen and (max-width: 576px) {
    margin: 0 24px;
  }
`;
const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
  @media only screen and (max-width: 1024px) {
    margin: 0 64px;
    padding-top: 20px;
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    margin: 0 48px;
    
  }
  @media only screen and (max-width: 576px) {
    margin: 0 24px;
  }
`;
const ContactLetter = styled.div`
  display: flex;
  flex-direction: row;
`;
const ContactIcon = styled.div`
  margin-right: 24px;
`;
const ContactIconEm = styled.div`
  font-size: 24px;
`;
const ContactDetails = styled.div`
  box-sizing: border-box;
`;
const ContactTitle = styled.div`
  font-size: 16px;
  margin: 0 0 8px;
`;
export function Contact() {
  return (
    <Wrapper>
      <Container>
        <Title id="contact">Contacto</Title>
        <ContactContainer>
            <ContactLetter>
                <ContactIcon>
                    <ContactIconEm className="fas fa-phone"/>
                </ContactIcon>
                <ContactDetails>
                    <ContactTitle>+503 7879-4328</ContactTitle>
                    <ContactTitle>Lun a Dom 10am a 10pm</ContactTitle>
                </ContactDetails>
            </ContactLetter>
            <ContactLetter>
                <ContactIcon>
                    <ContactIconEm className="fas fa-envelope"/>
                </ContactIcon>
                <ContactDetails>
                    <ContactTitle>lsrjefferstrl@gmail.com</ContactTitle>
                    <ContactTitle>¡Envía tu consulta o idea en cualquier momento!</ContactTitle>
                </ContactDetails>
            </ContactLetter>
        </ContactContainer>
      </Container>
    </Wrapper>
  );
}
