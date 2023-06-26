import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Container } from "../container";
import { Title } from "../title";
import { Repository, RepositoryModel, mapDtoToModel } from "./repository";

const Projects = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
`;
const Wrapper = styled.div`
  margin-bottom: 100px;

  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    margin: 0 64px;
    padding: 0!important;
  }
  @media only screen and (max-width: 768px) {
    margin: 0 48px;
    
  }
  @media only screen and (max-width: 576px) {
    margin: 0 24px;
  }
`;

export function Repositories() {
  const [repos, setRepos] = useState<RepositoryModel[] | null>(null);

  async function getRepos() {
    const { data } = await axios.get(
      "https://api.github.com/users/JSyrJef/repos?per_page=100"
    );

    setRepos(data.map((item: any) => mapDtoToModel(item)));
  }

  useEffect(() => {
    getRepos();
  }, []);
  return (
    <Wrapper>
      <Container>
        <Title id="repositories">Repositorios</Title>
        <Projects>
          {repos?.map((repo, key) => (
            <Repository key={`repository-${key}`} repository={repo} />
          ))}
        </Projects>
      </Container>
    </Wrapper>
  );
}
