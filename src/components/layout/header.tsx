import { useRouter } from "next/router";
import Opacity from "./opacity";

export default function Header() {
    const router = useRouter();

    const onNavigate = (route: string) => {
        router.push(route);
    };

    return (
        <div className=" flex flex-col md:flex-row justify-between items-center py-4 px-5">
            <Opacity
                onClick={() => onNavigate("")}
                delay={0.1}
                className="font-medium tracking-widest"
            >
                VERSENCIA
            </Opacity>
            <div className="flex items-center gap-x-5 text-sm text-gray">
                <Opacity onClick={() => onNavigate("")} delay={0.2}>
                    Shop
                </Opacity>
                <Opacity onClick={() => onNavigate("")} delay={0.3}>
                    Lookbook
                </Opacity>
                <Opacity onClick={() => onNavigate("")} delay={0.4}>
                    About
                </Opacity>
            </div>
            <div className="flex gap-x-5 text-gray text-sm items-center">
                <Opacity onClick={() => onNavigate("")} delay={0.5}>
                    Cart
                </Opacity>
                <Opacity onClick={() => onNavigate("")} delay={0.6}>
                    Account
                </Opacity>
            </div>
        </div>
    );
}
