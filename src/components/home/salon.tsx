import Image from "next/image";
import { motion } from "framer-motion";
import { useAppState } from "lib/context/app";

export default function Salon({ brand }: { brand: string }) {
    const onButtonClick = (link: string) => {
        window.open(link, "_blank", "noreferrer");
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
        },
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                type: "spring",
                stiffness: 100,
                damping: 50,
            }}
            viewport={{ once: true }}
            onContextMenu={(e) => e.preventDefault()}
            className="flex flex-col gap-y-1 md:grid md:grid-cols-12 gap-x-1 md:place-items-stretch"
        >
            <div className="md:col-span-5 relative w-full ">
                <img
                    src="/images/salon/beauty.jpg"
                    alt="beauty"
                    className="rounded-xl h-full w-full aspect-auto"
                />
                <div className="absolute bottom-5 left-5 right-5 flex flex-col gap-y-2.5 text-white items-start">
                    <div className="flex flex-col gap-y-1">
                        <div className="text-xl sm:text-3xl font-light tracking-wide">
                            Beauty Spa
                        </div>
                        <div className="text-smaller sm:text-xs md:text-sm">
                            Introduction to outstanding beauty services
                        </div>
                    </div>
                    <div
                        onClick={() =>
                            onButtonClick(
                                "http://appointment.ulemjgrease.com/appointments?business_type=2"
                            )
                        }
                        className={`color cursor-pointer shadow-lg rounded-3xl p-2 text-xs md:text-sm font-medium`}
                    >
                        Beauty Services
                    </div>
                </div>
            </div>
            <div className="md:col-span-3 flex md:flex-col gap-1 flex-row items-stretch">
                <div
                    onClick={() =>
                        onButtonClick(
                            "http://appointment.ulemjgrease.com/appointments?business_type=1"
                        )
                    }
                    className="cursor-pointer w-1/2 md:w-full relative"
                >
                    <img
                        src="/images/salon/nail.jpg"
                        alt="nail"
                        className="rounded-xl aspect-auto"
                    />
                    <div className="bottom-2.5 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4 absolute flex flex-col">
                        <div className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-light tracking-wide">
                            Nails
                        </div>
                        <div className="text-smaller lg:text-xs">
                            Manicure, Pedicure and Treatment
                        </div>
                    </div>
                </div>
                <div className="bg-black aspect-auto text-white rounded-xl p-2.5 sm:p-4 w-1/2 md:w-full md:h-full flex flex-col justify-between items-start gap-y-1.5">
                    <div
                        onClick={() =>
                            onButtonClick("http://appointment.ulemjgrease.com/")
                        }
                        className="rounded-3xl cursor-pointer border border-white text-xs sm:text-sm md:text-base py-2.5 px-3"
                    >
                        Appointment
                    </div>
                    <div className="text-smaller sm:text-xs lg:text-sm xl:text-lg">
                        We served 6000 clients a month and more than 70% of them
                        are lon-Term for more than 3 years. Total clients are
                        potential and 15% of our clients are foreigners, living
                        in Ulaanbaatar.
                    </div>
                </div>
            </div>
            <div className="md:col-span-4 relative w-full ">
                <img
                    src="/images/salon/hair.jpg"
                    alt="hair"
                    className="rounded-xl h-full w-full aspect-auto"
                />
                <div className="absolute bottom-5 left-5 flex flex-col gap-y-2.5 text-white items-start">
                    <div className="flex flex-col gap-y-1">
                        <div className="text-xl sm:text-3xl font-light tracking-wide">
                            Hair Treatment
                        </div>
                        <div className="text-smaller sm:text-xs md:text-sm">
                            Styling & treatment
                        </div>
                    </div>
                    <div
                        onClick={() =>
                            onButtonClick(
                                "http://appointment.ulemjgrease.com/appointments?business_type=3"
                            )
                        }
                        className="bg-white text-black cursor-pointer rounded-3xl p-2 text-xs md:text-sm font-medium"
                    >
                        Hair Services
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
