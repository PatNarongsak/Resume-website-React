import './css/about.css';
import { Link } from 'react-router-dom';
import profilePic from './assets/Profile.jpg';


export default function About() {
    return (
<div className="main-container">
        <div className="profile-card">
                <div className="profile-img">
                    <img src={profilePic} alt="Profile" />
                </div>
                <div className="profile-name">Narongsak Mueandao</div>
                <div className="profile-title">Student Born to dev</div>
                {/* Responsive 765px */}
                <div className="intro-buttons-responsive">
                    <Link to="/resume" className="btn-about btn-primary-responsive">RESUME</Link>
                    <Link to="/projects" className="btn-about btn-outline-responsive">PROJECTS</Link>
                </div>
                <div className="profile-social">
                    <a href="https://www.facebook.com/narongsak.muandao/" target="_blank"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="https://github.com/PatNarongsak" target="_blank"><i className="fab fa-github"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                </div>
        </div>
            <div className="intro-content">
                <h1>Guten Morgan</h1>
                <h2>My mini Resume</h2>
                <div className="intro-buttons">
                    <Link to="/resume" className="btn-about btn-primary">RESUME</Link>
                    <Link to="/projects" className="btn-about btn-outline">PROJECTS</Link>
                </div>
                <p>Product Engineer with over 3 years of experience designing components to customer specifications using SolidWorks and AutoCAD. Skilled at overseeing production processes to ensure compliance with company standards, and managing and maintaining CNC laser cutting and CNC milling machines to boost efficiency, reduce scrap rates, and deliver high-quality parts on time. Committed to developing innovative manufacturing processes to support increasing production volumes..</p>

            </div>
</div>
      );
}