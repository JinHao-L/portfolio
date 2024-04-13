import React from 'react';

export interface SectionBodyProps {
  className?: string;
  children: string;
}

const SectionBody: React.FC<SectionBodyProps> = ({ children, className }) => {
  return (
    <div className={`text-lg text-justify ${className || ''}`}>{children}</div>
  );
};

export default SectionBody;
