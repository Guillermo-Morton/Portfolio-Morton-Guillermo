import styled from "styled-components";

export const Container = styled.div`
  margin: 0 14.5rem;
  transition: 0.4s;
  @media screen and (max-width: 1270px) {
    margin: 0 6rem;
  }
  @media screen and (max-width: 852px) {
    margin: 0 1rem;
  }
  &.black{
    background:#000;
  }
`;
