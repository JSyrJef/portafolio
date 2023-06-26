import styled from "styled-components";
import { Container } from "../container";
import { SubTitle, Title } from "../title";
import {useTranslation} from "react-i18next";

const Wrapper = styled.div`
  margin-bottom: 120px;
  padding: 20px
`;

const SkillsDiv = styled.div`
  display: flex;
  box-sizing: border-box;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const SkillsTyP = styled.div`
  width: 50%;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;
const SkillsTyPmin = styled.div`
  float: left;
  height: 100%;
  margin-left: 57px;
  padding-left: 30px;
  position: relative;
  width: 80%;
  display: block;
  box-sizing: border-box;

  &::before {
    border-left: 1px solid #ccc;
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 5px;
    width: 1px;
  }
`;
const SkillBar = styled.div`
  float: left;
  margin: 10px 0;
  width: 100%;
  display: block;
`;
const SkillName = styled.div`
  color: #a0dd98;
  display: block;
  float: left;
  height: auto;
  margin-bottom: 0.25em;
  text-transform: uppercase;
  width: 100%;
  box-sizing: border-box;
`;
const SkillBarOuter = styled.div`
  background: rgba(10, 10, 10, 0.2);
  display: block;
  float: left;
  height: 6px;
  margin-top: 8px;
  position: relative;
  width: 100%;
`;
const SkillsIcon = styled.em`
  margin-right: 8px;
`;
const SkillItem = styled.div`
  background: #eeebeb;
  border-radius: 0.3em;
  color: #000000;
  font-size: 0.75em;
  line-height: 1.3em;
  min-width: 2.5em;
  position: absolute;
  text-align: center;
  top: -1.8em;
`;
const SkillColor = styled.div`
  background: #47e0e6;
  height: 6px;
  width: 0;
`;
export function Skills() {
  const [t] = useTranslation("global");
  return (
    <Wrapper>
    <Container>
      <Title id="skills">{t("able_to.ableTo")}</Title>
      <SkillsDiv>
        <SkillsTyP>
          <SubTitle>
            <SkillsIcon className="fas fa-layer-group" />
            {t("able_to.technical")}
          </SubTitle>
          <SkillsTyPmin>
            <SkillBar>
              <SkillName>
                <SkillsIcon
                  className="fab fa-js-square"
                  style={{ color: "#ebe861" }}
                />
                JavaScript
              </SkillName>
              <SkillBarOuter>
                <SkillItem style={{ left: "calc(80% - 1.5em)" }}>80%</SkillItem>
                <SkillColor style={{ width: "80%" }}></SkillColor>
              </SkillBarOuter>
            </SkillBar>
            <SkillBar>
              <SkillName>
                <SkillsIcon
                  className="fab fa-react"
                  style={{ color: "#0462ee" }}
                />
                ReactJS
              </SkillName>
              <SkillBarOuter>
                <SkillItem style={{ left: "calc(65% - 1.5em)" }}>65%</SkillItem>
                <SkillColor style={{ width: "65%" }}></SkillColor>
              </SkillBarOuter>
            </SkillBar>
            <SkillBar>
              <SkillName>
                <SkillsIcon
                  className="fas fa-paint-brush"
                  style={{ color: "#7b30f3" }}
                />
                Bootstrap
              </SkillName>
              <SkillBarOuter>
                <SkillItem style={{ left: "calc(90% - 1.5em)" }}>90%</SkillItem>
                <SkillColor style={{ width: "90%" }}></SkillColor>
              </SkillBarOuter>
            </SkillBar>
            <SkillBar>
              <SkillName>
                <SkillsIcon
                  className="fas fa-code"
                  style={{ color: "#067ad8" }}
                />
                Java
              </SkillName>
              <SkillBarOuter>
                <SkillItem style={{ left: "calc(70% - 1.5em)" }}>70%</SkillItem>
                <SkillColor style={{ width: "70%" }}></SkillColor>
              </SkillBarOuter>
            </SkillBar>

            <SkillBar>
              <SkillName>
                <SkillsIcon
                  className="fas fa-code"
                  style={{ color: "#d43a0b" }}
                />
                HTML&CSS
              </SkillName>
              <SkillBarOuter>
                <SkillItem style={{ left: "calc(90% - 1.5em)" }}>90%</SkillItem>
                <SkillColor style={{ width: "90%" }}></SkillColor>
              </SkillBarOuter>
            </SkillBar>
            <SkillBar>
              <SkillName>
                <SkillsIcon
                  className="fas fa-code"
                  style={{ color: "#9661eb" }}
                />
                C#
              </SkillName>
              <SkillBarOuter>
                <SkillItem style={{ left: "calc(80% - 1.5em)" }}>80%</SkillItem>
                <SkillColor style={{ width: "80%" }}></SkillColor>
              </SkillBarOuter>
            </SkillBar>
            <SkillBar>
              <SkillName>
                <SkillsIcon
                  className="fas fa-database"
                  style={{ color: "#ebbb61" }}
                />
                SQLServer
              </SkillName>
              <SkillBarOuter>
                <SkillItem style={{ left: "calc(90% - 1.5em)" }}>90%</SkillItem>
                <SkillColor style={{ width: "90%" }}></SkillColor>
              </SkillBarOuter>
            </SkillBar>
            <SkillBar>
              <SkillName>
                <SkillsIcon
                  className="fas fa-database"
                  style={{ color: "#61d6eb" }}
                />
                MySQL
              </SkillName>
              <SkillBarOuter>
                <SkillItem style={{ left: "calc(90% - 1.5em)" }}>90%</SkillItem>
                <SkillColor style={{ width: "90%" }}></SkillColor>
              </SkillBarOuter>
            </SkillBar>
          </SkillsTyPmin>
        </SkillsTyP>
        <SkillsTyP>
          <SubTitle>
            <SkillsIcon className="fas fa-user" />
            {t("able_to.personal")}
          </SubTitle>
          <SkillsTyPmin>
            <SkillBar>
              <SkillName>
                <SkillsIcon
                  className="fas fa-check-square"
                  style={{ color: "#a0dd98" }}
                />
                {t("able_to.item1")}
              </SkillName>
              <SkillBarOuter>
                <SkillItem style={{ left: "calc(80% - 1.5em)" }}>80%</SkillItem>
                <SkillColor style={{ width: "80%" }}></SkillColor>
              </SkillBarOuter>
            </SkillBar>
            <SkillBar>
              <SkillName>
                <SkillsIcon
                  className="fas fa-check-square"
                  style={{ color: "#a0dd98" }}
                />
                {t("able_to.item2")}
              </SkillName>
              <SkillBarOuter>
                <SkillItem style={{ left: "calc(70% - 1.5em)" }}>70%</SkillItem>
                <SkillColor style={{ width: "70%" }}></SkillColor>
              </SkillBarOuter>
            </SkillBar>
            <SkillBar>
              <SkillName>
                <SkillsIcon
                  className="fas fa-check-square"
                  style={{ color: "#a0dd98" }}
                />
                {t("able_to.item3")}
              </SkillName>
              <SkillBarOuter>
                <SkillItem style={{ left: "calc(80% - 1.5em)" }}>80%</SkillItem>
                <SkillColor style={{ width: "80%" }}></SkillColor>
              </SkillBarOuter>
            </SkillBar>
            <SkillBar>
              <SkillName>
                <SkillsIcon
                  className="fas fa-check-square"
                  style={{ color: "#a0dd98" }}
                />
                {t("able_to.item4")}
              </SkillName>
              <SkillBarOuter>
                <SkillItem style={{ left: "calc(70% - 1.5em)" }}>70%</SkillItem>
                <SkillColor style={{ width: "70%" }}></SkillColor>
              </SkillBarOuter>
            </SkillBar>
            <SkillBar>
              <SkillName>
                <SkillsIcon
                  className="fas fa-check-square"
                  style={{ color: "#a0dd98" }}
                />
                {t("able_to.item5")}
              </SkillName>
              <SkillBarOuter>
                <SkillItem style={{ left: "calc(65% - 1.5em)" }}>65%</SkillItem>
                <SkillColor style={{ width: "65%" }}></SkillColor>
              </SkillBarOuter>
            </SkillBar>
            <SkillBar>
              <SkillName>
                <SkillsIcon
                  className="fas fa-check-square"
                  style={{ color: "#a0dd98" }}
                />
                {t("able_to.item6")}
              </SkillName>
              <SkillBarOuter>
                <SkillItem style={{ left: "calc(90% - 1.5em)" }}>90%</SkillItem>
                <SkillColor style={{ width: "90%" }}></SkillColor>
              </SkillBarOuter>
            </SkillBar>
            <SkillBar>
              <SkillName>
                <SkillsIcon
                  className="fas fa-check-square"
                  style={{ color: "#a0dd98" }}
                />
                {t("able_to.item7")}
              </SkillName>
              <SkillBarOuter>
                <SkillItem style={{ left: "calc(80% - 1.5em)" }}>80%</SkillItem>
                <SkillColor style={{ width: "80%" }}></SkillColor>
              </SkillBarOuter>
            </SkillBar>
          </SkillsTyPmin>
        </SkillsTyP>
      </SkillsDiv>
    </Container>
    </Wrapper>
  );
}
