import styled from "styled-components";
import { motion } from "framer-motion";
import { ReactComponent as Cross } from '../assets/images/cross.svg';
import { ReactComponent as Arrow } from '../assets/images/arrow.svg';

export const Wrapper = styled.div`
    position: relative;
    height: 45px;
`;

export const Popup = styled.button`
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;

    text-align: left;
    border-radius: 8px;
    border: 1px solid var(--line);
    background: var(--bg);

    overflow: hidden;
    transition: border 0.15s ease 0s;

    &:focus {
        border: 1px solid var(--color-text);
        transition: border 0.15s ease 0s;
    }

    &:disabled {
        cursor: default;
    }
`;

export const Title = styled.div`
    min-height: 43px;
    font-size: var(--fs-small);

    padding: 15px 53px 13px 15px;
    position: relative;
    
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

export const Icons = styled.div`
    height: 100%;

    position: absolute;
    top: 50%;
    right: 17px;
    transform: translateY(-50%);

    display: flex;
    align-items: center;
    column-gap: 10px;
`;

export const CrossIcon = styled(motion(Cross))`
    fill: var(--color-text);
`;

export const ArrowIcon = styled(Arrow)`
    fill: var(--color-text);
    
    transform: rotate(${props => props.visibility === 'true' ? '180deg' : '0'});
    transition: transform 0.2s ease 0s;
`;






