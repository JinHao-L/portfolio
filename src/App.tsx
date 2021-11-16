import React from 'react';
import AppNavBar from './components/Navbar';
import Intro from './pages/Intro';
import About from './pages/About';
import Experiences from './pages/Experiences';
import Project from './pages/Project';
import Contact from './pages/Contact';
import Divider from 'components/Divider';

import StarSky from 'react-star-sky';
import 'react-star-sky/dist/index.css';
const App: React.FC = () => {
  return (
    <StarSky className="text-white" frameRate={30}>
      <AppNavBar />
      <Intro id={'intro-section'} />
      <Divider />
      <About id={'about-section'} />
      <Divider />
      <Experiences id={'experiences-section'} />
      <Divider />
      <Project id={'projects-section'} />
      <Divider />
      <Contact id={'contact-section'} />
    </StarSky>
  );
};

export default App;
