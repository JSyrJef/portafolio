import { styled } from "styled-components";

export interface RepositoryModel {
  name: string;
  link: string;
  descripcion: string;
  size: number;
  language: string;
  starts: number;
  fork: number;
}

export function mapDtoToModel(dto: any): RepositoryModel {
  return {
    name: dto.name,
    link: dto.html_url,
    descripcion: dto.description,
    size: dto.size,
    language: dto.language,
    starts: dto.stargazers_count,
    fork: dto.forks_count,
  };
}

export interface RepositoryProps {
  repository: RepositoryModel;
}
const Project = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  width: calc(33.33% - 16px) !important;
  background-color: #1e1e1e;
  border-radius: 10px 50px;
  margin: 8px;
  padding: 32px;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
  color: #ccc;
  box-sizing: border-box;
  box-shadow: 0 10px 15px -10px #47e0e6;

  &:focus{
    transform: translateY(-5px);
  }
  &:hover{
    transform: translateY(-10px);
  }
  @media only screen and (max-width: 1024px) {
    width: calc(50% - 16px)!important;
  }
  @media only screen and (max-width: 768px) {
    width: 100%!important;
  }
`;

const Top = styled.div``;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
`;
const Name = styled.div`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  margin-bottom: 16px;
`;
const Link = styled.a`
  font-weight: 700;
  color: #ccc;
  text-decoration: none;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const LinkIcon = styled.em`
  margin-right: 8px;
`;

const Description = styled.div`
  font-size: 14px;
  margin-bottom: 32px;
`;

const Stats = styled.div`
  flex-grow: 1;
  display: flex;
`;

const StatInfo = styled.span`
  margin-right: 16px;
`;

const StatIcon = styled.em`
  margin-right: 4px;
`;

const Size = styled.div``;

export const Repository: React.FC<RepositoryProps> = ({ repository }) => (
  <Project>
    <Top>
      <Name>
        <Link
          href={repository.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={repository.name}
        >
          <LinkIcon className="fab fa-github" />
          {repository.name}
        </Link>
      </Name>
      <Description>{repository.descripcion}</Description>
    </Top>
    <Bottom>
      <Stats>
        <StatInfo>{repository.language}</StatInfo>
        <StatInfo>
          <StatIcon className="fas fa-star" />
          {repository.starts}
        </StatInfo>
        <StatInfo>
          <StatIcon className="fas fa-code-branch"/>
          {repository.fork}
        </StatInfo>
      </Stats>
      <Size>{repository.size} KB</Size>
    </Bottom>
  </Project>
);
