import Fade from "components/layout/fade";
import { Brand } from "lib/types/brand.type";
import parse from "html-react-parser";

export default function Service({ brand }: { brand: string }) {
    const onLinkClick = (link: string) => {
        window.open(link, "_blank", "noreferrer");
    };

    const content = {
        grease: {
            left: {
                image: "spa",
                title: "Grease Wellness",
                text: "at Shangri-La Ulaanbaatar, Mongolia",
                route: "http://appointment.ulemjgrease.com/salon-profile/wellness/",
            },
            right: {
                route: "http://appointment.ulemjgrease.com/salon-profile/egulen/",
                button: "<span className='font-bold'>Grease VIP</span> at Baga tenger",
                img: "baga_tenger",
            },
        },
        pharm: {
            left: {
                image: "left",
                title: "",
                text: "<div className='text-smaller md:text-sm lg:text-base xl:text-3xl font-light'>One of the brands that Ulemj Pharmacy is proud to distribute is <b>MCCM</b>  Medical Cosmetics LLC of Portugal. This company manufactures aesthetic professional ampoules that are designed to provide clients with exceptional skin care results. Additionally, Ulemj Pharmacy distributes creams for dermatology, allergy, and pain relief from Sheffield Pharmaceutical of the USA.</div>",
                route: "http://appointment.ulemjgrease.com/salon-profile/wellness/",
            },
            right: {
                route: "http://appointment.ulemjgrease.com/salon-profile/egulen/",
                button: "We have the most effective <span className='font-bold'>skin lightening treatments</span>",
                img: "right",
            },
        },
        clinic: {
            left: {
                image: "left",
                title: "",
                text: "<div className='flex flex-col text-smaller md:text-sm lg:text-base xl:text-3xl'><div>External beauty is a gift from God,</div><div>But inner beauty is your own creation</div><div className='font-bold'>Lee Ji Young /PhD/</div> </div>",
                route: "http://appointment.ulemjgrease.com/salon-profile/clinic/blogs/15",
            },
            right: {
                route: "http://appointment.ulemjgrease.com/salon-profile/clinic/blogs/18 ",
                button: "Get to know more about <span className='font-bold'>Service</span>",
                img: "right",
            },
        },

        stardom: {
            left: {
                image: "left",
                title: "2023 SPRING",
                text: "#Flower Embroidered denim shirt",
                route: "https://www.instagram.com/stardom_boutique/",
            },
            right: {
                route: "https://www.instagram.com/stardom_boutique/",
                button: "<span className='font-bold'>#</span>Oversized denim shirt",
                img: "right",
            },
        },
        goodprice: {
            left: {
                image: "left",
                title: "2023 SPRING",
                text: "#Flower Embroidered denim shirt",
                route: "https://www.instagram.com/stardom_boutique/",
            },
            right: {
                route: "https://www.instagram.com/stardom_boutique/",
                button: "<span className='font-bold'>#</span>Oversized denim shirt",
                img: "right",
            },
        },
        california: {
            left: {
                image: "left",
                title: "",
                text: "",
                route: "",
            },
            right: {
                route: "https://www.instagram.com/stardom_boutique/",
                button: "<span className='font-bold'>#</span>Oversized denim shirt",
                img: "right",
            },
        },
    };

    return (
        <div className="flex flex-col gap-y-1 md:grid md:grid-cols-5 gap-x-1 md:place-items-stretch">
            <Fade
                transition={{ y: -200, delay: 0 }}
                className="col-span-3 w-full h-full relative text-white "
            >
                <img
                    src={`/images/service/${brand}/${
                        content[brand as keyof Brand]?.left?.image
                    }.jpg`}
                    alt="spa"
                    className="rounded-xl h-full w-full"
                />
                <div className="absolute shadow-text bottom-8 left-5 right-5">
                    <div className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-wide font-light">
                        {content[brand as keyof Brand]?.left?.title}
                    </div>
                    <div className="text-smaller sm:text-xs md:text-sm lg:text-base xl:text-xl font-normal pb-1 sm:pb-5 text-justify">
                        {parse(content[brand as keyof Brand]?.left?.text)}
                    </div>
                    {brand !== "california" && (
                        <button
                            onClick={() =>
                                onLinkClick(
                                    content[brand as keyof Brand]?.left?.route
                                )
                            }
                            className="border-2 shadow py-1.5 px-3  rounded-3xl text-xs md:text-sm lg:text-base font-semibold"
                        >
                            Learn more
                        </button>
                    )}
                </div>
            </Fade>
            <Fade
                transition={{ y: 200, delay: 0.1 }}
                onClick={() =>
                    onLinkClick(content[brand as keyof Brand]?.right?.route)
                }
                className="md:col-span-2 cursor-pointer relative aspect-square"
            >
                {brand === "california" ? (
                    <div className="absolute flex flex-col items-center gap-y-5 top-1/2 w-full px-10 -translate-y-1/2">
                        <div className="text-smaller md:text-xs lg:text-base xl:text-xl text-center">
                            To ensure the highest quality of cuisine, a
                            Michelin-starred chef from the United States works
                            as the head chef.
                        </div>
                        <div className="border-black text-xs md:text-sm lg:text-base xl:text-xl border rounded-3xl p-2 font-medium">
                            VIEW OUR MENU
                        </div>
                    </div>
                ) : (
                    <>
                        <div className="gradient-bg"></div>
                        <div className="absolute z-20 right-0 font-light text-end whitespace-nowrap text-smaller md:text-xs lg:text-base xl:text-xl">
                            <div className="bg-white rounded-bl-xl px-2 py-1 sm:py-2">
                                {parse(
                                    content[brand as keyof Brand]?.right?.button
                                )}
                            </div>
                        </div>
                        <img
                            src={`/images/service/${brand}/${
                                content[brand as keyof Brand]?.right?.img
                            }.jpg`}
                            alt="baga tenger"
                            className="rounded-xl h-full w-full"
                        />
                    </>
                )}
            </Fade>
        </div>
    );
}
