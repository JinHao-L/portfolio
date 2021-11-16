import IconList from 'components/IconList';
import SectionBody from 'components/SectionBody';
import SectionHeader from 'components/SectionHeader';
import SubSectionHeader from 'components/SubSectionHeader';
import React from 'react';
import Section, { SectionProps } from '../components/Section';
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiVim,
  DiVisualstudio,
  DiLinux,
  DiJava,
  DiPostgresql,
  DiIonic,
} from 'react-icons/di';
import {
  SiAmazonaws,
  SiApachekafka,
  SiDocker,
  SiExpress,
  SiGradle,
  SiKubernetes,
  SiNestjs,
  SiPostman,
  SiTypescript,
  SiWebpack,
} from 'react-icons/si';

const About: React.FC<SectionProps> = ({ id, style, className }) => {
  const DESCRIPTION =
    'I am a penultimate Computing undergraduate at the National University of Singapore. ' +
    'I am currently specialising in Software Engineering and Computer Security. ' +
    'I believe that both are them are important to create inclusive, secure technologies that will be used by the masses.';

  const SKILLS_INTRO =
    'I have dabbled with both frontend and backend, with a greater proficiency in frontend. ' +
    'Throughout my studies, I have also experienced and tried out various fields of computing, such as Cryptocurrency, Chrome Extension, Mobile App development and Web development. ' +
    'The list below are some of the skillsets that I have gained through projects that I have done in my academic, internship or in my own free time.';

  const PROFICIENT = [
    { Icon: SiTypescript, name: 'Typescript' },
    { Icon: DiJavascript1, name: 'Javascript' },
    { Icon: DiReact, name: 'React (JS & Native)' },
    { Icon: DiPython, name: 'Python' },
    { Icon: SiNestjs, name: 'NestJS' },
    { Icon: DiPostgresql, name: 'PostgreSQL' },
    { Icon: DiNodejs, name: 'NodeJS' },
  ];

  const DABBLED = [
    { Icon: DiJava, name: 'Java' },
    { Icon: SiGradle, name: 'Gradle' },
    { Icon: SiExpress, name: 'ExpressJS' },
    { Icon: SiApachekafka, name: 'Apache Kafka' },
    { Icon: SiKubernetes, name: 'Kubernetes' },
    { Icon: SiAmazonaws, name: 'AWS Services' },
    { Icon: DiMongodb, name: 'MongoDB' },
    { Icon: DiIonic, name: 'Ionic' },
    { Icon: SiWebpack, name: 'Webpack' },
  ];

  const TOOLS = [
    { Icon: DiVim, name: 'Vim' },
    { Icon: DiGit, name: 'Git' },
    { Icon: DiVisualstudio, name: 'VS Code' },
    { Icon: SiDocker, name: 'Docker' },
    { Icon: DiLinux, name: 'Linux (Ubuntu)' },
    { Icon: SiPostman, name: 'Postman' },
  ];

  return (
    <Section id={id} style={style} className={`mb-10 ${className}`}>
      <SectionHeader>About Me</SectionHeader>
      <div className="px-8 space-y-7 md:px-20 lg:px-60 xl:px-80">
        <SectionBody>{DESCRIPTION}</SectionBody>
        <SectionBody>{SKILLS_INTRO}</SectionBody>
        <div className="space-y-14 ">
          <div className="pt-4 space-y-3">
            <SubSectionHeader>Proficient in:</SubSectionHeader>
            <IconList icons={PROFICIENT} />
          </div>
          <div className="space-y-3">
            <SubSectionHeader>Dabbled with:</SubSectionHeader>
            <IconList icons={DABBLED} />
          </div>
          <div className="space-y-3">
            <SubSectionHeader>Tools I use:</SubSectionHeader>
            <IconList icons={TOOLS} />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
