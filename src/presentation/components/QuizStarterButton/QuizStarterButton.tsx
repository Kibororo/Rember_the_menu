
import { useNavigate } from "react-router-dom";

const QuizStarterButton = () => {
    const navigate =  useNavigate();

    function redirectoTo(path : string) :void {
        navigate(path)
    }

    return (

            <button
                
                className="mt-[5vw] bg-blue-500 hover:bg-blue-700 text-white text-[3.5vw] font-bold py-[0.5vw] px-[5vw] rounded-full whitespace-nowrap"
                onClick={() => redirectoTo("/quiz")}
            >
                Start Quiz
            </button>

    );
};
export default QuizStarterButton