import styled from "styled-components";

export const Item = styled.li`
    font-size: var(--fs-medium);
    font-weight: var(--fw-medium);
    line-height: var(--lh-medium);

    padding: 10px 22px;
    text-align: left;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    @media(hover: hover) {
        &:hover {
            color: var(--bg);
            background: var(--color-text);
            transition: all 0.15s ease 0s;
        }
    }
`