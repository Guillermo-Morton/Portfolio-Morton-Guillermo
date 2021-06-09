import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  min-height:100vh;
  flex-direction: column;
  @media screen and (max-width: 852px) {
    flex-direction: column;
  }
`;
export const Form= styled.form`
`
export const Label= styled.label`
margin:0.3rem 0;
`
export const Input= styled.input`
width:30rem!important;
padding: 0.5rem 1rem;
border-radius:10px;
border: 0.5px solid grey;
-webkit-appearance: none;
outline: none;
@media screen and (max-width: 852px) {
  width:18rem!important;
}
@media screen and (max-width: 400px) {
  width:15rem!important;
}
@media screen and (max-width: 290px) {
  width:12rem!important;
}
`
export const TextArea= styled.textarea`
width:30rem!important;
padding: 0.5rem 1rem;
border-radius:10px;
border: 0.5px solid grey;
outline: none;
resize: none;
@media screen and (max-width: 852px) {
  width:18rem!important;
}
@media screen and (max-width: 400px) {
  width:15rem!important;
}
@media screen and (max-width: 290px) {
  width:12rem!important;
}

`
export const FormControl= styled.div`
  width:100%!important;
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
`;
export const Title = styled.h2`
  font-size: 3.5rem;
  margin: 3rem 0;
  color: #000;
  @media screen and (max-width: 1270px) {
    font-size: 2.8rem;
  }
  @media screen and (max-width: 852px) {
    font-size: 2.5rem;
    margin: 3rem 0 0 0;
    text-align: center;
  }
  @media screen and (max-width: 290px) {
    font-size: 2rem;
  }
`;
export const Btn = styled.button`
  border-radius: 10px;
  background: #212121;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin: 1rem 0;

  &:hover {
    transition: all 0.4s ease-in-out;
    background: #c8dafe;
    color: #010606;
  }
`;
