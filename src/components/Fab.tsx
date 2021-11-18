import React from 'react';
import { MdKeyboardArrowUp } from 'react-icons/md';

interface FabProps {
  color?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

const Fab: React.FC<FabProps> = ({ color = 'red', onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`${className} fixed bottom-6 items-center flex justify-center right-6 p-0 w-12 h-12 md:bottom-10 bg-${color}-500 rounded-full z-50 hover:bg-${color}-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none`}
    >
      <MdKeyboardArrowUp size={30} />
    </button>
  );
};

export default Fab;
