import styled from "styled-components";

export const Wrapper = styled.ul`
    &:not(:last-child) {
        margin-bottom: 45px;
    }

    @media(min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        column-gap: 20px;
    }
`;

export const FilterItem = styled.li`
    position: relative;
    z-index: ${props => props.zIndex};

    &:not(:last-child) {
        margin-bottom: 15px;
    }

    @media(min-width: 768px) {
        &:not(:last-child) {
            margin-bottom: 0px;
        }
    }
`;








