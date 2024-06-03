import './App.css';
import Contato from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Home from './sections/Hero/Hero';
import Projetos from './sections/Projects/Projects';
import Habilidades from './sections/Skills/Skills';

function App() {
  return (
    <>
      <Home />
      <Projetos />
      <Habilidades />
      <Contato />
      <Footer />
    </>
  );
}

export default App;
