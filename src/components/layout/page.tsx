import { useAppState } from "lib/context/app";
import Footer from "./footer";
import Header from "./header";
import Opacity from "./opacity";

export default function Page({ children }: { children: any }) {
    const { lang } = useAppState();
    return (
        <Opacity
            className={`w-screen overflow-hidden h-screen my-col-20 ${
                lang === "en" ? "font-poppins" : "font-rubik"
            }`}
        >
            <div className="w-full h-full overflow-y-scroll">
                <Header />
                {children}
                <Footer />
            </div>
        </Opacity>
    );
}
