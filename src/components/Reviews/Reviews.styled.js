import styled from 'styled-components';

export const RevWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const RevSubtitle = styled.h2`
    font-size: 28px;
    margin-bottom: 20px;
    color: #FFFFFF;
    text-shadow: 0 1px 0 rgba(19, 74, 70, 0.4);
`;

export const RevList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    max-width: 900px;
    gap: 30px;
`;

export const RevItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 5px;

`;

export const RevAuthor = styled.p`
    font-size: 24px;
    font-weight: 600;
    color:  #8d2e28;
    text-shadow: 0 1px 0 rgba(19, 74, 70, 0.4);
`;

export const RevContent = styled.p`
  font-size: 18px;
  color:   #ffffff;
  text-shadow: 0 1px 0 rgba(19, 74, 70, 0.4);
  padding-bottom: 50px;
`;

export const NoRevMessage = styled.div`
    color: #FF0000;
    font-size: 24px;
    font-weight: 700;
    text-shadow: 5px 2px 5px rgba(0, 0, 0, 0.9);
`;