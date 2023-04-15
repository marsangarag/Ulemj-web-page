import { useAppState } from "lib/context/app";
import Footer from "./footer";
import Header from "./header";
import Opacity from "./opacity";

export default function Page({ children }: { children: any }) {
    const { lang } = useAppState();
    return (
        <Opacity className={`w-screen overflow-hidden h-screen font-rubik`}>
            <div className="w-full h-full overflow-y-scroll my-col-16">
                <Header />
                {children}
                <Footer />
            </div>
        </Opacity>
    );
}
