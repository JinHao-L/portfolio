import React from 'react';

import { TechIconType } from '~/constants/techIcons';

import HoverIcon from './HoverIcon';

export interface IconListProps {
  icons: TechIconType[];
  iconClassName?: string;
}

const IconList: React.FC<IconListProps> = ({ icons, iconClassName }) => {
  return (
    <div className="flex flex-row flex-wrap">
      {icons.map((item, id) => (
        <HoverIcon key={`${item.name}-${id}`} className={iconClassName} {...item} />
      ))}
    </div>
  );
};

export default IconList;
