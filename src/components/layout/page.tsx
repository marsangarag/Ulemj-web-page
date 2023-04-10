import Footer from "./footer";
import Header from "./header";
import Opacity from "./opacity";

export default function Page({ children }: { children: any }) {
    return (
        <Opacity className="w-full h-full my-col-20">
            <Header />
            <div className="w-full h-full">{children}</div>
            <Footer />
        </Opacity>
    );
}
