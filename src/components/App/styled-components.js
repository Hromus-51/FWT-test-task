import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    max-width: 1204px;
    padding: 0px 20px;
    margin: 0 auto;

    @media(min-width: 768px) {
        padding: 0px 34px;
    }

    @media(min-width: 1024px) {
        padding: 0px 42px;
    }
`

export const Wrapper = styled.div`
    height: 100vh;

    display: flex;
    flex-direction: column;

    padding-top: 25px;

    @media(min-width: 768px) {
        padding-top: 35px;
    }
`;

