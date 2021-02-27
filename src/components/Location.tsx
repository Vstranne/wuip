import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import React from 'react';
import useIsomorphicLayoutEffect from '../hooks/UseIsomorphicLayoutEffect';
import LocationSVG from './svg/LocationSVG';

gsap.registerPlugin(ScrollTrigger);

const pinAnimation = (part: string) => {
  const anim = gsap.from(`${part}`, {
    scrollTrigger: {
      trigger: `${part}`,
      start: 'top center',
    },
    opacity: 0,
    y: -400,
    duration: 0.8,
  });
  return anim;
};

const FindUsAnimation = () => {
  const tl = gsap.timeline();

  const makeVisible = gsap.from('.findUs', {
    scrollTrigger: {
      trigger: `.pin`,
      start: 'top center',
    },
    delay: 1,
    opacity: 0,
    duration: 0.6,
  });

  const shakeTl = gsap
    .timeline({ repeat: 2 })
    .to('.findUs', {
      rotate: 15,
      x: 5,
      scale: 1.05,
      duration: 0.1,
    })
    .to('.findUs', {
      rotate: -15,
      x: 0,
      duration: 0.1,
    });
  tl.add(makeVisible);
  tl.add(shakeTl);
  return tl;
};

export const Location = () => {
  useIsomorphicLayoutEffect(() => {
    pinAnimation('.pin');
    pinAnimation('.pinShadow');
  }, []);

  return (
    <section
      style={{ background: "url('/green_plate.svg')" }}
      className="text-moss -mt-9 py-12 px-6 text-center flex flex-col h-full relative"
    >
      <div>
        <h3>Hitta hit!</h3>
        <p className="text-sm mb-7">
          Alla aktiviteter som sker under dagen kommer äga rum runt Stora
          Delsjön i Göteborg. Vi utgår från Delsjöbadet, där Folksam kommer att
          finnas på plats med info.
        </p>
      </div>

      {/* <div
        style={{
          clipPath:
            'polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 15% 50%, 0% 0%)',
        }}
        className="bg-red-600 w-32 h-9 text-white text-xl flex items-center justify-center absolute top-72 left-10 findUs"
      >
        <p>Hitta hit</p>
      </div> */}

      <div className="flex flex-col">
        <div className="w-80 flex items-center justify-center">
          <LocationSVG />
        </div>
        <p className="textLocation mt-4 font-bold text-center">Delsjöbadet</p>
        <p className="font-bold text-center">416 55 Göteborg</p>
      </div>
    </section>
  );
};
