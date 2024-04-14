import React from 'react';

import { TechIconType } from '~/constants/techIcons';

import Hoverable from './Hoverable';

export type HoverIconProps = { className?: string } & TechIconType;

const HoverIcon: React.FC<HoverIconProps> = ({
  name,
  Icon,
  color,
  link,
  className = 'w-16 h-16',
}) => {
  return (
    <Hoverable hoverText={name} className="mb-2">
      <a href={link} target="_blank" rel="noreferrer">
        <Icon className={`px-2 ${className}`} color={color || 'white'} />
      </a>
    </Hoverable>
  );
};

export default HoverIcon;
