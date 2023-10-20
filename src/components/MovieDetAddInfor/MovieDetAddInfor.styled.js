import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
    margin-top: 40px;
    margin-bottom: 30px;
`;

export const SubtitleH4 = styled.h4`
    font-size: 24px;
    margin-bottom: 20px;
    color: #ffffff;
`;

export const LinkWrapper = styled.div`
    display: flex;
`;

export const LinkList = styled.ul`
    display: flex;
    gap: 50px;
    
`;

export const LinkItem = styled.li`
    display: flex;
    align-items: center;
`;

export const InforLink = styled(Link)`
    font-size: 24px;
    font-weight: 700;
    text-align: center;
    padding: 5px;
    cursor: pointer;
    color: #8d2e28;
    transition: color 250ms ease-in-out;
    padding-bottom: 50px;

  &:hover {
    color: #887a79;
    text-shadow: 0 1px 0 rgba(19, 74, 70, 0.4);
  }

`;
