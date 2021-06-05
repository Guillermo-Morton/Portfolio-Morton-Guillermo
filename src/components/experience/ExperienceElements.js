import styled from "styled-components";
export const Flex = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 padding: 12rem 0;
 @media screen and (max-width: 852px) {
    flex-direction: column;
    padding: 6.3rem 0;
  }
`
export const Title = styled.h2`
  font-size: 3.5rem;
  margin: 3rem 0 0 2rem;
  color:#fff;
  @media screen and (max-width: 1270px) {
    font-size: 2.5rem;
  }
  @media screen and (max-width: 852px) {
    font-size: 3rem;
    margin: 3rem 0 0 0;
    text-align:center;
  }
`;
export const SubTitle = styled.h2`
  font-size: 2rem;
  margin: 0.5rem 0 0;
  color:#fff;
  @media screen and (max-width: 1270px) {
    font-size: 1.3rem;
  }
  @media screen and (max-width: 852px) {
    font-size: 1.8rem;
    margin: 0.5rem 0 0 0;
    text-align:center;
  }
`;
export const Ilustation = styled.img`
    width:30rem;
    margin: 3rem 0 0;
    @media screen and (max-width: 1270px) {
        width:20rem;
      }
    @media screen and (max-width: 852px) {
        width:100%;
      }
`

export const Paragraph = styled.p`
    padding: 0.5rem 2rem;
    color:#fff;
`
