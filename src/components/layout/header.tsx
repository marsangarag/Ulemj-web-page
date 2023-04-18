import { useRouter } from "next/router";
import Opacity from "./opacity";
import { useAppState } from "lib/context/app";
import { Lang } from "lib/types/language.type";
import { useState } from "react";
import Image from "next/image";
import { colorCodes } from "lib/helper";
import { Brand } from "lib/types/brand.type";

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
        clinic: [
            {
                en: "Appointment",
                mon: "",
                route: "http://appointment.ulemjgrease.com/salon-profile/clinic/",
            },
            {
                en: "Treatments",
                mon: "",
                route: "http://appointment.ulemjgrease.com/salon-profile/clinic/services ",
            },
            {
                en: "About",
                mon: "Тухай",
                route: `/${brand}/about`,
            },
        ],
        stardom: [
            {
                en: "Women",
                mon: "",
                route: `https://www.instagram.com/stardom_boutique/`,
            },
            {
                en: "Lookbook",
                mon: "",
                route: `https://www.facebook.com/stardombyplatinum`,
            },
            {
                en: "About",
                mon: "Тухай",
                route: `/${brand}/about`,
            },
        ],
        goodprice: [
            {
                en: "Delivery",
                mon: "",
                route: `https://www.facebook.com/goodpricemarket/ `,
            },
            {
                en: "Shop",
                mon: "",
                route: `http://goodprice.mindplay.mn/shopTab/`,
            },
            {
                en: "About",
                mon: "Тухай",
                route: `/${brand}/about`,
            },
        ],
        california: [
            {
                en: "Reservations",
                mon: "",
                route: `tel:+97611319031 `,
            },
            {
                en: "Services",
                mon: "",
                route: `https://www.facebook.com/California.Restaurant.MN`,
            },
            {
                en: "About",
                mon: "Тухай",
                route: `/${brand}/about`,
            },
        ],
        ulemj: [
            // {
            //     en: "Reservations",
            //     mon: "",
            //     route: `tel:+97611319031 `,
            // },
            {
                en: "About",
                mon: "",
                route: `/about`,
            },
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

    return brand ? (
        <div
            className={`relative h-full sm:h-16 aspect-auto flex flex-col gap-y-1 items-center border-b ${
                colorCodes[brand as keyof Brand]?.border
            }`}
        >
            <Opacity
                className={`sm:absolute sm:left-0 flex-grow-0`}
                onClick={() => onNavigate(`/${brand === "ulemj" ? "" : brand}`)}
                delay={0.2}
            >
                <img
                    src={`/images/brand/${brand}.png`}
                    alt={brand}
                    className="h-16 w-auto cursor-pointer"
                />
                {/* <Image
                    className="cursor-pointer"
                    src={`/images/brand/${brand}.png`}
                    alt={brand}
                    height={63}
                    width={120}
                /> */}
            </Opacity>
            <div
                className={`flex items-center gap-x-5 text-sm sm:absolute ${
                    brand === "ulemj"
                        ? "sm:right-10"
                        : "sm:left-1/2 sm:-translate-x-1/2"
                }  sm:top-1/2 sm:-translate-y-1/2 pb-4 sm:pb-0 -mt-4 sm:mt-0 $`}
            >
                {centerItems[brand as keyof typeof centerItems]?.map(
                    (item, index: number) => {
                        return (
                            <Opacity
                                className={`cursor-pointer ${
                                    index ===
                                        centerItems[brand as keyof Brand]
                                            .length -
                                            1 &&
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
    ) : null;
}
