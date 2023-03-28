import styled from 'styled-components';
export const Form = styled.form`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  height: 100px;
`;
export const FormBookLabel = styled.label`
  display: flex;
  justify-content: space-between;
`;
export const FormBookInput = styled.input``;
export const SubmitBtn = styled.button`
  margin: 0 auto;
  cursor: pointer;
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: blue;
  color: yellow;
  height: 25px;
  width: 100px;
  &:hover {
    background-color: yellow;
    color: blue;
  }
`;
