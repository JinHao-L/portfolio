import ProjectCard from 'components/ProjectCard';
import SectionHeader from 'components/SectionHeader';
import React from 'react';
import Section, { SectionProps } from '../components/Section';

const Project: React.FC<SectionProps> = ({ id, style, className, nextId }) => {
  return (
    <Section id={id} style={style} className={`${className}`} nextId={nextId}>
      <SectionHeader>My Projects</SectionHeader>

      <div className="flex items-center justify-center mt-10">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </Section>
  );
};

export default Project;
