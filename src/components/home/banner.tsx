import Image from "next/image";
import { color, motion } from "framer-motion";
import { useEffect } from "react";
import { useAppState } from "lib/context/app";
import { Slogan } from "lib/types/slogan.type";
import { Brand } from "lib/types/brand.type";
import { colorCodes } from "lib/helper";

export default function Banner({ brand }: { brand: string }) {
    const slogans = {
        grease: {
            bold1: "Ulemj grease LLC",
            bold2: "25th anniversary.",
            text: "is a leading company with great experience in the sector of nail, beauty spa and hair salons in Mongolia at its ",
            button1: {
                title: "Shop now",
                route: "https://shop.ulemjgrease.com/",
            },
            button2: {
                title: "Online booking",
                route: "http://appointment.ulemjgrease.com/",
            },
        },
        pharm: {
            bold1: "Ulemj pharm LLC",
            bold2: "since 2016.",
            text: "is a renowned establishment that has been operating ",
            button1: {
                title: "Shop now",
                route: "https://shop.ulemjgrease.com/",
            },
            button2: null,
        },
    };

    const onButtonClick = (link?: string) => {
        if (link) {
            window.open(link, "_blank", "noreferrer");
        }
    };

    return (
        <motion.div className="relative w-full text-white">
            <div className="relative">
                <video
                    onContextMenu={(e) => e.preventDefault()}
                    className="w-full aspect-video overflow-hidden rounded-xl relative"
                    autoPlay={true}
                    loop
                    muted
                    src={`/video/${brand}.mp4`}
                />
                <motion.div
                    initial={{ scaleY: 1 }}
                    animate={{ scaleY: 0 }}
                    style={{ transformOrigin: "top" }}
                    transition={{ duration: 0.7, ease: "linear" }}
                    className="absolute w-full h-1/2 top-0 left-0 z-20 bg-white"
                ></motion.div>
                <motion.div
                    initial={{ scaleY: 1 }}
                    animate={{ scaleY: 0 }}
                    style={{ transformOrigin: "bottom" }}
                    transition={{ duration: 0.7, ease: "linear" }}
                    className="absolute w-full h-1/2 bottom-0 left-0 z-20 bg-white"
                ></motion.div>
            </div>
            <div className="absolute bottom-1/3 left-5 md:left-10 text-smaller font-light text-justify w-[40%] md:w-2/5 sm:text-lg md:text-xl xl:text-3xl shadow-text">
                <span className="font-medium">
                    {slogans[brand as keyof Brand]?.bold1}{" "}
                </span>
                {slogans[brand as keyof Brand]?.text}
                <span className="font-medium">
                    {slogans[brand as keyof Brand]?.bold2}
                </span>
            </div>

            <motion.div
                initial={{ x: -500 }}
                animate={{ x: 0 }}
                transition={{
                    delay: 0.7,
                    type: "spring",
                    stiffness: 500,
                    damping: 50,
                }}
                className="w-full text-smaller sm:text-xs md:text-sm font-medium px-4 md:px-8 absolute bottom-4 md:bottom-10 flex justify-start gap-x-2.5 items-center"
            >
                {slogans[brand as keyof Brand]?.button2 ? (
                    <div
                        onClick={() =>
                            onButtonClick(
                                slogans[brand as keyof Brand]?.button2?.route
                            )
                        }
                        className="cursor-pointer shadow-text bg-transparent rounded-3xl border-white border p-2.5"
                    >
                        {slogans[brand as keyof Brand]?.button2?.title}
                    </div>
                ) : null}
                <div
                    onClick={() =>
                        onButtonClick(
                            slogans[brand as keyof Brand]?.button1?.route
                        )
                    }
                    className={`cursor-pointer ${
                        colorCodes[brand as keyof Brand]?.button
                    } rounded-3xl border ${
                        colorCodes[brand as keyof Brand]?.["button-border"]
                    } py-2.5 px-4`}
                >
                    {slogans[brand as keyof Brand]?.button1?.title}
                </div>
            </motion.div>
        </motion.div>
    );
}
