import { ProjectData } from 'constants/projData';
import React from 'react';
import Hoverable from './Hoverable';
import IconList from './IconList';
import ImageGallery from './ImageGallery';
import SubSectionHeader from './SubSectionHeader';

type ProjectCardProps = {
  data: ProjectData;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ data }) => {
  return (
    <div className="z-10 grid w-full grid-cols-1 gap-3 py-5 xl:grid-cols-2 xl:grid-rows-1">
      <SubSectionHeader className="mb-3 text-center xl:hidden">{data.title}</SubSectionHeader>

      <ImageGallery
        images={data.images}
        className="w-full border-b-8 rounded-md border-pale-sky-300 "
      />

      <div className="px-3 py-2 text-md">
        <SubSectionHeader className="hidden mb-3 text-center xl:block">
          {data.title}
        </SubSectionHeader>
        <div className="grid grid-cols-1 gap-2">
          {data.description.map((text) => (
            <p className="font-normal text-justify">{text}</p>
          ))}
        </div>

        <div className="pt-4">
          {data.links?.map((link, j) => (
            <a
              key={j}
              {...(link.disabled
                ? {}
                : {
                    target: '_blank',
                    href: link.url,
                    rel: 'noreferrer',
                  })}
            >
              <Hoverable
                hoverText={link.disabledHint || ''}
                canHover={!!link.disabled}
                className="px-4 py-2 mx-1 my-1 font-normal text-white bg-transparent border border-white rounded hover:bg-titan-white-500 hover:text-gray-800 hover:border-transparent"
              >
                {link.title}
              </Hoverable>
            </a>
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
// transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110
