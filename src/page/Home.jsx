import { Outlet } from "react-router-dom";
import { Button, Header, Item, Left, Logo, Nav, Right, Title } from "../components/Header";
import styled from "styled-components";
import { useContext } from "react";
import TContext from "../context/theme/TContext";
import {BiSun, BiSolidMoon} from 'react-icons/bi'

const Home = () => {

  const { theme, setTheme, changeTheme } = useContext(TContext);

  return (
    <Container>
      <Header>
        <Left to={"/"}>
          <Logo>J</Logo>
          <Title>osé Luis</Title>
        </Left>
        <Nav>
          <Item to={"/"}>Home</Item>
          <Item to={"/about"}>About</Item>
          <Item to={"/projects"}>Projects</Item>
        </Nav>
        <Right>
          <Button $border='none' $padding='.5rem'>Contact Me</Button>
          <Button $border='none' $fontSize='1rem' $bg='none' onClick={() => setTheme(changeTheme)}>
            {theme === 'light' ? <BiSun /> : <BiSolidMoon />}
          </Button>
        </Right>
      </Header>
      <Outlet />
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  background: ${({theme}) => theme.bg};
  transition: background 1s ease-in-out;
  color: ${({theme}) => theme.text};
`;

export default Home;
