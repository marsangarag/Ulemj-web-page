import { useAppState } from "lib/context/app";
import Footer from "./footer";
import Header from "./header";
import Opacity from "./opacity";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { colorCodes } from "lib/helper";
import { Color } from "lib/types/color.type";

export default function Page({ children }: { children: any }) {
    const { lang } = useAppState();
    const [brand, setBrand] = useState<string>("grease");
    const router = useRouter();
    const { pathname } = router;

    useEffect(() => {
        if (router.isReady) {
            if (pathname.includes("grease")) {
                setBrand("grease");
            } else if (pathname.includes("pharm")) {
                setBrand("pharm");
            }
        }
    }, [router]);

    return (
        <Opacity className={`w-screen h-screen overflow-x-hidden font-rubik`}>
            <div
                className={`${
                    colorCodes[brand as keyof Color]?.bgColor
                } w-full h-5 md:h-8`}
            ></div>
            <div
                className={`mx-5 border-r border-l ${
                    colorCodes[brand as keyof Color]?.border
                }`}
            >
                <Header brand={brand} />
                <div className="pt-4">{children}</div>
                <Footer />
            </div>
        </Opacity>
    );
}
