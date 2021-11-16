import SectionHeader from 'components/SectionHeader';
import React from 'react';
import Section, { SectionProps } from '../components/Section';

const Contact: React.FC<SectionProps> = ({ id, style, className }) => {
  return (
    <Section id={id} style={style} className={className}>
      <SectionHeader>Contact Me</SectionHeader>
      <h1>You can reach me at _______</h1>
    </Section>
  );
};

export default Contact;
