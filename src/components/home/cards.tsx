import Image from "next/image";
import { Brand } from "lib/types/brand.type";
import { colorCodes } from "lib/helper";
import parse from "html-react-parser";
import Fade from "components/layout/fade";

export default function Salon({ brand }: { brand: string }) {
    const onButtonClick = (link: string) => {
        if (link) {
            window.open(link, "_blank", "noreferrer");
        }
    };

    const content = {
        grease: {
            left: {
                image: "beauty",
                title: "Beauty Spa",
                text: "Introduction to outstanding beauty services",
                button: {
                    title: "Beauty Services",
                    route: "http://appointment.ulemjgrease.com/appointments?business_type=2",
                },
                button2: { title: "", route: "" },
            },
            center: {
                top: {
                    image: "nail",
                    title: "Nails",
                    text: "Manicure, Pedicure and Treatment",
                    route: "http://appointment.ulemjgrease.com/appointments?business_type=1",
                },
                bottom: {
                    button: "Appointment",
                    image: "",
                    text: "We served <b>6000</b> clients a month and more than <b>70%</b>  of them are lon-Term for more than <b>3 years</b>. Total clients are potential and <b>15%</b>  of our clients are foreigners, living in Ulaanbaatar.",
                    route: "http://appointment.ulemjgrease.com/",
                },
            },
            right: {
                image: "hair",
                title: "Hair treatment",
                text: "Stylish & treatment",
                button: {
                    title: "Hair Services",
                    route: "http://appointment.ulemjgrease.com/appointments?business_type=3",
                },
            },
        },
        pharm: {
            left: {
                image: "goli",
                title: "Apple Cide Vinegar Gummies",
                text: "Infused with a delicious flavor profile. Taste the Apple. Not the Vinegar.®",
                button: {
                    title: "Read more",
                    route: "https://shop.ulemjgrease.com/posts/3617",
                },
                button2: { title: "", route: "" },
            },
            center: {
                top: {
                    image: "hairburst",
                    title: "Hairburst",
                    text: "Coming soon...",
                    route: "",
                },
                bottom: {
                    button: "Appointment",
                    image: "",
                    text: "<b>Ulemj Pharmacy</b> distributes natural collagen supplements for beauty and sport from <b>Neocell Co..ltd</b>  of the USA, which have been proven to be highly effective.",
                    route: "http://appointment.ulemjgrease.com/",
                },
            },
            right: {
                image: "byebye",
                title: "Bye Bye Blemish Skin Treatments",
                text: "Stylish & treatment",
                button: {
                    title: "Read more",
                    route: "https://shop.ulemjgrease.com/posts/817",
                },
            },
        },
        clinic: {
            left: {
                image: "left",
                title: "Laser Treatments",
                text: "Introduction to outstanding laser services",
                button: {
                    title: "Treatments Services",
                    route: "http://appointment.ulemjgrease.com/salon-profile/clinic/blogs/13 ",
                },
                button2: { title: "", route: "" },
            },
            center: {
                top: {
                    image: "top",
                    title: "Threads",
                    text: "Mesotherapy and Aesthetical Treatments",
                    route: "http://appointment.ulemjgrease.com/salon-profile/clinic/blogs/17",
                },
                bottom: {
                    button: "",
                    image: "bottom",
                    text: "We offer a wide range of treatments, including Botox PRP for face, hair, and hand rejuvenation, hyaluronic acid injection, IPL treatment for skin rejuvenation, hair removal, acne treatment, pigmentation, and laser treatment for scar removal and freckles for you",
                    route: "http://appointment.ulemjgrease.com/salon-profile/clinic/ ",
                },
            },
            right: {
                image: "right",
                title: "Foreign doctors",
                text: "Our foreign specialized doctors",
                button: {
                    title: "See more",
                    route: "http://appointment.ulemjgrease.com/salon-profile/clinic/blogs ",
                },
            },
        },
        stardom: {
            left: {
                image: "left",
                title: "New Release",
                text: "Women Spring collection",
                button: {
                    title: "Shop ↗",
                    route: "https://www.instagram.com/stardom_boutique/",
                },
                button2: {
                    title: "Lookbook ↗",
                    route: "https://www.instagram.com/stardom_boutique/",
                },
            },
            center: {
                top: {
                    image: "top",
                    title: "",
                    text: "Stardom Boutique has become one of the most sought-after and trend-setting shops in the city, making it a popular destination for fashion-forward individuals.",
                    route: "",
                },
                bottom: {
                    button: "Social",
                    image: "bottom",
                    text: "We served <b>6000</b> clients a month and more than <b>70%</b>  of them are lon-Term for more than <b>3 years</b>. Total clients are potential and <b>15%</b>  of our clients are foreigners, living in Ulaanbaatar.",
                    route: "https://www.instagram.com/stardom_boutique/",
                },
            },
            right: {
                image: "right",
                title: "",
                text: "Our partnered brands from the USA include Endless Rose, English Factory, Beulah Style, and Encreme. Additionally, Seoul-based brands includes Spell Edit, Rookie Bud, Liberzen, Papermoon/TheFrankieShop, Esther de God, JS NewYork.z",
                button: {
                    title: "",
                    route: "",
                },
            },
        },
        goodprice: {
            left: {
                image: "left",
                title: "New Release",
                text: "Women Spring collection",
                button: {
                    title: "Shop ↗",
                    route: "https://www.instagram.com/stardom_boutique/",
                },
                button2: {
                    title: "Lookbook ↗",
                    route: "https://www.instagram.com/stardom_boutique/",
                },
            },
            center: {
                top: {
                    image: "top",
                    title: "",
                    text: "Stardom Boutique has become one of the most sought-after and trend-setting shops in the city, making it a popular destination for fashion-forward individuals.",
                    route: "",
                },
                bottom: {
                    button: "Social",
                    image: "bottom",
                    text: "We served <b>6000</b> clients a month and more than <b>70%</b>  of them are lon-Term for more than <b>3 years</b>. Total clients are potential and <b>15%</b>  of our clients are foreigners, living in Ulaanbaatar.",
                    route: "https://www.instagram.com/stardom_boutique/",
                },
            },
            right: {
                image: "right",
                title: "",
                text: "Our partnered brands from the USA include Endless Rose, English Factory, Beulah Style, and Encreme. Additionally, Seoul-based brands includes Spell Edit, Rookie Bud, Liberzen, Papermoon/TheFrankieShop, Esther de God, JS NewYork.z",
                button: {
                    title: "",
                    route: "",
                },
            },
        },
        california: {
            left: {
                image: "left",
                title: "Catering & Events",
                text: "We cater to corporate or social events including weddings, receptions,  birthdays, anniversaries, and more.",
                button: {
                    title: "See more",
                    route: "https://www.facebook.com/California.Restaurant.MN",
                },
                button2: {
                    title: "",
                    route: "",
                },
            },
            center: {
                top: {
                    image: "top",
                    title: "Menu",
                    text: "Our chefs use fresh, seasonal ingredients to make affordable, tasty, nourishing meals.",
                    route: "https://qrmenu.mn/menu/ODQy",
                },
                bottom: {
                    button: "Reservation",
                    image: "",
                    text: "The California Restaurant has received numerous accolades, including being named the leading restaurant in Ulaanbaatar in 2008, 2012, and 2013 by the Public Dining Association of OU.",
                    route: "tel:+97611319031",
                },
            },
            right: {
                image: "right",
                title: "Our Services",
                text: "",
                button: {
                    title: "See more",
                    route: "https://www.facebook.com/California.Restaurant.MN",
                },
            },
        },
    };

    return (
        <div className="flex flex-col gap-y-1 md:grid md:grid-cols-12 gap-x-1 md:place-items-stretch">
            <Fade
                transition={{ y: -200, delay: 0 }}
                className="md:col-span-5 relative w-full"
            >
                <img
                    src={`/images/salon/${brand}/${
                        content[brand as keyof Brand]?.left?.image
                    }.jpg`}
                    alt="beauty"
                    className="rounded-xl h-full w-full aspect-auto"
                />
                <div className="gradient-bg"></div>
                <div className="absolute bottom-5 left-5 right-5 flex flex-col gap-y-2.5 text-white items-start">
                    <div className="flex flex-col gap-y-1">
                        <div className="text-xl sm:text-3xl lg:text-4xl xl:text-6xl font-light tracking-wide">
                            {content[brand as keyof Brand]?.left?.title}
                        </div>
                        <div className="text-smaller sm:text-xs md:text-sm lg:text-base xl:text-xl">
                            {content[brand as keyof Brand]?.left?.text}
                        </div>
                    </div>
                    <div className="flex gap-x-2">
                        <div
                            onClick={() =>
                                onButtonClick(
                                    content[brand as keyof Brand]?.left?.button
                                        ?.route
                                )
                            }
                            className={`${
                                colorCodes[brand as keyof Brand]?.button
                            } ${colorCodes[brand as keyof Brand]?.color}  ${
                                colorCodes[brand as keyof Brand]?.[
                                    "button-border"
                                ]
                            } border cursor-pointer shadow rounded-3xl py-2.5 px-4 text-xs md:text-sm lg:text-base xl:text-xl font-medium`}
                        >
                            {content[brand as keyof Brand]?.left?.button?.title}
                        </div>
                        {content[brand as keyof Brand]?.left?.button2.title ? (
                            <div
                                onClick={() =>
                                    onButtonClick(
                                        content[brand as keyof Brand]?.left
                                            ?.button2?.route
                                    )
                                }
                                className={`${
                                    colorCodes[brand as keyof Brand]?.button
                                } ${colorCodes[brand as keyof Brand]?.color} ${
                                    colorCodes[brand as keyof Brand]?.[
                                        "button-border"
                                    ]
                                } border cursor-pointer shadow rounded-3xl py-2.5 px-4 text-xs md:text-sm lg:text-base xl:text-xl font-medium`}
                            >
                                {
                                    content[brand as keyof Brand]?.left?.button2
                                        ?.title
                                }
                            </div>
                        ) : null}
                    </div>
                </div>
            </Fade>
            <div className="md:col-span-3 flex md:flex-col gap-1 flex-row items-stretch">
                <Fade
                    transition={{ y: 200, delay: 0.1 }}
                    onClick={() =>
                        onButtonClick(
                            content[brand as keyof Brand]?.center?.top?.route
                        )
                    }
                    className={`${
                        content[brand as keyof Brand]?.center?.top?.route &&
                        "cursor-pointer "
                    }  w-1/2 md:w-full md:h-full relative`}
                >
                    <div className="gradient-bg"></div>
                    <img
                        src={`/images/salon/${brand}/${
                            content[brand as keyof Brand]?.center?.top?.image
                        }.jpg`}
                        alt="nail"
                        className="rounded-xl h-full w-full"
                    />
                    <div
                        className={`bottom-2.5 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4 absolute flex flex-col ${
                            (brand === "pharm" ||
                                brand === "stardom" ||
                                brand === "clinic" ||
                                brand === "california") &&
                            "text-white"
                        }`}
                    >
                        <div
                            className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-light tracking-wide `}
                        >
                            {content[brand as keyof Brand]?.center?.top?.title}
                        </div>
                        <div className="text-smaller sm:text-xs xl:text-base">
                            {content[brand as keyof Brand]?.center?.top?.text}
                        </div>
                    </div>
                </Fade>
                {content[brand as keyof Brand]?.center?.bottom?.image ? (
                    <Fade
                        transition={{ y: -200, delay: 0.2 }}
                        className={`aspect-auto ${
                            content[brand as keyof Brand]?.center?.bottom
                                ?.route && "cursor-pointer"
                        } rounded-xl relative w-1/2 md:w-full md:h-full flex flex-col justify-between items-start gap-y-2.5`}
                        onClick={() =>
                            onButtonClick(
                                content[brand as keyof Brand]?.center?.bottom
                                    ?.route
                            )
                        }
                    >
                        <div className="gradient-bg"></div>
                        <img
                            src={`/images/salon/${brand}/${
                                content[brand as keyof Brand]?.center?.bottom
                                    ?.image
                            }.jpg`}
                            alt="nail"
                            className="rounded-xl h-full w-full"
                        />

                        {content[brand as keyof Brand]?.center?.bottom
                            ?.button ? (
                            <div
                                onClick={() =>
                                    onButtonClick(
                                        content[brand as keyof Brand]?.center
                                            ?.bottom?.route
                                    )
                                }
                                className={`rounded-3xl absolute top-4 left-4 cursor-pointer border ${
                                    colorCodes[brand as keyof Brand]?.border
                                } text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl py-1.5 px-5 font-medium`}
                            >
                                {
                                    content[brand as keyof Brand]?.center
                                        ?.bottom?.button
                                }
                            </div>
                        ) : null}
                        {content[brand as keyof Brand]?.center?.bottom?.text ? (
                            <div
                                className={`absolute bottom-2 w-full px-2 leading-tight text-smaller md:bottom-5 md:px-5 lg:text-sm text-justify ${
                                    colorCodes[brand as keyof Brand].color
                                }`}
                            >
                                {
                                    content[brand as keyof Brand]?.center
                                        ?.bottom?.text
                                }
                            </div>
                        ) : null}
                    </Fade>
                ) : (
                    <Fade
                        transition={{ y: -200, delay: 0.2 }}
                        className={`${
                            colorCodes[brand as keyof Brand].bgColor
                        } aspect-auto text-white rounded-xl p-2.5 sm:p-4 w-1/2 md:w-full md:h-full flex flex-col justify-between items-start gap-y-2.5`}
                    >
                        <div
                            onClick={() =>
                                onButtonClick(
                                    content[brand as keyof Brand]?.center
                                        ?.bottom?.route
                                )
                            }
                            className="rounded-3xl cursor-pointer border border-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl py-2.5 px-3"
                        >
                            {
                                content[brand as keyof Brand]?.center?.bottom
                                    ?.button
                            }
                        </div>
                        <div className="text-smaller text-justify sm:text-sm lg:text-base xl:text-lg">
                            {parse(
                                content[brand as keyof Brand]?.center?.bottom
                                    ?.text
                            )}
                        </div>
                    </Fade>
                )}
            </div>
            <Fade
                transition={{ y: 200, delay: 0.3 }}
                className="md:col-span-4 relative w-full "
            >
                <div className="gradient-bg"></div>
                <img
                    src={`/images/salon/${brand}/${
                        content[brand as keyof Brand]?.right?.image
                    }.jpg`}
                    alt="hair"
                    className="rounded-xl h-full w-full aspect-auto"
                />
                <div className="absolute bottom-5 left-6 right-6 lg:left-10 lg:bottom-10 lg:right-10 xl:left-14 xl:bottom-14 xl:right-14 flex flex-col gap-y-2.5 text-white items-start">
                    <div className="flex flex-col gap-y-1">
                        <div className="text-xl sm:text-3xl font-light tracking-wide">
                            {content[brand as keyof Brand]?.right?.title}
                        </div>
                        <div className="text-smaller sm:text-xs  text-justify md:text-sm lg:text-base xl:text-lg">
                            {content[brand as keyof Brand]?.right?.text}
                        </div>
                    </div>
                    {content[brand as keyof Brand]?.right?.button?.title ? (
                        <div
                            onClick={() =>
                                onButtonClick(
                                    content[brand as keyof Brand]?.right?.button
                                        ?.route
                                )
                            }
                            className={`${
                                colorCodes[brand as keyof Brand]?.button
                            } ${
                                colorCodes[brand as keyof Brand]?.[
                                    "button-border"
                                ]
                            } ${
                                colorCodes[brand as keyof Brand]?.color
                            } border shadow cursor-pointer rounded-3xl py-2.5 px-4 text-xs md:text-sm font-medium`}
                        >
                            {
                                content[brand as keyof Brand]?.right?.button
                                    ?.title
                            }
                        </div>
                    ) : null}
                </div>
            </Fade>
        </div>
    );
}
