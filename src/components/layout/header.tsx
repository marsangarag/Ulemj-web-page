import { useRouter } from "next/router";
import Opacity from "./opacity";
import { useAppState } from "lib/context/app";
import { Lang } from "lib/types/language.type";
import { useState } from "react";
import Image from "next/image";
import { colorCodes } from "lib/helper";
import { Color } from "lib/types/color.type";

export default function Header({ brand }: { brand: string }) {
    const router = useRouter();
    const { lang, setLang } = useAppState();
    const [showLang, setShowLang] = useState<boolean>(false);

    const onNavigate = (route: string) => {
        if (route.includes("http")) {
            window.open(route, "_blank", "noreferrer");
        } else {
            router.push(route);
        }
    };

    const centerItems = {
        grease: [
            {
                en: "Booking",
                mon: "Цаг захиалах",
                route: "http://appointment.ulemjgrease.com/",
            },
            {
                en: "Shop",
                mon: "Каталог",
                route: "https://shop.ulemjgrease.com/",
            },
            { en: "About", mon: "Тухай", route: `/${brand}/about` },
        ],
        pharm: [
            {
                en: "Shop",
                mon: "Каталог",
                route: "https://shop.ulemjgrease.com/",
            },
            { en: "About", mon: "Тухай", route: `/${brand}/about` },
        ],
    };

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
        <div
            className={`relative h-[63px] flex flex-col items-center border-b ${
                colorCodes[brand as keyof Color]?.border
            }`}
        >
            <Opacity
                className="sm:absolute top-0 sm:left-4"
                onClick={() => onNavigate(`/${brand}`)}
                delay={0.2}
            >
                <Image
                    className="cursor-pointer"
                    src={`/images/brand/${brand}.png`}
                    alt={brand}
                    height={0}
                    width={120}
                />
            </Opacity>
            <div className="flex items-center gap-x-5 text-sm sm:absolute sm:left-1/2 sm:-translate-x-1/2 sm:top-1/2 sm:-translate-y-1/2 pb-4 sm:pb-0 -mt-4 sm:mt-0">
                {centerItems[brand as keyof typeof centerItems]?.map(
                    (item, index: number) => {
                        return (
                            <Opacity
                                className={`cursor-pointer ${
                                    index === 2 &&
                                    router.pathname.includes("about")
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
                    }
                )}
            </div>
            {/* <div className="flex gap-x-5 text-sm items-center">
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
                            } `}
                        >
                            {lang === "en" ? "Монгол" : "English"}
                        </Opacity>
                    ) : null}
                </Opacity>
                <Opacity
                    onClick={onChangeLang}
                    delay={1}
                    className="cursor-pointer"
                >
                    Хэл солих
                </Opacity>
            </div> */}
        </div>
    );
}
