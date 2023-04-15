import { useAppState } from "lib/context/app";
import Footer from "./footer";
import Header from "./header";
import Opacity from "./opacity";

export default function Page({ children }: { children: any }) {
    const { lang } = useAppState();
    return (
        <Opacity className={`w-screen h-screen overflow-hidden font-rubik`}>
            <div className="w-full h-full">
                <div className="bg-main w-full h-5"></div>
                <Header />
                <div className="w-full h-full overflow-y-scroll my-col-16">
                    {children}
                    <Footer />
                </div>
            </div>
        </Opacity>
    );
}
