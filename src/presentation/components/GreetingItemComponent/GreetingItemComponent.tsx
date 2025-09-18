import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import QuizStarterButton from "../QuizStarterButton/QuizStarterButton";

export const GreetingItemComponent: React.FC = () => {
  const greetingRef = useRef<HTMLDivElement>(null);
  const illustrationRef = useRef<HTMLDivElement>(null);
 

  useEffect(() => {

    if (!greetingRef.current || !illustrationRef.current) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      greetingRef.current,
      { x: -200, opacity: 0 },
      { x: 0, opacity: 1, duration: 2 }
    );

    tl.fromTo(
      illustrationRef.current,
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 2 },
      "-=0.7"
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="flex mt-0">
    
      <div className="ml-[5%] mt-[15vw] w-32 flex-1" ref={greetingRef}>

        <span className="text-[3vw] font-bold font-mono">Hello !</span>
        <div className="text-black text-[3vw] font-bold font-mono">
          Are you ready for the
          <span className="ml-[1vw] text-yellow bg-sky-600">QUIZ</span>
          !!!!!!!!!!!
        </div>
        <QuizStarterButton></QuizStarterButton>
      </div>
      <div className="
        w-32 
        flex-1
        bg-[url(/assets/bb2.jpg)] 
        bg-no-repeat
        h-screen
        w-full
        bg-cover
        bg-center
        mt-0
        "
        ref={illustrationRef}>
      </div>
    </div>
  );
};