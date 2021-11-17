import React from 'react';
import AppNavBar from './components/Navbar';
import Intro from './pages/Intro';
import About from './pages/About';
import Experiences from './pages/Experiences';
import Project from './pages/Project';
import Contact from './pages/Contact';
import ParticleBg from 'components/ParticleBg';
import Footer from 'components/Footer';
import 'App.css';

const App: React.FC = () => {
  return (
    <div>
      <AppNavBar />
      <ParticleBg className="particle-js">
        <Intro id={'intro-section'} nextId={'about-section'} />
        <About id={'about-section'} nextId={'experiences-section'} />
        <Experiences id={'experiences-section'} nextId={'projects-section'} />
        <Project id={'projects-section'} nextId={'contact-section'} />
        <Contact id={'contact-section'} />
        <Footer />
      </ParticleBg>
    </div>
  );
};

export default App;
