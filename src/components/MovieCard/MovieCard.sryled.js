import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  text-align: center;
`;

export const Poster = styled.img`
  margin-left: auto;
  margin-right: auto;
  max-height: 100%;
  margin-bottom: 14px;
  border-radius: 2px;
  box-shadow: 1px 1px 5px 1px #e3989366;
`;

export const MovieLink = styled(Link)`
  padding: 6px;
  color:  #8d2e28;
  transition: color 250ms ease-in-out;
  text-shadow: 0 1px 0 rgba(19, 74, 70, 0.4);

  &:hover {
    color: #887a79;
  }
`;

export const Title = styled.p`
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 0em;
  color: #8d2e28;

`;