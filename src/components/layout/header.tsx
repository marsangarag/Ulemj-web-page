import { useRouter } from "next/router";
import Opacity from "./opacity";
import { useAppState } from "lib/context/app";
import { Lang } from "lib/types/language.type";
import { useState } from "react";
import Image from "next/image";

export default function Header() {
    const router = useRouter();
    const { lang, setLang, brand } = useAppState();
    const [showLang, setShowLang] = useState<boolean>(false);

    const onNavigate = (route: string) => {
        if (route.includes("http")) {
            window.open(route, "_blank", "noreferrer");
        } else {
            router.push(route);
        }
    };

    const centerItems = [
        {
            en: "Booking",
            mon: "Цаг захиалах",
            route: "http://appointment.ulemjgrease.com/",
        },
        { en: "Shop", mon: "Каталог", route: "https://shop.ulemjgrease.com/" },
        { en: "About", mon: "Тухай", route: `about` },
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
        <div className="relative h-full w-full sm:block flex flex-col items-center border-b border-main/50 mb-5">
            <Opacity
                className="cursor-pointer"
                onClick={() => onNavigate(`${router.pathname}`)}
                delay={0.2}
            >
                <img src={`/images/brand/${brand}.png`} alt="" />
                {/* <Image
                    src={"/images/brand-logo.png"}
                    alt="ulemj"
                    height={0}
                    width={100}
                /> */}
            </Opacity>
            <div className="flex items-center gap-x-5 text-sm sm:absolute sm:left-1/2 sm:-translate-x-1/2 sm:top-1/2 sm:-translate-y-1/2 pb-4 sm:pb-0 -mt-4 sm:mt-0">
                {centerItems?.map((item, index: number) => {
                    return (
                        <Opacity
                            className={`cursor-pointer ${
                                router.pathname.includes(item.route)
                                    ? "font-bold"
                                    : "font-normal"
                            }`}
                            onClick={() => onNavigate(item.route)}
                            key={item.route}
                            delay={0.2 * (index + 2)}
                        >
                            {item[lang as keyof Lang]}
                        </Opacity>
                    );
                })}
            </div>
            <div className="flex gap-x-5 text-sm items-center">
                {/* <Opacity
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
                            } `}
                        >
                            {lang === "en" ? "Монгол" : "English"}
                        </Opacity>
                    ) : null}
                </Opacity> */}
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
