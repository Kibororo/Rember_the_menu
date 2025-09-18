import { useState } from "react";
import SlidingLetter from "../SlidingLetter/SlidingLetter"
import { useNavigate } from "react-router-dom";

function Header() {

    const [isFullscreen, setIsFullscreen] = useState(false);
    const navigate =  useNavigate();

    function handleClick() {
        setIsFullscreen(!isFullscreen);
    }

    function redirectoTo(path : string) :void {
        navigate(path)
    }



    return (
        <header 
            onClick={handleClick}
            className={`
                hover:scale-110
                
                bg-black
                transition-all
                duration-500
                origin-top-left
                flex
                items-center
                justify-center
                gap-[0.2vw]
                overflow-hidden
                ${isFullscreen ? "fixed top-0 left-0 w-screen h-screen z-50 mt-0" : " absolute w-[12vw] h-[12vw] mt-4"}
                `}
        >
        <div 
            className="
                absolute 
                mt-[4vw] 
                ml-[2vw] 
                top-0 
                left-0 
                flex 
                gap-[0.2vw]
                group
            "
        >
            <SlidingLetter letter="M" />
            <SlidingLetter letter="E" />
            <SlidingLetter letter="N" />
            <SlidingLetter letter="U" />
        </div>
            {isFullscreen && (
                <nav className="absolute flex items-center justify-center gap-4 p-2">
                    <p onClick={() => redirectoTo("/")}className="group text-white">
                        Accueil
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
                    </p>
                    <p onClick={() => redirectoTo("/Quiz")} className="group text-white">
                        Quiz
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
                    </p>
                </nav>
            )}
        </header>
    );
}


export default Header
