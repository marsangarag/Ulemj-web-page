import Fade from "components/layout/fade";
import { useRouter } from "next/router";

export default function UlemjCards() {
    const router = useRouter();
    return (
        <div className="flex flex-col gap-y-1 md:grid md:grid-cols-12 gap-x-1 md:place-items-stretch">
            <Fade
                transition={{ y: -200, delay: 0 }}
                className="md:col-span-5 relative w-full"
            >
                <img
                    src={`/images/salon/ulemj/left.jpg`}
                    alt="beauty"
                    className="rounded-xl h-full w-full aspect-auto"
                />
                <div className="absolute bottom-5 left-5 right-5 flex flex-col gap-y-2.5 text-white items-start">
                    <div className="flex flex-col gap-y-1">
                        <div className="text-xl sm:text-3xl lg:text-4xl xl:text-6xl font-light tracking-wide">
                            Ulemj Buildings
                        </div>
                        <div className="text-smaller sm:text-xs md:text-sm lg:text-base xl:text-xl">
                            Construction and manufacturing
                        </div>
                    </div>
                </div>
            </Fade>
            <div className="md:col-span-3 flex md:flex-col gap-1 flex-row items-stretch">
                <Fade
                    transition={{ y: 200, delay: 0.1 }}
                    className={`  w-1/2 md:w-full md:h-full relative`}
                >
                    <img
                        src={`/images/salon/ulemj/top.jpg`}
                        alt="nail"
                        className="rounded-xl h-full w-full"
                    />

                    <div className="text-smaller text-white text-justify px-4 absolute top-1/2 -translate-y-1/2 sm:text-xs xl:text-base">
                        “Ulemj” is the Mongolian word for “Great”, “Giant”, and
                        “Perfection” which often indicates the quality and size
                        of things that align with our quality and services.
                    </div>
                </Fade>
                <Fade
                    transition={{ y: -200, delay: 0.2 }}
                    className={`aspect-auto rounded-xl relative w-1/2 md:w-full md:h-full `}
                >
                    <img
                        src={`/images/salon/ulemj/bottom.jpg`}
                        alt="nail"
                        className="rounded-xl h-full w-full"
                    />
                    <div className="absolute h-full w-full text-white  inset-0 p-4 text-justify md:p-6 flex flex-col justify-between">
                        <div className="text-smaller sm:text-xs  xl:text-base">
                            Since its establishment in 1991, ULEMJ LLC has been
                            expanding its range in the direction of supplying
                            high-quality and reliable products to foreign and
                            domestic trade and service industries.
                        </div>
                        <div
                            onClick={() => router.push("/about")}
                            className="self-end border-white border rounded-3xl py-2 px-3 text-smaller sm:text-sm xl:text-base"
                        >
                            About
                        </div>
                    </div>
                </Fade>
            </div>
            <Fade
                transition={{ y: 200, delay: 0.3 }}
                className="md:col-span-4 relative w-full "
            >
                <img
                    src={`/images/salon/ulemj/right.jpg`}
                    alt="hair"
                    className="rounded-xl h-full w-full aspect-auto"
                />
                <div className="absolute inset-0 px-5 py-10 h-full flex flex-col justify-between text-white items-start">
                    <div className="flex flex-col gap-y-1 md:gap-y-1.5">
                        <div className="text-xl sm:text-3xl font-normal tracking-wide">
                            Trade
                        </div>
                        <div className="text-xl sm:text-3xl font-normal tracking-wide">
                            Service
                        </div>
                        <div className="text-xl sm:text-3xl font-normal tracking-wide">
                            Design
                        </div>
                        <div className="text-xl sm:text-3xl font-normal tracking-wide">
                            Construction
                        </div>
                    </div>
                    <div className="self-end flex flex-col gap-y-2.5 items-end">
                        <div className="text-xl sm:text-3xl font-normal tracking-wide">
                            1991
                        </div>
                        <div className="font-light text-smaller sm:text-sm xl:text-base">
                            Ulemj Quality guaranteed
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    );
}
