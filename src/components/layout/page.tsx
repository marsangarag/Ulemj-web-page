import { useAppState } from "lib/context/app";
import Footer from "./footer";
import Header from "./header";
import Opacity from "./opacity";

export default function Page({ children }: { children: any }) {
    const { lang } = useAppState();
    return (
        <Opacity className={`w-screen h-screen overflow-x-hidden font-rubik`}>
            <div className="bg-main w-full h-5"></div>
            <div className="px-5">
                <Header />
                {children}
                <Footer />
            </div>
        </Opacity>
    );
}
