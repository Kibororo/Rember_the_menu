import { useState } from "react";
import Header from "../../components/Header/Header";
import Questionner from "../../components/Questionner/Questionner";

export const CreateQuizPage : React.FC = () : React.ReactNode => {
    const wordFr :string = "Porc sauté au kimchi";
    const word_korean :string = "Doeji kimchi";

  const [score, setScore] = useState(0);

  const handleResult = (result: number) => {
    setScore((score) => score + result);
    console.log("Current score:", score + result);
  };
    return (
        <>
          <Header />
          <Questionner  
            wordFr={wordFr} 
            word_korean={word_korean}
            onResult={handleResult} 
          />
        </>
    );

}