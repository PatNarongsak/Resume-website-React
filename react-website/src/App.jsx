import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../component/header.jsx';
import Footer from '../component/Footer.jsx';
import About from './about.jsx';
import Resume from './resume.jsx';
import Projects from './projects.jsx';
import Contact from './contact.jsx';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
