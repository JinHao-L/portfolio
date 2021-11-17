import React from 'react';

const ProjectCard: React.FC = () => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-center h-56 overflow-hidden bg-white border-b-8 border-teal-400 rounded-md">
        <img
          className="object-cover h-8"
          src="https://premium-tailwindcomponents.netlify.app/assets/svg/tailwindcomponent-dark.svg"
          alt=""
        />
      </div>

      <a
        href="#"
        className="block mt-5 overflow-hidden transition duration-500 ease-in-out transform bg-gray-700 rounded-md hover:-translate-y-1 hover:scale-110"
      >
        <div className="px-3 py-2 text-sm text-center">
          <p className="text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

          <span className="block mt-2 text-gray-500">tailwindcomponents.com</span>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
