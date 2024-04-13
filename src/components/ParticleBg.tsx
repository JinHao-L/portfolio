import React, { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { type ISourceOptions } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';

interface ParticleBgProps {
  children: React.ReactNode;
}

const ParticleBg: React.FC<ParticleBgProps> = ({ children }) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo<ISourceOptions>(
    () => ({
      fpsLimit: 60,
      particles: {
        color: {
          value: '#ffffff',
        },
        number: {
          value: 160,
          density: {
            enable: true,
            width: 1920,
            height: 1080,
          },
        },
        move: {
          enable: true,
          speed: { max: 0.5, min: 0.1 },
        },
        size: {
          random: true,
          value: 1,
        },
        shape: {
          type: 'circle',
        },
        opacity: {
          value: {
            min: 0.05,
            max: 1,
          },
          animation: {
            enable: true,
            speed: 1,
          },
        },
      },
      detectRetina: true,
      zLayers: 1,
    }),
    [],
  );

  return (
    <div className="text-white bg-gray-900">
      {init ? (
        <Particles
          id="tsparticles"
          className="absolute top-0 left-0 w-full h-full -z-10"
          // style={{ zIndex: -1, position: 'fixed', width: '100%' }}
          options={options}
        />
      ) : null}
      <div style={{ zIndex: 1 }} className={'relative'}>
        {children}
      </div>
    </div>
  );
};

export default ParticleBg;
