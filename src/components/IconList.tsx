import { TechIconType } from 'constants/techIcons';
import React from 'react';
import HoverIcon from './HoverIcon';

export interface IconListProps {
  icons: TechIconType[];
}

const IconList: React.FC<IconListProps> = ({ icons }) => {
  return (
    <div className="flex flex-row flex-wrap">
      {icons.map((item) => (
        <HoverIcon Icon={item.Icon} name={item.name} color={item.color} key={item.name} />
      ))}
    </div>
  );
};

export default IconList;
