import styled from 'styled-components';

export const Container = styled.div`
    background-color: #136713;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Logo = styled.img`
    width: auto;
    height: 70px;
`;

export const SearchInput = styled.input`
    border: 0;
    border-radius: 25px;
    width: ${props=>props.active ? 300 : 0}px;
    padding-left: 50px;
    height: 50px;
    background-color: #fff;
    outline: 0;
    background-image: url('/assets/search.png');
    background-size: 32px;
    background-repeat: no-repeat;
    background-position: 10px center;
    transition: all ease 0.2s;
    cursor: pointer;

    &:focus {
        cursor: text;
    }
`;
