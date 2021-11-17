import React from 'react';
import { MdArrowDownward } from 'react-icons/md';
import { Link } from 'react-scroll';

interface DividerProps {
  scrollTarget: string;
  className?: string;
}

const Divider: React.FC<DividerProps> = ({ scrollTarget, className }) => {
  return (
    <Link
      activeClass="active"
      to={scrollTarget}
      spy={false}
      smooth={true}
      offset={-80}
      duration={300}
      role="button"
      className={`mt-8 justify-center flex ${className || ''} z-0`}
    >
      <div className="w-6 h-6 border-b-2 border-dashed">
        <MdArrowDownward className="w-6 h-6 animate-bounce" />
      </div>
    </Link>
  );
};

export default Divider;
