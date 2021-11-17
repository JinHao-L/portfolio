import React, { createRef } from 'react';
import { IconType } from 'react-icons';
import { createPopper } from '@popperjs/core';

export interface HoverIconProps {
  name: string;
  Icon: IconType;
  color?: string;
}

const HoverIcon: React.FC<HoverIconProps> = ({ name, Icon, color }) => {
  const [tooltipShow, setTooltipShow] = React.useState(false);
  const btnRef = createRef<HTMLButtonElement>();
  const tooltipRef = createRef<HTMLDivElement>();
  const openTooltip = () => {
    createPopper(btnRef.current as HTMLButtonElement, tooltipRef.current as HTMLDivElement, {
      placement: 'bottom',
      modifiers: [
        {
          name: 'preventOverflow',
          options: {
            padding: 3 
          }
        }
      ]
      
    });
    setTooltipShow(true);
  };
  const closeTooltip = () => {
    setTooltipShow(false);
  };

  return (
    <>
      <button
        key={name}
        onMouseEnter={openTooltip}
        onMouseLeave={closeTooltip}
        ref={btnRef}
      >
        <Icon className="w-16 h-16 px-2 mb-2" color={color || 'white'}/>
      </button>

      <div
        className={
          (tooltipShow ? '' : 'hidden ') +
          'bg-gray-600 border-0 block z-50 font-normal leading-normal text-sm max-w-xs text-left no-underline break-words rounded-t-lg'
        }
        ref={tooltipRef}
      >
        <div>
          <div
            className={
              'text-white opacity-75 font-semibold p-3 mb-0 border-b border-solid uppercase rounded-t-lg '
            }
          >
            {name}
          </div>
        </div>
      </div>
    </>
  );
};

export default HoverIcon;
