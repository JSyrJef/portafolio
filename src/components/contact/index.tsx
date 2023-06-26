import { styled } from "styled-components";
import { Container } from "../container";
import { Title } from "../title";
import {useTranslation} from "react-i18next"

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
  const [t] = useTranslation("global");
  return (
    <Wrapper>
      <Container>
        <Title id="contact">{t("contact.contactus")}</Title>
        <ContactContainer>
            <ContactLetter>
                <ContactIcon>
                    <ContactIconEm className="fas fa-phone"/>
                </ContactIcon>
                <ContactDetails>
                    <ContactTitle>+503 7879-4328</ContactTitle>
                    <ContactTitle>{t("contact.availability")}</ContactTitle>
                </ContactDetails>
            </ContactLetter>
            <ContactLetter>
                <ContactIcon>
                    <ContactIconEm className="fas fa-envelope"/>
                </ContactIcon>
                <ContactDetails>
                    <ContactTitle>lsrjefferstrl@gmail.com</ContactTitle>
                    <ContactTitle>{t("contact.message")}</ContactTitle>
                </ContactDetails>
            </ContactLetter>
        </ContactContainer>
      </Container>
    </Wrapper>
  );
}
