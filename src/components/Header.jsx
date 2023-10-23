import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  transition: background 1s ease-in-out, color 1s ease-in-out;
  grid-area: Header;
  padding: 1rem;
  background: ${({ theme }) => theme.bg};
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
  
const Nav = styled.nav`
  display: flex;
  gap: 1rem;
`;

const Logo = styled.p`
  background: ${({theme}) => theme.text};
  color: ${({theme}) => theme.bg};
  padding: .3rem .8rem;
  border-radius: 50%;
  font-size: 1.3rem;
`;

const Left = styled(NavLink)`
  display: flex;
  gap: .2rem; 
  align-items: center;
  text-decoration: none;
`;

const Right = styled.div`
  display: flex;
  gap: 1rem;
`;

const Title = styled.p`
  color: ${({theme}) => theme.text};
`;
  
const Item = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  padding: .2rem .4rem;
  border-bottom: .1rem solid transparent;
  transition: .7s border ease-in-out;

  &:hover {
    color: gray;
    position: relative;
    border-bottom: .1rem solid #65f0be;

    &:before {
      context: 'k';
      position: absolute;
      width: 50%;
      border-bottom: .1rem solid #00a172;
      bottom: 0;
    }
  }

  &.active {
    color: #00a172;
    position: relative;
    border-bottom: none;

    &:before {
      content: '';
      position: absolute;
      width: 50%;
      height: 50%;
      border-bottom: .1rem solid #00a172;
      border-left: .1rem solid #00a172;
      color: #00a172;
      bottom: 0;
      left: 0;
    }

    &:after {
      content: '';
      position: absolute;
      width: 50%;
      height: 50%;
      border-top: .1rem solid #00a172;
      border-right: .1rem solid #00a172;
      top: 0;
      right: 0;
    }

  }

`;

const Button = styled.button`
  border: ${(props) => props.$border};
  padding: ${(props) => props.$padding};
  cursor: pointer;
  background: ${(props) => props.$bg ? props.$bg : '#00a172' };
  font-size: ${(props) => props.$fontSize};
  color: ${({theme}) => theme.text};
  transition: 1s;
`;

export { Header, Left, Title, Nav, Item, Logo, Right, Button };