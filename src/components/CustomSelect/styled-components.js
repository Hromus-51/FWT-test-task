import styled from "styled-components";
import { motion } from "framer-motion";

export const ListWrapper = styled(motion.div)`
    width: 100%;
`;

export const List = styled.ul`
    max-height: 400px;

    padding: 10px 0px 15px;
    border-top: 1px solid var(--placeholder);

    overflow-y: auto;

    &::-webkit-scrollbar {
        width: 25px;
    }

    &::-webkit-scrollbar-track {
    }

    &::-webkit-scrollbar-thumb {
        background-color: var(--thumb);
        border-radius: 15px;

        border: 8px solid transparent;
        background-clip: content-box;
    }

    @media(min-width: 768px) {
        max-height: 355px;
    }

    @media(min-width: 1366px) {
        max-height: 300px;
    }
`;

