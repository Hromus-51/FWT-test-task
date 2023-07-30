import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled.div`
    max-height: 45px;
    position: relative;
`;

export const Input = styled.input`
    max-height: 45px;
    width: 100%;
    padding: 15px 37px 13px 15px;

    font-size: var(--fs-small);

    border-radius: var(--bdrr);
    border: 1px solid var(--line);

    transition: border 0.15s ease 0s;

    &::placeholder {
        color: var(--placeholder);
        font-size: var(--fs-small);
    }

    &:focus{
        border: 1px solid var(--color-text);
        transition: border 0.15s ease 0s;
    }
`;

export const CrossIcon = styled(motion.div)`
    position: absolute;
    top: 50%;
    right: 17px;
    transform: translateY(-50%);

    cursor: pointer;

    color: var(--color-text);
`