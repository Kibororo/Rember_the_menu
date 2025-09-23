import { useState } from "react";
import Header from "../../components/Header/Header";
import Questionner from "../../components/Questionner/Questionner";
import meals from "../../../file/meals.json";

export const CreatQuizDesktopPage: React.FC = (): React.ReactNode => {
    let index = 0;
    const mealsList = meals.sort(() => Math.random() - 0.5);

    console.log(mealsList);

    const [score, setScore] = useState(0);

    const handleResult = (result: number) => {
        setScore((score) => score + result);
        console.log("Current score:", score + result);
    };
    return (
      <>
        <Header/>
        <h1>{score}</h1>
        <Questionner  
          frenchName={mealsList[index].frenchName} 
          koreanPronounciation={mealsList[index].koreanPronounciation}
          koreanName={mealsList[index].koreanName}
          onResult={handleResult} 
        />
      </>
    );

}