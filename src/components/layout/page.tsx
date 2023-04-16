import { useAppState } from "lib/context/app";
import Footer from "./footer";
import Header from "./header";
import Opacity from "./opacity";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { colorCodes } from "lib/helper";
import { Brand } from "lib/types/brand.type";

export default function Page({ children }: { children: any }) {
    const [brand, setBrand] = useState<string>("grease");
    const router = useRouter();
    const { pathname } = router;

    useEffect(() => {
        if (router.isReady) {
            if (pathname.includes("grease")) {
                setBrand("grease");
            } else if (pathname.includes("pharm")) {
                setBrand("pharm");
            } else if (pathname.includes("clinic")) {
                setBrand("clinic");
            } else if (pathname.includes("california")) {
                setBrand("california");
            } else if (pathname.includes("goodprice")) {
                setBrand("goodprice");
            } else if (pathname.includes("stardom")) {
                setBrand("stardom");
            } else if (pathname.includes("buildings")) {
                setBrand("buildings");
            }
        }
    }, [router]);

    return (
        <>
            <Opacity
                className={`w-screen h-screen overflow-x-hidden font-rubik`}
            >
                <div
                    className={`${
                        colorCodes[brand as keyof Brand]?.bgColor
                    } w-full h-5 md:h-8`}
                ></div>
                <div
                    className={`mx-5 border-r border-l ${
                        colorCodes[brand as keyof Brand]?.border
                    }`}
                >
                    <Header brand={brand} />
                    <div className="pt-4">{children}</div>
                    <Footer brand={brand} />
                </div>
            </Opacity>
        </>
    );
}
