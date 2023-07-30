import styled from "styled-components";
import { motion } from "framer-motion";

export const InputWrapper = styled(motion.div)` 
`;

export const InputContainer = styled.div`
    padding: 20px 0;

    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 10px;

    @media(min-width: 768px) {
        flex-direction: column;
        row-gap: 15px;
    }

    @media(min-width: 1366px) {
        flex-direction: row;
    }
`;

export const From = styled.input`
    font-size: var(--fs-small);
    color: var(--input-color-text);

    width: 110px;
    height: 45px;

    padding: 15px;
    border-radius: 8px;
    background-color: var(--input-bg);

    &::placeholder {
        color: var(--input-placeholder);
        font-size: var(--fs-small);
    }

    @media(min-width: 1366px) {
        width: 95px;
    }
`;

export const Line = styled.div`
    width: 12px;
    height: 1px;

    background-color: var(--color-text);
`;

export const Before = styled(From)`
`;