import React from "react";
import { useBreakpoint } from "../../../hooks/usebreakPoint";
import HeaderPhone from "../../../presentation/components/HeaderPhone/HeaderPhone";

export const MakeCreateHeaderFactory :React.FC =  (): React.ReactNode => {
    const bp = useBreakpoint();
    if (bp === "mobile") {

        console.log(" for test : MOBILE ")
        return <HeaderPhone />;

    }

    return <header />
}