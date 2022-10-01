import React, { useState } from 'react';
import AppNavBar from './components/Navbar';
import Intro from './pages/Intro';
import About from './pages/About';
import Experiences from './pages/Experiences';
import Project from './pages/Project';
import Contact from './pages/Contact';
import ParticleBg from 'components/ParticleBg';
import Footer from 'components/Footer';
import 'App.css';
import Fab from 'components/Fab';
import { animateScroll } from 'react-scroll';

const App: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };
  window.addEventListener('scroll', toggleVisible);

  return (
    <div>
      <AppNavBar />
      <ParticleBg>
        <Intro id={'intro-section'} nextId={'about-section'} />
        <About id={'about-section'} nextId={'experiences-section'} />
        <Experiences id={'experiences-section'} nextId={'projects-section'} />
        <Project id={'projects-section'} nextId={'contact-section'} />
        <Contact id={'contact-section'} />
        <Fab
          className={visible ? 'inline text-gray-800' : 'hidden'}
          onClick={() => animateScroll.scrollToTop({ duration: 500, smooth: true })}
          color={'titan-white'}
        />
      </ParticleBg>
      <Footer />
    </div>
  );
};

export default App;
