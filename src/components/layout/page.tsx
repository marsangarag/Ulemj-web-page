import { useAppState } from "lib/context/app";
import Footer from "./footer";
import Header from "./header";
import Opacity from "./opacity";
import { colorCodes } from "lib/helper";
import { Color } from "lib/types/color.type";

export default function Page({ children }: { children: any }) {
    const { lang, brand } = useAppState();

    return brand ? (
        <Opacity className={`w-screen h-screen overflow-x-hidden font-rubik`}>
            <div
                className={`${
                    colorCodes[brand as keyof Color].bgColor
                } w-full h-5 md:h-8`}
            ></div>
            <div
                className={`mx-5 border-r border-l ${
                    colorCodes[brand as keyof Color].border
                }`}
            >
                <Header />
                <div className="pt-4">{children}</div>
                <Footer />
            </div>
        </Opacity>
    ) : null;
}
