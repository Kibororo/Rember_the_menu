import { useEffect, useState } from "react";

export type Breakpoint = "mobile" | "tablet" | "laptop" | "desktop";

export function useBreakpoint(): Breakpoint {
    const [width, setWidth] = useState<number>(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    if (width < 640) return "mobile";
    if (width < 1024) return "tablet";
    if (width < 1440) return "laptop";
    return "desktop";
}
