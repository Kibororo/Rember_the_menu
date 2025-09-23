import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import HeaderPhone from "../../components/HeaderPhone/HeaderPhone";
import { GreetingItemPhoneComponent } from "../../components/GreetingItemComponent/GreetingItemPhoneComponent";

export const CreateHomeMobile: React.FC = () :React.ReactNode => {
     const pageTitle = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!pageTitle.current) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      pageTitle.current,
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 2 }
    );

    return () => {
      tl.kill();
    };
  }, []); 
    return(
        <>
          <div className="relative h-[100vh] w-[100vw] bg-[#f5f5f5]">
            <HeaderPhone></HeaderPhone>
            <GreetingItemPhoneComponent></GreetingItemPhoneComponent>
          </div>
        </>
    );
}