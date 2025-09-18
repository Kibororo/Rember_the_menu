
import { useNavigate } from "react-router-dom";

const QuizStarterButton = () => {
    const navigate =  useNavigate();

    function redirectoTo(path : string) :void {
        navigate(path)
    }

    return (
            <a
            >
            <button
                className="ml-[15vw] mt-[5vw] bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full"
                onClick={() => redirectoTo("/quiz")}
            >
                Start Quiz
            </button>
        </a>

    );
};
export default QuizStarterButton