import React from 'react';

export interface SectionHeaderProps {}

const SectionHeader: React.FC<SectionHeaderProps> = ({ children }) => {
  return <h1 className="my-6 text-2xl text-center">{children}</h1>;
};

export default SectionHeader;
