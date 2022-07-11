import { css, styled } from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledLabel = styled.label`
  font-size: 0.75rem;
`;

export const StyledInput = styled.input`
  background-color: var(--grey2);
  height: 3rem;
  padding: 0 1rem; //mudei as medidas para rem e coloquei o padding
  border: solid 1px var(--grey-scale-2);
  border-color: ${(props) =>
    props.error ? css`var(--primaryColor-negative)` : css`var(--grey-scale-2)`};
  border-radius: 0.25rem;
  color: var(--grey-scale-0);

  @media (min-width: 600px) {
    margin: 1.375rem 0;

    &::placeholder {
      color: var(--grey-scale-1);
      margin-left: 1rem;
    }
    &:focus {
      border: solid 1px var(--grey-scale-0);

      &::placeholder {
        color: var(--grey-scale-0);
      }
    }
  }
`;

export const HelperText = styled.span`
  margin-bottom: 0.5rem;
  font-size: 0.75rem;
  color: ${(props) =>
    props.error ? css`var(--primaryColor-negative)` : css`var(--grey-scale-1)`};
`;
