"use client";

import Image from "next/image";
import storyb from "../../../../assets/storyb.avif";
import storybNight from "../../../../assets/storyb-night.avif";
import { useContext } from "react";
import { ThemeContext } from "@/app/shared/providers/ThemeProvider";

const HomeImage = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className="mx-auto">
      {darkMode ? <DarkHomeImage /> : <LightHomeImage />}
    </div>
  );
};

const LightHomeImage = () => (
  <div>
    <Image src={storyb} alt="Story bridge" height={600} width={800} />
    <p className="text-sm italic text-center items-center justify-between mx-auto p-4">
      Brisbane&apos;s Story Bridge, Nov. 2019. Taken by me after a few brews at
      Felon&apos;s.
    </p>
  </div>
);

const DarkHomeImage = () => (
  <div>
    <Image src={storybNight} alt="Story bridge" height={600} width={800} />
    <p className="text-sm italic text-center items-center justify-between mx-auto p-4">
      Brisbane&apos;s Story Bridge, Dec. 2021. Believe it or not, taken by me
      after a few brews at Felon&apos;s.
    </p>
  </div>
);

export default HomeImage;
