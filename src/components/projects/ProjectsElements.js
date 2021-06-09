import styled from "styled-components";
export const Flex = styled.div`
    display: flex;
    flex-direction:column;
    min-height: 100vh;
    @media screen and (max-width: 852px) {
        text-align: center;
        padding:1.5rem 0;
      }

`;
export const Title = styled.h2`
  font-size: 3.5rem;
  margin: 3rem 0 3rem 2rem;
  color: #fff;
  @media screen and (max-width: 1270px) {
    font-size: 2.5rem;
  }
  @media screen and (max-width: 852px) {
    font-size: 3rem;
    margin: 3rem 0 3rem 0;
    text-align: center;
  }
`;
export const SubTitle = styled.h2`
  font-size: 2rem;
  margin: 0 0 0 2rem;
  color: #000;
  @media screen and (max-width: 1270px) {
    font-size: 1.3rem;
  }
  @media screen and (max-width: 852px) {
    font-size: 1.8rem;
    margin: 0.5rem 0 0 0;
    text-align: center;
  }
`;

export const Paragraph = styled.p`
  padding: 0;
  margin: 0 0 0 2rem;
  font-size:1.2rem;
  color: #000;
  @media screen and (max-width: 852px) {
    padding: 0.5rem 2rem 0.5rem;
    font-size: 1.1rem!important;
    text-align:center;
    margin: 0;
  @media screen and (max-width: 319px) {
    padding: 0.5rem 1rem 0.5rem ;
    font-size: 1rem!important;
    text-align:center;
    margin: 0;
  }
`;
export const ProjectLink = styled.a`
  text-decoration:none;
  margin: 0.5rem 0 2rem 2rem;
  color: #404040;
  text-decoration: none;
  padding: 0 2rem 0 0rem;
  cursor: pointer;
  font-weight:bold;
  transition: all 0.2s ease-in-out;
  @media screen and (max-width: 852px) {
    padding: 0.5rem 0rem 0.5rem 0;
    font-size: 1rem!important;
    margin: 0 0 1.5rem 0; 
  }
  @media screen and (max-width: 319px) {
    padding: 0.5rem 0rem 0.5rem 0;
    font-size: 1rem!important;
    margin: 0 0 0 0;
  }
  &:hover {
    color: #000;
`;
