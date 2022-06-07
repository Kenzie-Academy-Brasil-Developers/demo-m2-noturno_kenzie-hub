import styled, {css} from "styled-components";

export const Btn = styled.button`
    color: var(--grey0);
    background-color: ${props => {
        return props.negative? css`var(--colorPrimaryNegative)` : css`var(--colorPrimary)`
    }};
    font-weight: 500;
    border: none;
    border-radius: 5px;
    padding: 10px;

    &:hover{
        background-color: var(--colorPrimaryFocus);
    }

    &:disabled{
        background-color: var(--grey1);
    }

    &:disabled:hover{
        background-color: var(--grey2);
    }


`