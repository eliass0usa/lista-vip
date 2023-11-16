import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from "./components/pages/Form";
import "react-toastify/dist/ReactToastify.css";
import Home from './components/pages/Home';
import Contato from "./components/pages/Contato";
import GlobalStyle from './styles/global';
import Container from './components/layout/Container';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Navbar />
        <Container customClass="min-height">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/form" element={<Form />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </>
  );
}

export default App;