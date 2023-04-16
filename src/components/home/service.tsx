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
    };

    return (
        <div className="flex flex-col gap-y-1 md:grid md:grid-cols-5 gap-x-1 md:place-items-stretch">
            <Fade
                transition={{ y: -200, delay: 0 }}
                className="col-span-3 w-full h-full relative text-white "
            >
                <img
                    src={`/images/service/${brand}/spa.jpg`}
                    alt="spa"
                    className="rounded-xl h-full w-full"
                />
                <div className="absolute bottom-8 left-5">
                    <p className="text-xl sm:text-3xl tracking-wide font-light">
                        {content[brand as keyof Brand]?.left?.title}
                    </p>
                    <p className="text-smaller font-normal pb-5">
                        {content[brand as keyof Brand]?.left?.text}
                    </p>
                    <button
                        onClick={() =>
                            onLinkClick(
                                content[brand as keyof Brand]?.left?.route
                            )
                        }
                        className="border-2 py-1.5 px-3 rounded-3xl text-xs font-semibold"
                    >
                        Learn more
                    </button>
                </div>
            </Fade>
            <Fade
                transition={{ y: 200, delay: 0.1 }}
                onClick={() =>
                    onLinkClick(
                        "http://appointment.ulemjgrease.com/salon-profile/egulen/"
                    )
                }
                className="md:col-span-2 cursor-pointer relative"
            >
                <div className="bg-white  absolute z-20 right-0 -top-1 font-light px-3 py-1 text-sm rounded-bl-xl">
                    {parse(content[brand as keyof Brand]?.right?.button)}
                </div>
                <img
                    src={`/images/service/${brand}/${
                        content[brand as keyof Brand]?.right?.img
                    }.jpg`}
                    alt="baga tenger"
                    className="rounded-xl h-full w-full"
                />
            </Fade>
        </div>
    );
}
