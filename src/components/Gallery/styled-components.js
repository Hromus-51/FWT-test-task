import styled from "styled-components";

export const Wrapper = styled.div`
    flex: 1 1 auto;

    &:not(:last-child) {
        margin-bottom: 30px;
    }

    @media(min-width: 768px) {
        &:not(:last-child) {
            margin-bottom: 35px;
        }
    }

    @media(min-width: 1024px) {
        &:not(:last-child) {
            margin-bottom: 40px;
        }
    } 
`;

export const GalleryList = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 20px;

    @media(min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media(min-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
    }
`;

