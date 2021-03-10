import About from '../src/components/About';
import ColorIncluderTest from '../src/components/ColorIncluderTest';
import {
  CatContainer,
  DogContainer,
  HorseContainer,
} from '../src/components/Event';
import HeroSVG from '../src/components/svg/HeroSVG';
import Hero from '../src/components/Hero';
import React from 'react';
import { Collaboration } from '../src/components/Collaborations';
import { Location } from '../src/components/Location';
import SignupForm from '../src/components/SignupForm';
import Footer from '../src/components/Footer';
import DogEvent from '../src/components/eventCard/PlateTest';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <DogEvent />
      <CatContainer />
      <HorseContainer />
      <Collaboration />
      <Location />
      <SignupForm />
      <Footer />

      {/* <HeroSVG /> */}
    </main>
  );
}
