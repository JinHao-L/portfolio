import React from 'react';

import { ProjectData } from '~/constants/projData';

import IconList from './IconList';
import ImageGallery from './ImageGallery';
import SubSectionHeader from './SubSectionHeader';
import LinkButton from './LinkButton';

type ProjectCardProps = {
  data: ProjectData;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ data }) => {
  return (
    <div className="z-10 grid w-full grid-cols-1 gap-3 py-5 xl:grid-cols-2 xl:grid-rows-1">
      <SubSectionHeader className="mb-3 text-center xl:hidden">{data.title}</SubSectionHeader>

      <ImageGallery images={data.images} className="border-b-8 rounded-md border-pale-sky-300 " />

      <div className="px-3 py-2 text-md">
        <SubSectionHeader className="hidden mb-3 text-center xl:block">
          {data.title}
        </SubSectionHeader>
        <div className="grid grid-cols-1 gap-2">
          {data.description.map((text, key) => (
            <p className="font-normal text-justify" key={`${data.title}-${key}`}>
              {text}
            </p>
          ))}
        </div>

        <div className="pt-4">
          {data.links?.map((link, j) => (
            <LinkButton
              key={`proj-${j}`}
              url={link.url}
              disabled={link.disabled}
              disabledHint={link.disabledHint}
            >
              {link.title}
            </LinkButton>
          ))}
        </div>
        <div className="pt-4 space-y-3">
          <IconList icons={data.stack} />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
