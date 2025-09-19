import { useBreakpoint } from "../../../hooks/usebreakPoint";
import { CreateHomeDesktop } from "../../../presentation/pages/HomePage/CreateHomeDesktop";
import { CreateHomeLaptop } from "../../../presentation/pages/HomePage/CreateHomeLaptop";
import { CreateHomeMobile } from "../../../presentation/pages/HomePage/CreateHomeMobile";
import { CreateHomeTablet } from "../../../presentation/pages/HomePage/CreateHomeTablet";

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