import React from 'react';

import ScrollToTop from '~/components/ScrollToTop';
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
  return (
    <div>
      <AppNavBar />
      <ParticleBg>
        <Intro id={'intro-section'} nextId={'about-section'} />
        <About id={'about-section'} nextId={'experiences-section'} />
        <Experiences id={'experiences-section'} nextId={'projects-section'} />
        <Project id={'projects-section'} nextId={'contact-section'} />
        <Contact id={'contact-section'} />
        <ScrollToTop />
      </ParticleBg>
      <Footer />
    </div>
  );
};

export default App;
