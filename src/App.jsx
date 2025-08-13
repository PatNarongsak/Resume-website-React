import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../component/header.jsx';
import Footer from '../component/Footer.jsx';
import About from './About.jsx';
import Resume from './Resume.jsx';
import Projects from './project.jsx';
import Contact from './contact.jsx';


function App() {
  return (
    <BrowserRouter basename='/Resume-website-React'>
      <Header />
      <Routes>
        <Route path="*" element={<About />} /> {/* Default route */}
        <Route path="/About" element={<About />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/Project" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
        
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
