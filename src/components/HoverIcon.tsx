import React from 'react';
import { TechIconType } from 'constants/techIcons';
import Hoverable from './Hoverable';

export type HoverIconProps = {} & TechIconType;

const HoverIcon: React.FC<HoverIconProps> = ({ name, Icon, color }) => {
  return (
    <Hoverable hoverText={name} className='mb-2'>
      <Icon className="w-16 h-16 px-2" color={color || 'white'} />
    </Hoverable>
  );
};

export default HoverIcon;
