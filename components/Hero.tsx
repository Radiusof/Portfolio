import React from 'react';
import { Spotlight } from './ui/spotlight';
import { TextGenerateEffect } from './ui/text-generate-effect';
import MagicButton from './ui/magic-button';
import { IoGitNetwork } from 'react-icons/io5';

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div>
        <div className="h-screen w-full dark:bg-black-100 bg-white  flex items-center justify-center absolute top-0 left-0 ">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>
        <div className="flex justify-center relative my-20 z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center ">
            <h2 className="uppercase tracking-widest text-xs text-center text-blue-200 max-w-80">
              Design. Develop. Deliver
            </h2>
            <TextGenerateEffect
              className="text-center text-[40px] md:text-5xl lg:text-6xl"
              words="Kevin Delattre
               - FullStack Developper"
            />
            <p className="uppercase md:tracking-wider text-sm md:text-lg lg:text-2xl text-center text-blue-200 max-w-80 mb-8">
              Bringing Ideas to Life from Lille, France
            </p>
            <a href="#about">
              <MagicButton
                title=" Show my work"
                icon={<IoGitNetwork />}
                position="right"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
