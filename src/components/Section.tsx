import React from 'react';
import { Element } from 'react-scroll';

export interface SectionProps {
  id: string;
  style?: React.CSSProperties;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, style, children, className }) => {
  return (
    <div 
      id={id}
      className={`py-4 px-8 m-0 ${className}`}
      style={{ minHeight: 'calc(100vh - 60px)', ...style }}
    >
      <Element name={id}> </Element>
      {children}
    </div>
  );
};

export default Section;
