import SectionHeader from 'components/SectionHeader';
import React from 'react';
import Section, { SectionProps } from '../components/Section';

const Experiences: React.FC<SectionProps> = ({ id, style, className }) => {
  return (
    <Section id={id} style={style} className={className}>
      <SectionHeader>My Experiences</SectionHeader>
    </Section>
  );
};

export default Experiences;
