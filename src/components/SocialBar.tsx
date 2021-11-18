import React from 'react';
import SOCIALS from 'constants/socials';

interface SocialBarProps {
  className?: string;
  size?: number;
}

const SocialBar: React.FC<SocialBarProps> = ({ className, size = 20 }) => {
  return (
    <div className={`${className} flex flex-row`}>
      {SOCIALS.map(({ type, Icon, link }) => (
        <a
          href={link}
          className="p-1 mx-1 bg-gray-100 rounded-full"
          target="_blank"
          rel="noreferrer"
          key={type}
        >
          <Icon
            size={size}
            className="text-gray-800 bg-gray-100 cursor-pointer fill-current hover:text-gray-400"
          />
        </a>
      ))}
    </div>
  );
};

export default SocialBar;
