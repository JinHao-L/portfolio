import React from 'react';

import ProjectCard from '../components/ProjectCard';
import SectionHeader from '../components/SectionHeader';
import { PROJECTS } from '../constants/projData';
import Section, { SectionProps } from '../components/Section';

const Project: React.FC<SectionProps> = ({ id, style, className, nextId }) => {
  return (
    <Section id={id} style={style} className={`${className}`} nextId={nextId}>
      <SectionHeader>My Projects</SectionHeader>

      <div className="flex items-center justify-center mt-10 md:px-10 lg:px-40 2xl:px-80">
        <div className="grid grid-cols-1 divide-y divide-gray-500 md:grid-cols-1 divide-dashed">
          {PROJECTS.map((data) => (
            <ProjectCard key={data.id} data={data} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Project;
