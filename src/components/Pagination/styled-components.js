import styled from "styled-components";
import { Pagination as PagComponent } from '@mui/material';

export const Wrapper = styled.div`
    padding-bottom: 34px;

    @media(min-width: 768px) {
        padding-bottom: 54px;
    }

    @media(min-width: 1024px) {
        padding-bottom: 62px;
    }

    @media(min-width: 1366px) {
        padding-bottom: 97px;
    }
`;

export const Paginate = styled(PagComponent)`
    //container
    & .MuiPagination-ul {
        display: inline-flex;
    }

    //root
    & .MuiButtonBase-root {
        width: 41px;
        height: 41px;

        color: var(--color-text);
        font-size: var(--fs-large);
        line-height: var(--lh-large);
        font-weight: var(--fw-medium);

        border-radius: 0;
        border: 1px solid var(--color-text);
        background: var(--bg);
        margin: 0 -0.5px;

        @media(hover: hover) {
            &:hover {
                background: var(--pagination-hover-bg);
            }
        }

        transition: all 0.15s ease 0s;
    }

    //selected
    & .Mui-selected {
        background: var(--bg-inverse);
        color: var(--color-text-inverse);

        &:hover {
            background: var(--bg-inverse);
        }
    }

    //disabled
    & .css-yuzg60-MuiButtonBase-root-MuiPaginationItem-root.Mui-disabled {
        opacity: 1;
        border: 1px solid var(--pagination-disabled);
        color: var(--pagination-disabled);
    }

    //first page
    & [aria-label="Go to first page"] {
        border-radius: var(--bdrr) 0 0 var(--bdrr);
    }

    //last page
    & [aria-label="Go to last page"] {
        border-radius: 0 var(--bdrr) var(--bdrr) 0;
    }
`;
