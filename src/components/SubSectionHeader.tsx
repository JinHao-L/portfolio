import React from 'react';

export interface SubSectionHeaderProps {
  className?: string;
  children: string;
}

const SubSectionHeader: React.FC<SubSectionHeaderProps> = ({
  children,
  className,
}) => {
  return <h2 className={`text-xl ${className || ''}`}>{children}</h2>;
};

export default SubSectionHeader;
