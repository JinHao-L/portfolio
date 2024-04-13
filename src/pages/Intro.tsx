import React from 'react';
import Typewriter from 'typewriter-effect';

import Section, { SectionProps } from '../components/Section';
import profilePic from '../assets/profile.jpeg';
import SOCIALS from '../constants/socials';

const Intro: React.FC<SectionProps> = ({ id, style, className, nextId }) => {
  const ROLES = ['Software Developer', 'NUS CS Graduate', 'Cyber Security Enthusiast'];

  return (
    <Section id={id} style={style} className={className} nextId={nextId}>
      <div className="w-full px-8 pb-8 text-left lg:pt-40 lg:px-20 xl:px-40 2xl:px-80">
        <div className="grid items-center grid-cols-1 gap-3 transition-transform lg:grid-cols-2">
          <img src={profilePic} className="z-10 m-auto my-10 rounded-full" alt="profile" />
          <div className="text-center lg:order-first">
            <span className="text-3xl whitespace-nowrap md:text-4xl lg:text-5xl">
              Hi there, <wbr />
              I&apos;m Jin Hao
            </span>
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
            <ul className="flex flex-row justify-center mt-10">
              {SOCIALS.map(({ link, type, Icon }) => (
                <li className="px-2" key={type}>
                  <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className="relative flex items-center w-16 h-16 leading-none text-indigo-800 rounded-full bg-titan-white-500 hover:bg-titan-white-700 hover:text-titan-white-100"
                  >
                    <Icon className="m-auto" size={30} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Intro;
