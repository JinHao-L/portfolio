import React from 'react';
import Particles from 'react-tsparticles';

interface ParticleBgProps {
  className?: string;
}

const ParticleBg: React.FC<ParticleBgProps> = ({ children, className }) => {
  return (
    <div className="text-white bg-gray-900">
      <Particles
        className={`fixed ${className}`}
        params={{
          fpsLimit: 60,
          particles: {
            color: {
              value: '#ffffff',
            },
            number: {
              value: 120,
              density: {
                enable: true,
                value_area: 500,
              },
            },
            move: {
              direction: 'right',
              speed: 1,
            },
            size: {
              random: true,
              value: 1,
            },
            shape: {
              type: 'circle',
            },
            opacity: {
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.05,
              },
            },
          },
          interactivity: {
            events: {
              onclick: {
                enable: true,
                mode: 'push',
              },
            },
            modes: {
              push: {
                quantity: 1,
              },
            },
          },
          detectRetina: true,
          zLayers: 1,
        }}
        style={{ zIndex: -1, position: 'fixed', width: '100%' }}
      />
      <div style={{ zIndex: 1 }} className={'relative'}>
        {children}
      </div>
    </div>
  );
};

export default ParticleBg;
