import styled from "styled-components";
import { Container } from "./container";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  background-color: #1e1e1e;
  color: #ccc;
  position: fixed;
  z-index: 1000;
  width: 100%;
  top: 0;
  left: 0;

  @media only screen and (max-width: 1024px) {
    .responsive_nav {
      transform: translateY(100vh);
    }
  }
`;

const Bar = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  @media only screen and (max-width: 1024px) {
    display: flex;
    width: 100%;
    position: absolute;
    right: 50px;
    top: 13px;
  }
`;

const Menu = styled.nav`
  display: flex;
  /* width: 100%; */
  align-items: center;

  @media only screen and (max-width: 1024px) {
    position: fixed;
    top: -100vh;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    background-color: #1e1e1e;
    transition: all 1.5s;
  }
`;

const MenuItem = styled.a`
  padding: 16px;
  cursor: pointer;
  color: #7eb677;
  text-decoration: none;

  &:hover {
    background: #252526;
    color: #ccc;
  }

  @media only screen and (max-width: 1024px) {
    font-size: 1.5rem;
    &:hover {
    background: #252526;
    color: #ccc;
  }
  }
`;

const ButtonHeader = styled.button`
  padding: 5px;
  cursor: pointer;
  background: transparent;
  border: none;
  outline: none;
  color: #7eb677;
  visibility: hidden;
  opacity: 0;
  font-size: 1.8rem;
  margin-top: 7px;

  &:focus {
    color: #ccc;
  }
  &:hover {
    color: #ccc;
  }
  @media only screen and (max-width: 1024px) {
    visibility: visible;
    opacity: 1;

    &.nav-close-btn {
      position: absolute;
      top: 2rem;
      right: 2rem;
    }
  }
`;

export function Header() {
  const navRef = useRef<HTMLElement | null>(null);

  const showNavbar = () => {
    if (navRef.current) {
      navRef.current.classList.toggle("responsive_nav");
    }
  };

  const hideNavbar = () => {
    navRef.current?.classList.remove("responsive_nav")
  }
  return (
    <Wrapper>
      <Container>
        <Bar>
          <Menu ref={navRef}>
            <MenuItem href="#inicio" onClick={hideNavbar}>INICIO</MenuItem>
            <MenuItem href="#curriculum" onClick={hideNavbar}>SOBRE Mí</MenuItem>
            <MenuItem href="#skills" onClick={hideNavbar}>HABILIDADES</MenuItem>
            <MenuItem href="#repositories" onClick={hideNavbar}>REPOSITORIOS</MenuItem>
            <MenuItem href="#contact" onClick={hideNavbar}>CONTACTAME</MenuItem>
            <ButtonHeader className="nav-close-btn" onClick={showNavbar}>
              <FaTimes />
            </ButtonHeader>
          </Menu>
          <ButtonHeader onClick={showNavbar}>
            <FaBars />
          </ButtonHeader>
        </Bar>
      </Container>
    </Wrapper>
  );
}
