import styled from "styled-components";
import { ReactComponent as Sun } from '../../assets/images/sun.svg';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';

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

export const LogoIcon = styled(Logo)`
`;

export const ThemeButton = styled.button`
`;

export const SunIcon = styled(Sun)`
    fill: var(--color-text);
    transition: fill 0.15s ease 0s;

    cursor: pointer;
`;
