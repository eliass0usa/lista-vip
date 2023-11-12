import GlobalStyle from "./styles/global";
import styled from "styled-components";
import Form from "./components/Form.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h2``;

function App() {
  return (
    <>
      <Container>
        <Title>VIP's</Title>
        <Form />
      </Container>
      <ToastContainer autoClose={3000} position="top-right" />
      <GlobalStyle />
    </>
  );
}

export default App;
