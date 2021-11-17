import IconList from 'components/IconList';
import SectionBody from 'components/SectionBody';
import SectionHeader from 'components/SectionHeader';
import SubSectionHeader from 'components/SubSectionHeader';
import React from 'react';
import Section, { SectionProps } from '../components/Section';
import {
  AWS_ICON,
  DOCKER_ICON,
  EXPRESS_ICON,
  FIGMA_ICON,
  FIREBASE_ICON,
  GIT_ICON,
  GRADLE_ICON,
  IONIC_ICON,
  JAVASCRIPT_ICON,
  JAVA_ICON,
  JUPYTER_ICON,
  K8S_ICON,
  KAFKA_ICON,
  LINUX_ICON,
  MONGO_ICON,
  NEST_ICON,
  NODE_ICON,
  POSTGRES_ICON,
  POSTMAN_ICON,
  PYTHON_ICON,
  REACT_ICON,
  TYPESCRIPT_ICON,
  VIM_ICON,
  VSCODE_ICON,
  WEBPACK_ICON,
} from 'components/TechIcons';
import GithubGraph from 'components/GithubGraph';

const About: React.FC<SectionProps> = ({ id, style, className, nextId }) => {
  const DESCRIPTION =
    'I am a penultimate Computing undergraduate at the National University of Singapore. ' +
    'I am currently specialising in Software Engineering and Computer Security. ' +
    'I believe that both are them are important to create inclusive, secure technologies that will be used by the masses.';

  const SKILLS_INTRO =
    'I have dabbled with both frontend and backend, with a greater proficiency in frontend. ' +
    'Throughout my studies, I have also experienced and tried out various fields of software development, ranging from Cryptocurrency, Chrome Extension, Mobile App development to Web development. ' +
    'The list below are some of the skillsets that I have gained through projects that I have done in my academic, internship or in my own free time.';

  const PROFICIENT = [
    TYPESCRIPT_ICON,
    JAVASCRIPT_ICON,
    REACT_ICON,
    PYTHON_ICON,
    NEST_ICON,
    POSTGRES_ICON,
    NODE_ICON,
  ];

  const DABBLED = [
    JAVA_ICON,
    GRADLE_ICON,
    EXPRESS_ICON,
    KAFKA_ICON,
    K8S_ICON,
    AWS_ICON,
    MONGO_ICON,
    IONIC_ICON,
    WEBPACK_ICON,
  ];

  const TOOLS = [
    VIM_ICON,
    GIT_ICON,
    VSCODE_ICON,
    DOCKER_ICON,
    LINUX_ICON,
    POSTMAN_ICON,
    FIREBASE_ICON,
    JUPYTER_ICON,
    FIGMA_ICON,
  ];


  return (
    <Section id={id} style={style} className={`mb-10 ${className}`} nextId={nextId}>
      <SectionHeader>About Me</SectionHeader>
      <div className="px-8 space-y-7 md:px-10 lg:px-40 xl:px-60 2xl:px-80">
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
          <GithubGraph/>
        </div>
      </div>
    </Section>
  );
};

export default About;
