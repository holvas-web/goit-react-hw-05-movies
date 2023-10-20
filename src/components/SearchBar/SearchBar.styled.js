import styled from 'styled-components';

export const Wrapper = styled.div`
   
    display: flex;
    justify-content: start;
    align-items: center;
   
    padding-right: 24px;
    padding-left: 24px;
    padding-top: 12px;
    padding-bottom: 12px;
    color: #fff;
   
`;

export const SearchForm = styled.form`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 400px;
    background-color: #fff;
    border: 1px solid #212121;
    border-radius: 50px;
    overflow: hidden;
`;

export const SearchFormButton = styled.button`
    display: inline-block;
    width: 48px;
    height: 48px;
    border: 0;
    background: transparent;
    opacity: 0.6;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    outline: none;

    &:hover {
    opacity: 1;
    color: blue;
    transform: scale(1.05);
    }
`;

export const SearchFormInput = styled.input`
    display: inline-block;
    width: 100%;
    font: inherit;
    font-size: 20px;
    border: none;
    outline: none;
    padding-left: 4px;
    padding-right: 4px;

    &::placeholder {
        font: inherit;
        font-size: 18px;
    }
`;