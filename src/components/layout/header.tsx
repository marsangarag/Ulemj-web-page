import { useRouter } from "next/router";
import Opacity from "./opacity";
import { useAppState } from "lib/context/app";
import { Lang } from "lib/types/language.type";
import { useState } from "react";

export default function Header() {
    const router = useRouter();
    const { lang, setLang } = useAppState();
    const [showLang, setShowLang] = useState<boolean>(false);

    const onNavigate = (route: string) => {
        router.push(route);
    };

    const centerItems = [
        { en: "Booking", mon: "Цаг захиалах", route: "/booking" },
        { en: "Shop", mon: "Каталог", route: "/shop" },
        { en: "About", mon: "Тухай", route: "/about" },
    ];

    const rightItems = [
        { title: "Shop", route: "/shop" },
        { title: "Lookbook", route: "/book" },
    ];

    const language = {
        en: "English",
        mon: "Монгол",
    };

    const onChangeLang = () => {
        setLang(lang === "en" ? "mon" : "en");
    };

    return (
        <div className="flex flex-col md:flex-row justify-between items-center pt-4 px-5">
            <Opacity
                onClick={() => onNavigate("/")}
                delay={0.2}
                className="font-medium tracking-widest cursor-pointer"
            >
                ULEMJ
            </Opacity>
            <div className="flex items-center gap-x-5 text-sm text-gray">
                {centerItems?.map((item, index: number) => {
                    return (
                        <Opacity
                            className="cursor-pointer"
                            onClick={() => onNavigate(item.route)}
                            key={item.route}
                            delay={0.2 * (index + 2)}
                        >
                            {item[lang as keyof Lang]}
                        </Opacity>
                    );
                })}
            </div>
            <div className="flex gap-x-5 text-gray text-sm items-center">
                <Opacity
                    onClick={() => setShowLang(!showLang)}
                    delay={1}
                    className="cursor-pointer relative"
                >
                    <div>{language[lang as keyof Lang]}</div>
                    {showLang ? (
                        <Opacity
                            onClick={onChangeLang}
                            className={`absolute top-5 py-1 px-5 -right-5 bg-white rounded-b-xl z-10 ${
                                lang === "en" && "font-rubik"
                            }`}
                        >
                            {lang === "en" ? "Монгол" : "English"}
                        </Opacity>
                    ) : null}
                </Opacity>
                {/* <Opacity
                    onClick={onChangeLang}
                    delay={1}
                    className="cursor-pointer"
                >
                    Хэл солих
                </Opacity> */}
            </div>
        </div>
    );
}
