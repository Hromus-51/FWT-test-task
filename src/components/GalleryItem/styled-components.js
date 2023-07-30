import styled from "styled-components";
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const InfoTable = styled.div`
    width: 100%;
    height: 145px;

    color: var(--info-tabler-color);
    padding: 5px 15px;
    background: var(--bg-info-tablet);

    position: absolute;
    bottom:0;
    left: 0;

    transform: translateY(115px);
    transition: transform 0.3s ease 0s;
`;

export const Tablet = styled.div`
    max-width: 727px;
    aspect-ratio: 340/249;

    border-radius: 20px;
    background: var(--skeleton-bg);

    overflow: hidden;
    position: relative;

    cursor: pointer;

    &:hover ${InfoTable} {
        transform: translateY(0);
        transition: transform 0.25s ease 0s;
    }

    /* @media(hover: hover) {
        &:hover ${InfoTable} {
            transform: translateY(0);
            transition: transform 0.25s ease 0s;
        }
    } */

    @media(min-width: 768px) {
        aspect-ratio: 360/275;
    }
`;

export const Image = styled(LazyLoadImage)`
    width: 100%;
    height: 100%;

    position: absolute;
    top: 0;
    bottom: 0;

    object-fit: cover;
    object-position: center;
`;

export const Name = styled.h2`
    font-size: var(--fs-large);
    font-weight: var(--fw-bold);
    line-height: var(--lh-large);
    text-transform: capitalize;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    &:not(:last-child) {
        margin-bottom: 6px; 
    }
`;

export const List = styled.ul`
    
`;

export const ListItem = styled.li`
    font-size: var(--fs-small);
    font-weight: var(--fw-medium);
    line-height: var(--lh-small);

    display: flex;
    align-items: flex-start;
    column-gap: 6px;

    &:not(:last-child) {
        margin-bottom: 5px; 
    }
`;

export const Date = styled.div`
    font-weight: var(--fw-light);

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

