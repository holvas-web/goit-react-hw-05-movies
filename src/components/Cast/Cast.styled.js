import styled from 'styled-components';

export const CastWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`;

export const CastSubtitle = styled.h2`
    font-size: 28px;
    margin-bottom: 30px;
    text-align: center;
    color: #FFFFFF;
    text-shadow: 0 1px 0 rgba(19, 74, 70, 0.4);
`;

export const CastList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 40px;
    padding-bottom: 50px;
`;

export const CastItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const CastPoster = styled.img`
    border-radius: 2px;
    box-shadow: 1px 1px 6px 1px #e3989366;
`;

export const ActorName = styled.p`
    font-size: 16px;
    font-weight: 500;
    color:  #ffffff;
    padding-top: 14px;
`;

export const Character = styled.p`
  font-size: 14px;
  font-weight: 500;
  color:  #8d2e28;
  text-shadow: 0 1px 0 rgba(19, 74, 70, 0.4);
`;


export const NoCastMessage = styled.div`
    color: #ffffff;
    font-size: 24px;
    font-weight: 700;
    text-shadow: 0 3px 0 rgba(25, 25, 112, 1);
`;