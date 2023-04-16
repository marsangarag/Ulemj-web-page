import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Service() {
    const onLinkClick = (link: string) => {
        window.open(link, "_blank", "noreferrer");
    };
    return (
        <motion.div
            onContextMenu={(e) => e.preventDefault()}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                type: "spring",
                stiffness: 100,
                damping: 50,
                duration: 0.5,
            }}
            viewport={{ once: true }}
            className="flex flex-col gap-y-1 md:grid md:grid-cols-5 gap-x-1 md:place-items-stretch"
        >
            <div className="col-span-3 w-full h-full relative text-white ">
                {/* <Image
                    src={"/images/spa.jpg"}
                    alt="spa"
                    className="rounded-xl w-full h-full"
                    fill
                /> */}
                <img
                    src="/images/service/spa.jpg"
                    alt="spa"
                    className="rounded-xl h-full w-full"
                />
                <div className="absolute bottom-8 left-6">
                    <p className="text-xl sm:text-3xl tracking-wide font-light">
                        Grease Wellness
                    </p>
                    <p className="text-smaller font-normal pb-5">
                        at Shangri-La Ulaanbaatar, Mongolia
                    </p>
                    <button
                        onClick={() =>
                            onLinkClick(
                                "http://appointment.ulemjgrease.com/salon-profile/wellness/"
                            )
                        }
                        className="border-2 py-1.5 px-3 rounded-3xl text-xs font-semibold"
                    >
                        Learn more
                    </button>
                </div>
            </div>
            <div
                onClick={() =>
                    onLinkClick(
                        "http://appointment.ulemjgrease.com/salon-profile/egulen/"
                    )
                }
                className="md:col-span-2 cursor-pointer relative"
            >
                <div className="bg-white  absolute z-20 right-0 -top-1 font-light px-3 py-1 text-sm rounded-bl-xl">
                    <span className="font-bold">Grease VIP</span> at Baga tenger
                </div>
                {/* <Image
                    src="/images/service/baga_tenger.jpg"
                    className="rounded-xl"
                    fill
                    alt="baga-tenger"
                /> */}
                <img
                    src="/images/service/baga_tenger.jpg"
                    alt="baga tenger"
                    className="rounded-xl h-full w-full"
                />
            </div>
        </motion.div>
    );
}
