import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const HeaderPhone: React.FC = () => {

    const [isFullscreen, setIsFullscreen] = useState(false);
    const navigate = useNavigate();

    function handleClick() {
        setIsFullscreen(!isFullscreen);
    }

    function redirectoTo(path: string): void {
        navigate(path)
    }



    return (
        <header
            onClick={handleClick}
            className={`
                bg-black
                transition-all
                duration-500
                origin-top-left
                flex
                items-center
                justify-center
                gap-[0.2vw]
                overflow-hidden
                ${isFullscreen ? "fixed top-0 left-0 w-full h-screen z-50 mt-0" : " absolute w-100 h-[12vw]"}
                `}
        >
            <div
                className="
                absolute 
                mt-[4vw] 
                ml-[30vw] 
                top-0 
                left-0 
                flex
                items-center
                justify-center
                gap-[0.2vw]
                group
            "
            >
                <h1 className="font-bold text-white" >
                    MENU
                </h1>
            </div>
            {isFullscreen && (
                <nav className="absolute flex items-center justify-center gap-4 p-2">
                    <p onClick={() => redirectoTo("/")} className="group text-white">
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


export default HeaderPhone