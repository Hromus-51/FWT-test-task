import styled from "styled-components";

export const HeaderElement = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 15px;

    &:not(:last-child) {
        margin-bottom: 25px;
    }

    @media(min-width: 768px) {
        &:not(:last-child) {
            margin-bottom: 35px;
        }
    }
`;

export const ThemeButton = styled.button`
    color: var(--color-text);
    transition: color 0.15s ease 0s;
`;
