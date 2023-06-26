import styled from "styled-components";
import { useTranslation } from "react-i18next";
const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 50px auto 0;
  max-width: 1140px;
  padding: 120px 100px;

  @media only screen and (max-width: 576px) {
    padding: 40px;
  }
`;

const Presentation = styled.h1`
  font-size: 2.5rem;
  font-weight: 300;
  margin: 16px 0;
  @media only screen and (max-width: 1024px) {
    font-size: 2rem;
  }
  @media only screen and (max-width: 768px) {
    font-size: 1.75rem;
  }
  @media only screen and (max-width: 576px) {
    font-size: 1.5rem;
  }
`;

const Bio = styled.h2`
  margin-bottom: 48px;
  font-size: 2.5rem;
  font-weight: 300;

  @media only screen and (max-width: 1024px) {
    font-size: 2rem;
  }
  @media only screen and (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: 24px;
  }
  @media only screen and (max-width: 576px) {
    font-size: 1.5rem;
    margin-bottom: 24px;
  }
`;

const Social = styled.div``;
export const SocialLink = styled.a`
  text-decoration: none;
  margin-right: 16px;

  &:last-child {
    margin-right: 0;
  }
`;

const SocialIcon = styled.em`
  color: #a0dd98;
  padding: 8px;
  font-size: 48px;

  &:hover {
    transform: translateY(-10px);
  }

  @media only screen and (max-width: 1024px) {
    padding: 8px;
    font-size: 48px;
  }
  @media only screen and (max-width: 768px) {
    padding: 4px;
    font-size: 40px;
  }
  @media only screen and (max-width: 576px) {
    padding: 2px;
    font-size: 30px;
  }
`;

interface SocialModel {
  name: string;
  icon: string;
  url: string;
}

export const links: SocialModel[] = [
  {
    name: "Github",
    icon: "fab fa-github",
    url: "https://github.com/JSyrJef",
  },
  {
    name: "Linkedin",
    icon: "fab fa-linkedin-in",
    url: "https://www.linkedin.com/in/jefferson-heriberto-perez-sanchez-72b481237/",
  },
  {
    name: "Facebook",
    icon: "fab fa-facebook",
    url: "https://www.facebook.com/profile.php?id=100085712383886",
  },
  {
    name: "Twitter",
    icon: "fab fa-twitter",
    url: "https://twitter.com/Jefferstr7",
  },
  {
    name: "Gmail",
    icon: "far fa-envelope",
    url: "mailto:lsrjefferstrl@gmail.com",
  },
];

const Bold = styled.b``;
export function Welcome() {
  const [t] = useTranslation("global");
  return (
    <Wrapper id="inicio">
      <Presentation>{t("welcome.presentation")}</Presentation>
      <Bio>
        {t("welcome.im")} <Bold>{t("welcome.engineer")}</Bold>
        {t("welcome.principal")} <Bold>{t("welcome.web")}</Bold>{" "}
        {t("welcome.so")}
        <Bold> {t("welcome.frontend")}</Bold> {t("welcome.how")}{" "}
        <Bold>{t("welcome.backend")}</Bold>
        {t("welcome.always")}
      </Bio>
      <Social>
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
      </Social>
    </Wrapper>
  );
}
