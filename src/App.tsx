import React, { useState } from 'react';
import { animateScroll } from 'react-scroll';

import Fab from '~/components/Fab';
import Footer from '~/components/Footer';
import AppNavBar from '~/components/Navbar';
import ParticleBg from '~/components/ParticleBg';
import About from '~/pages/About';
import Contact from '~/pages/Contact';
import Experiences from '~/pages/Experiences';
import Intro from '~/pages/Intro';
import Project from '~/pages/Project';
import '~/App.css';

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
          onClick={() =>
            animateScroll.scrollToTop({ duration: 500, smooth: true })
          }
          color={'titan-white'}
        />
      </ParticleBg>
      <Footer />
    </div>
  );
};

export default App;
