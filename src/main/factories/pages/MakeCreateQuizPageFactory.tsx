import { useBreakpoint, type Breakpoint } from "../../../hooks/usebreakPoint";
import { CreatQuizDesktopPage } from "../../../presentation/pages/QuizPage/CreatQuizDesktopPage";
import { CreatQuizPhonePage } from "../../../presentation/pages/QuizPage/CreatQuizPhonePage";


export const MakeCreateQuizPageFactory :React.FC =  (): React.ReactNode => {
    const bp : Breakpoint = useBreakpoint();

    if(bp === "mobile") {
        console.log(" for test : MOBILE ")
        return <CreatQuizPhonePage />;
    }

    console.log("for desktop");

    return <CreatQuizDesktopPage/>

};

export default MakeCreateQuizPageFactory;