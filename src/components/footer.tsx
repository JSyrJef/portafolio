import styled from "styled-components";
import { Container } from "./container";
import { SocialLink, links } from "./welcome";
import { useTranslation} from "react-i18next";

const Wrapper = styled.footer`
  background: #1e1e1e;
  box-shadow: 0 10px 30px -10px rgba(30, 30, 30, 0.7);
  display: flex;
  padding: 48px 0 24px;
  position: relative;
  color: #ccc;
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 10px;
  color: #a0dd98;
`;
const SocialIcon = styled.em`
  color: #a0dd98;
  padding: 8px;
  font-size: 25px;

  &:hover{
    transform: translateY(-5px);
  }
`;
export function Footer() {
  const [t] = useTranslation("global");
  const year = new Date().getFullYear();
  return (
    <Wrapper>
      <Container>
        <Copyright>
          {t("footer.copy")}{year}{t("footer.right")}
        </Copyright>
        <Copyright>
          {links.map((link, key) => (
            <SocialLink
              key={`social-link-${key}`}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
            >
              <SocialIcon className={link.icon} />
            </SocialLink>
          ))}
        </Copyright>
      </Container>
    </Wrapper>
  );
}
