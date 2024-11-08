"use client";

import { useState } from "react";
import Video from "./video";

interface HeaderProps {
  onClick: () => void;
}

export default function Header({ onClick }: HeaderProps) {
  return (
    <div className="flex flex-col items-center justify-center relative mt-[50px]  w-full h-[80vh]">
      <div className="overlayDark absolute"></div>
      <div className="absolute video-bg w-[100vw]">
        <Video
          src="/terraPin.mp4"
          type="video/mp4"
          width="100%"
          height="100%"
          controls={false}
          autoPlay={true}
          loop={true}
          muted={true} // Ensure the video is muted for autoplay to work
          className="relative h-[80vh]"
        />
      </div>

      <div className="flex flex-col items-center  text-center justify-center relative z-50">
        <div className="max-w-[950px] m-auto">
          <h1 className="text-white text-[28px] md:text-[65px] font-bold z-50">
          Take Control
          Of Your Future
          </h1>
          <p className="text-white text-[16px] md:text-[18px]">
          At 22 years old, I've been traveling outside the U.S., sustaining my lifestyle by leveraging digital products and other online income streams. Now, I'm here to teach you how to do the same. My goal is to help you reclaim your time through the power of passive income.


          </p>

          <button
            className="mt-[20px] bg-transparent border border-white text-white px-4 py-2 rounded-md hover:bg-black hover:text-white transition-colors hover:border-transparent"
            onClick={onClick}
          >
            Get Premium Access
          </button>
        </div>
      </div>
    </div>
  );
}
