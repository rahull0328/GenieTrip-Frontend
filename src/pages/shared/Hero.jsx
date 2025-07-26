import { Button } from "@/components/ui/button";
import React from "react";

function Hero() {
  return (
    <div className="flex flex-col items-center mx-56 gap-9">
      <h1 className="font-extrabold text-[60px] text-center mt-30">
        Discover Your Next Adventure with&nbsp;
        <span className="text-[#f56551]">"AI"&nbsp;</span>
        Personalized Itineraries at Your Fingertips
      </h1>
      <p className="text-xl text-gray-500 text-center">
        Your personal trip planner and travel curator, creating custom
        itineraries tailored to your interests and budget
      </p>
      <Button>Get Started !</Button>
    </div>
  );
}

export default Hero;
