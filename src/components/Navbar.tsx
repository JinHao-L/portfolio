import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Transition } from '@headlessui/react';

interface NavItemProps {
  to: string;
  callback?: () => any;
}

const SCROLL_OFFSET = -80;

const NavItem: React.FC<NavItemProps> = ({ to, children, callback }) => {
  const DURATION = 300;
  return (
    <Link
      activeClass="active"
      to={to}
      spy={false}
      smooth={true}
      offset={SCROLL_OFFSET}
      duration={DURATION}
      onClick={() => callback && setTimeout(callback, DURATION)}
    >
      <div
        role="button"
        className="px-3 py-2 text-black rounded-md font-small text-md hover:bg-gray-700 hover:text-white"
      >
        {children}
      </div>
    </Link>
  );
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 w-full bg-gray-100 shadow-md">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="py-2 text-gray-800 font-small text-md md:hidden" role="button">
              <Link
                activeClass="active"
                to={'intro-section'}
                spy={true}
                smooth={true}
                offset={SCROLL_OFFSET}
                duration={500}
              >
                Jin Hao
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="flex items-baseline ml-10 space-x-4">
                <NavItem to={'intro-section'}>Home</NavItem>
                <NavItem to={'about-section'}>About</NavItem>
                <NavItem to={'experiences-section'}>Experiences</NavItem>
                <NavItem to={'projects-section'}>Projects</NavItem>
                <NavItem to={'contact-section'}>Contact Me</NavItem>
              </div>
            </div>
          </div>
          <div className="flex -mr-2 md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-800 hover:text-titan-white-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-titan-white-200"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={!isOpen ? 'M4 6h16M4 12h16M4 18h16' : 'M6 18L18 6M6 6l12 12'}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="bg-gray-200 md:hidden" id="mobile-menu">
            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <NavItem to={'intro-section'} callback={() => setIsOpen(false)}>
                Home
              </NavItem>
              <NavItem to={'about-section'} callback={() => setIsOpen(false)}>
                About
              </NavItem>
              <NavItem to={'experiences-section'} callback={() => setIsOpen(false)}>
                Experiences
              </NavItem>
              <NavItem to={'projects-section'} callback={() => setIsOpen(false)}>
                Projects
              </NavItem>
              <NavItem to={'contact-section'} callback={() => setIsOpen(false)}>
                Contact Me
              </NavItem>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
};

export default Navbar;
