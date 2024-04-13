import React from 'react';

export interface SectionHeaderProps {
  children: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ children }) => {
  return <h1 className="my-6 text-3xl text-center">{children}</h1>;
};

export default SectionHeader;
