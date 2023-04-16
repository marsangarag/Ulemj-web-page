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
            },
            center: {
                top: {
                    image: "nail",
                    title: "Nails",
                    text: "Manicure, Pedicure and Treatment",
                    route: "http://appointment.ulemjgrease.com/appointments?business_type=1",
                },
                bottom: {
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
            },
            center: {
                top: {
                    image: "hairburst",
                    title: "Hairburst",
                    text: "Coming soon...",
                    route: "",
                },
                bottom: {
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
                image: "beauty",
                title: "Beauty Spa",
                text: "Introduction to outstanding beauty services",
                button: {
                    title: "Beauty Services",
                    route: "http://appointment.ulemjgrease.com/appointments?business_type=2",
                },
            },
            center: {
                top: {
                    image: "nail",
                    title: "Nails",
                    text: "Manicure, Pedicure and Treatment",
                    route: "http://appointment.ulemjgrease.com/appointments?business_type=1",
                },
                bottom: {
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
    };

    return (
        <div className="flex flex-col gap-y-1 md:grid md:grid-cols-12 gap-x-1 md:place-items-stretch">
            <Fade
                transition={{ y: -200, delay: 0 }}
                className="md:col-span-5 relative w-full "
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
                        <div className="text-xl sm:text-3xl font-light tracking-wide">
                            {content[brand as keyof Brand]?.left?.title}
                        </div>
                        <div className="text-smaller sm:text-xs md:text-sm">
                            {content[brand as keyof Brand]?.left?.text}
                        </div>
                    </div>
                    <div
                        onClick={() =>
                            onButtonClick(
                                content[brand as keyof Brand]?.left?.button
                                    ?.route
                            )
                        }
                        className={`${
                            colorCodes[brand as keyof Brand]?.button
                        } cursor-pointer shadow rounded-3xl py-2.5 px-4 text-xs md:text-sm font-medium`}
                    >
                        {content[brand as keyof Brand]?.left?.button?.title}
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
                    } w-1/2 md:w-full relative`}
                >
                    <div className="gradient-bg"></div>
                    <img
                        src={`/images/salon/${brand}/${
                            content[brand as keyof Brand]?.center?.top?.image
                        }.jpg`}
                        alt="nail"
                        className="rounded-xl aspect-auto"
                    />
                    <div
                        className={`bottom-2.5 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4 absolute flex flex-col ${
                            brand === "pharm" && "text-white"
                        }`}
                    >
                        <div
                            className={`text-xl sm:text-xl md:text-2xl lg:text-3xl font-light tracking-wide `}
                        >
                            {content[brand as keyof Brand]?.center?.top?.title}
                        </div>
                        <div className="text-smaller lg:text-xs">
                            {content[brand as keyof Brand]?.center?.top?.text}
                        </div>
                    </div>
                </Fade>
                <Fade
                    transition={{ y: -200, delay: 0.2 }}
                    className={`${
                        colorCodes[brand as keyof Brand].bgColor
                    } aspect-auto text-white rounded-xl p-2.5 sm:p-4 w-1/2 md:w-full md:h-full flex flex-col justify-between items-start gap-y-2.5`}
                >
                    <div
                        onClick={() =>
                            onButtonClick(
                                content[brand as keyof Brand]?.center?.bottom
                                    ?.route
                            )
                        }
                        className="rounded-3xl cursor-pointer border border-white text-xs sm:text-sm md:text-base py-2.5 px-3"
                    >
                        Appointment
                    </div>
                    <div className="text-smaller text-justify sm:text-sm lg:text-base xl:text-lg">
                        {parse(
                            content[brand as keyof Brand]?.center?.bottom?.text
                        )}
                    </div>
                </Fade>
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
                <div className="absolute bottom-5 left-5 flex flex-col gap-y-2.5 text-white items-start">
                    <div className="flex flex-col gap-y-1">
                        <div className="text-xl sm:text-3xl font-light tracking-wide">
                            {content[brand as keyof Brand]?.right?.title}
                        </div>
                        <div className="text-smaller sm:text-xs md:text-sm">
                            {content[brand as keyof Brand]?.right?.text}
                        </div>
                    </div>
                    <div
                        onClick={() =>
                            onButtonClick(
                                content[brand as keyof Brand]?.right?.button
                                    ?.route
                            )
                        }
                        className={`${
                            colorCodes[brand as keyof Brand]?.button
                        } text-white shadow cursor-pointer rounded-3xl py-2.5 px-4 text-xs md:text-sm font-medium`}
                    >
                        {content[brand as keyof Brand]?.right?.button?.title}
                    </div>
                </div>
            </Fade>
        </div>
    );
}
