import SectionHeader from 'components/SectionHeader';
import React from 'react';
import Section, { SectionProps } from '../components/Section';

const Project: React.FC<SectionProps> = ({ id, style, className }) => {
  return (
    <Section id={id} style={style} className={className}>
      <SectionHeader>My Projects</SectionHeader>
    </Section>
  );
};

export default Project;
