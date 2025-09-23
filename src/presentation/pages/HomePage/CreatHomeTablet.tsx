import { useEffect, useRef } from "react";
import { GreetingItemComponent } from "../../components/GreetingItemComponent/GreetingItemPhoneComponent";
import Header from "../../components/Header/Header";
import { gsap } from "gsap";

export const CreateHomeTablet: React.FC = (): React.ReactNode => {
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
  return (
    <>
      <Header></Header>
      <h1
        ref={pageTitle}
        className="
                    absolute 
                    text-[7vw] 
                    font-bold 
                    font-mono
                    ml-[25vw]
                    mt-10"

      >Home</h1>
      <GreetingItemComponent></GreetingItemComponent>
    </>
  );
}