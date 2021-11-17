import React from 'react';
import { SiGithub, SiLinkedin, SiInstagram, SiGmail } from 'react-icons/si';

const Footer: React.FC = () => {
  const SOCIALS = [
    { type: 'github', Icon: SiGithub, link: 'https://github.com/JinHao-L' },
    {
      type: 'linkedin',
      Icon: SiLinkedin,
      link: 'https://www.linkedin.com/in/jin-hao-l',
    },
    {
      type: 'instagram',
      Icon: SiInstagram,
      link: 'https://www.instagram.com/jin_haooo',
    },
    {
      type: 'mail',
      Icon: SiGmail,
      link: 'mailto:limjinhao@gmail.com',
    },
  ];

  return (
    <div className="bg-gray-100 ">
      <div className="flex flex-col-reverse items-center max-w-6xl gap-1 px-3 pt-4 pb-4 m-auto text-sm text-gray-800 border-t md:flex-row">
        <div className="">© Copyright {new Date().getFullYear()}</div>
        <div className="flex flex-row md:flex-auto md:flex-row-reverse">
          {SOCIALS.map(({ type, Icon, link }) => (
            <a href={link} className="p-1 mx-1 bg-gray-100 rounded-full" target="_blank" rel="noreferrer" key={type}>
              <Icon
                size={20}
                className="text-gray-800 bg-gray-100 cursor-pointer fill-current hover:text-gray-400"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
