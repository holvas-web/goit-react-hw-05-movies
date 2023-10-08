import styled from "styled-components";

export const Cast = styled.ul `
    display: flex;
    flex-wrap: wrap;
    margin: -15px;
    padding: 0;
    list-style: none;
    justify-content: center;
`

export const CastItem = styled.li `
    width: 150px;
    margin: 15px;
    border-radius: 2px;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`

export const CastImg = styled.img `
    width: 100%;
    object-fit: cover;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
        transform: scale(1.03);
        cursor: pointer;
    }
`
export const CastItem_text = styled.p `
    text-align: center;
    color: black;
    font-size: 16px;
`
export const CastItems_text = styled.span `
    font-weight: bold;
`