import { useState } from "react";
import Modal_bad_answer from "../modal_wrong_answer/modal_bad_answer";
import Modal_good_answer from "../modal_good_answer/modal_good_answer";


interface QuestionnerProps {
    frenchName: string;
    koreanPronounciation: string;
    koreanName: string;
    onResult: (score: number) => void;
}

const Questionner =({ frenchName, koreanPronounciation, koreanName, onResult }: QuestionnerProps) => {
    const [input, setInput] = useState("");
    const [openWrongAnswerModal, setOpenWrongAnswerModal] = useState(false);
    const [openGoodAnswerModal, setOpenGoodAnswerModal] = useState(false);

    console.log(frenchName, koreanPronounciation, koreanName);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (input.trim() === koreanPronounciation.trim()) {
            setOpenGoodAnswerModal(true); // Corrected from setOpen to open the modal
            console.log("Correct answer");
            onResult(1);
        } else {
            setOpenWrongAnswerModal(true); // Corrected from setOpen to open the modal
            console.log("Wrong answer");
            onResult(0);
        }
        setInput("");
    };


    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
            <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-lg">
                <h1 className="text-lg font-semibold text-gray-800 mb-4 text-center">
                    How do you say in Korean <span className="font-bold">{frenchName}</span> ?
                </h1>
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="w-full rounded-xl border border-gray-300 p-3 text-center focus:border-blue-500 focus:ring focus:ring-blue-200"
                        placeholder="Your answer..."
                    />
                    <button
                        type="submit"
                        className="w-full rounded-xl bg-blue-500 py-3 text-white font-medium shadow-md hover:bg-blue-600 active:bg-blue-700 transition"
                    >
                        answer
                    </button>
                </form>
            </div>
            <Modal_good_answer isOpen={openGoodAnswerModal} onClose={() => setOpenGoodAnswerModal(false)}>
                <h2 className="text-xl font-bold">Hello 👋</h2>

                <p>Ceci est le contenu de ma modal.</p>
            </Modal_good_answer>
            <Modal_bad_answer isOpen={openWrongAnswerModal} onClose={() => setOpenWrongAnswerModal(false)}>
                <h2 className="text-xl font-bold">Hello 👋</h2>
                <img  className="h-48 w-96 object-contain " src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjc1eWl2NjYyeWQ4bm84bzVzODhvdWdqbHhlbHlpOW0wYmc1enExcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IzcpVtzIUptDye8OHK/giphy.gif" alt="Wrong answer" />
                <p className="text-red-500 font-bold text-[5vw]">
                    Wrong answer !
                </p>
                <p className="flex flex-col text-[3vw]">
                    The correct answer is: 
                    <span className="font-bold">
                        {koreanPronounciation}
                    </span> 
                    in Korean :: 
                    <span className="font-bold">
                        {koreanName}
                    </span>
                </p>
            </Modal_bad_answer>
        </div>
    );
};

export default Questionner