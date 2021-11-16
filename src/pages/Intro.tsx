import React from 'react';
import Typewriter from 'typewriter-effect';
import Section, { SectionProps } from '../components/Section';

const Intro: React.FC<SectionProps> = ({ id, style, className }) => {
  const INTRO = "Hi there, I'm Jin Hao 👋🏻";
  const ROLES = ['Software Developer', 'NUS Penultimate Student', 'Cyber Security Enthusiast'];

  return (
    <Section id={id} style={style} className={className}>
      <div className="w-full px-8 pt-20 pb-8 text-left">
        <div className="grid items-center grid-cols-1 gap-3 md:grid-cols-2">
          <div className="text-center">
            <span className="text-3xl md:text-4xl lg:text-5xl">{INTRO}</span>
            <div className="mt-8 text-2xl md:text-3xl lg:text-4xl">
              I am a
              <Typewriter
                options={{
                  strings: ROLES,
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                }}
              />
            </div>
          </div>
          <img
            src={'https://avatars1.githubusercontent.com/u/52820430'}
            className="m-auto my-10 rounded-full"
            alt="profile"
          />
        </div>
      </div>
    </Section>
  );
};

export default Intro;
