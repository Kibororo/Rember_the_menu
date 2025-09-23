import { useEffect, useRef } from "react";
import Header from "../../components/Header/Header";
import { gsap } from "gsap";
import { GreetingItemDesktopComponent } from "../../components/GreetingItemComponent/GreetingItemDesktopComponent";

export const CreateHomeDesktop: React.FC = () :React.ReactNode => {
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
            <Header></Header>
            <GreetingItemDesktopComponent></GreetingItemDesktopComponent>
          </div>
        </>
    );
}

export default CreateHomeDesktop;