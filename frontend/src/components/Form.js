import React, { useRef } from "react";
import styled from "styled-components";

const FormContainer = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 120px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
`;

const label = styled.label``;

const button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #2c73d2;
  height: 42px;
`;

const Form = ({ onEdit }) => {
  const ref = useRef();

  return (
    <FormContainer ref={ref}>
      <InputArea>
        <label>Nome</label>
        <input name="nome" />
      </InputArea>
      <InputArea>
        <label>E- mail</label>
        <input name="email" type="email" />
      </InputArea>
      <InputArea>
        <label>Telefone</label>
        <input name="fone" />
      </InputArea>
      <InputArea>
        <label>Data de Nascimento</label>
        <input name="data_nascimento" type="date" />
      </InputArea>

      <button type="submit">Salvar</button>
    </FormContainer>
  );
};

export default Form;
