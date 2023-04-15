import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useAppState } from "lib/context/app";

export default function Banner() {
    const { window, lang } = useAppState();
    const { width, height } = window || {};

    return (
        <motion.div className="relative w-full text-white">
            <div className="relative">
                <video
                    className="w-full aspect-video overflow-hidden rounded-xl relative"
                    autoPlay={true}
                    loop
                    muted
                    src="/video/banner.mp4"
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
            <div className="absolute top-1/3 -translate-y-1/3 md:top-1/2 left-5 md:left-10 md:-translate-y-1/2 text-xs font-light text-justify w-1/3 md:w-2/5  sm:text-sm md:text-base shadow-text">
                <span className="font-medium">Ulemj grease LLC </span>
                is a leading company with great experience in the sector of
                nail, beauty spa and hair salons in Mongolia at its{" "}
                <span className="font-medium rounded-3xl border border-white px-1 pb-0.5">
                    25th anniversary.
                </span>
            </div>

            <motion.div
                initial={{ x: -width }}
                animate={{ x: 0 }}
                transition={{
                    delay: 0.5,
                    type: "spring",
                    stiffness: 500,
                    damping: 50,
                }}
                className="w-full text-smaller sm:text-xs md:text-sm font-medium px-4 md:px-8 absolute bottom-4 md:bottom-10 flex justify-start gap-x-2.5 items-center"
            >
                <div className="cursor-pointer shadow-text bg-transparent rounded-3xl border-white border p-2.5">
                    {lang === "en" ? "Online Booking" : "Цаг захиалах"}
                </div>
                <div className="cursor-pointer bg-black rounded-3xl border border-black py-2.5 px-4">
                    {lang === "en" ? "Shop now" : "Дэлгүүр"}
                </div>
            </motion.div>
        </motion.div>
    );
}
