import { useState } from "react";


interface QuestionnerProps {
    wordFr: string;
    word_korean: string;
    onResult: (score: number) => void;
}

const Questionner =({ wordFr, word_korean, onResult }: QuestionnerProps) => {
    const [input, setInput] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (input.trim() === word_korean.trim()) {
            onResult(1); // score de 1 pour une bonne réponse
        } else {
            onResult(0); // score de 0 pour une mauvaise réponse
        }
        setInput(""); // reset input après validation
    };


    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
            <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-lg">
                <h1 className="text-lg font-semibold text-gray-800 mb-4 text-center">
                    How do you say in Korean <span className="font-bold">{wordFr}</span> ?
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
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Questionner