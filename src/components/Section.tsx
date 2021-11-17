import React from 'react';
import { Element } from 'react-scroll';
import Divider from './Divider';

export interface SectionProps {
  id: string;
  nextId?: string;
  style?: React.CSSProperties;
  className?: string;
  minHeight?: string;
}

const Section: React.FC<SectionProps> = ({
  id,
  style,
  children,
  className,
  nextId,
  minHeight = 'calc(100vh - 60px)',
}) => {
  return (
    <div
      id={id}
      className={`pt-4 px-8 m-0 flex flex-col  ${className || ''}`}
      style={{ minHeight: minHeight, ...style }}
    >
      <Element name={id}> </Element>
      <div className="items-start flex-grow">{children}</div>
      {nextId && <Divider scrollTarget={nextId} className={'relative bottom-5'} />}
    </div>
  );
};

export default Section;
