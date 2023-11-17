import { styled } from '@mui/system';

export const FormContainer = styled('form')`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
`;

export const InputArea = styled('div')`
  display: flex;
  flex-direction: column;
`;

export const StyledTextField = styled('TextField')`
  width: 120px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
`;

export const StyledButton = styled('Button')`
  padding: 10px;
  color: #fff;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #2c73d2;
  height: 42px;
`;