import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import QuizStarterButton from "../QuizStarterButton/QuizStarterButton";

export const GreetingItemDesktopComponent: React.FC = () => {
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
    <div className="flex flex-col align-content: center; flex mt-[5vw]" >
      <div className=" flex align-content: center; ml-[30%] mt-[10vw] w-32 flex-1" ref={greetingRef}>
        <div className="text-black text-[3vw] font-bold font-mono">
          Hello ! Are you ready for the
          <span className="ml-[1vw] text-yellow bg-sky-600">
            QUIZ
          </span>
          !!!!!!!!!!!
        </div>
      </div>
      <div className="ml-[30%] mt-[5vw] w-32 flex-1">
        <QuizStarterButton  />
      </div>
    </div>
  );
};