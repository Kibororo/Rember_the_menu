import { useBreakpoint } from "../../../hooks/usebreakPoint";
import { CreateHomeDesktop } from "../../../presentation/pages/HomePage/CreatHomeDesktop";
import { CreateHomeLaptop } from "../../../presentation/pages/HomePage/CreatHomeLaptop";
import { CreateHomeMobile } from "../../../presentation/pages/HomePage/CreatHomeMobile";
import { CreateHomeTablet } from "../../../presentation/pages/HomePage/CreatHomeTablet";

export const makeCreateHomePageFactory :React.FC =  (): React.ReactNode => {
    const bp = useBreakpoint();

    if (bp === "mobile") {

        console.log(" for test : MOBILE ")
        return <CreateHomeMobile />;

    }

    if (bp === "tablet") {

        console.log(" for test : TABLETTE ")
        return <CreateHomeTablet />;

    }


    if (bp === "laptop") {

        console.log(" for test : LAPTOP ")
        return <CreateHomeLaptop />; 
    }


    console.log(" for test : DESKTOP ")
    return <CreateHomeDesktop />; // desktop par défaut
};