import { useEffect } from "react";
import { useAppState } from "./context/app";
import { useRouter } from "next/router";

export default function Auth({ children }: { children: any }) {
    const { setWindow } = useAppState();

    useEffect(() => {
        if (window && typeof window !== "undefined") {
            setWindow({ height: window.innerHeight, width: window.innerWidth });
        }
    }, []);

    return children;
}
