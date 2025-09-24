import { useEffect, useState } from "react";
import Questionner from "../../components/Questionner/Questionner";
import HeaderPhone from "../../components/HeaderPhone/HeaderPhone";
import meals from "../../../file/meals.json";

export const CreatQuizPhonePage : React.FC = () : React.ReactNode => {
  let index = 0;
  const mealsList = meals.sort(() => Math.random() - 0.5);
  const [score, setScore] = useState(0);

  console.log(mealsList);

  const handleResult = (result: number) => {
    setScore((score) => score + result);
    console.log("Current score:", score + result);
  };

  useEffect(() => {
    localStorage.setItem("score", score.toString());
    localStorage.setItem("mealsList", JSON.stringify(mealsList));
    index++;
    if (index > mealsList.length - 1) {
      index = 0;
    }
    localStorage.setItem("index", index.toString());

  }, [score]);
  
  return (
      <>
        <HeaderPhone/>
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