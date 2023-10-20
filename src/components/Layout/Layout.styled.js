import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const Container = styled.div`
max-width: 1200px;
margin: 0 auto;
padding: 0 16px;
height: 100vh;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid #301934;

  > nav {
    display: flex;

  }
`;



export const NavList = styled.ul`
  display: flex;
`;


export const Link = styled(NavLink)`
  display: flex;
  flex-direction: column;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color:  #fff;
  font-weight: 500;
  cursor: pointer;
  text-shadow: 0 1px 0 rgba(19, 74, 70, 0.4);

  &.active {
    color:#8d2e28;
    text-shadow: 0 1px 0 rgba(19, 74, 70, 0.4);
  }
`;