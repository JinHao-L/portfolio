import React, { createRef } from 'react';
import { createPopper } from '@popperjs/core';

export type HoverIconProps = {
  hoverText: string;
  className?: string;
  canHover?: boolean;
};

const Hoverable: React.FC<HoverIconProps> = ({
  hoverText,
  className,
  children,
  canHover = true,
}) => {
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
            padding: 3,
          },
        },
      ],
    });
    setTooltipShow(true);
  };
  const closeTooltip = () => {
    setTooltipShow(false);
  };

  return (
    <>
      <button
        onMouseEnter={canHover ? openTooltip : undefined}
        onMouseLeave={canHover ? closeTooltip : undefined}
        ref={btnRef}
        className={className}
      >
        {children}
      </button>

      {canHover && (
        <div
          className={
            (tooltipShow ? '' : 'hidden ') +
            'mt-5 border-0 block z-50 font-normal leading-normal text-sm max-w-xs break-words bg-gray-900'
          }
          ref={tooltipRef}
        >
          <div className={'text-white opacity-75 font-semibold border-b border-solid uppercase rounded-t-md'}>
            {hoverText}
          </div>
        </div>
      )}
    </>
  );
};

export default Hoverable;
