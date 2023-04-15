import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Banner() {
    // const banner =
    //     document && document?.getElementById("banner-image")?.offsetHeight;
    // useEffect(() => {
    //     console.log(banner);
    // }, [banner]);

    return (
        <motion.div
            // data-aos="fade-up"
            className="relative w-full  text-white"
        >
            <motion.img
                initial={{ height: 0 }}
                animate={{ height: "100%" }}
                transition={{ duration: 2 }}
                src={"/images/banner.jpg"}
                className="rounded-3xl w-full aspect-video grayscale hover:grayscale-0 transition-all duration-500 ease-in-out"
                alt="banner"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-lg sm:text-4xl md:text-6xl">
                Simplicity is the ultimate sophistication
            </div>
            <div className="w-full text-xs sm:text-sm md:text-base  px-4 md:px-10 absolute top-4 md:top-10 flex justify-between items-center">
                <div>asdasdasd</div>
                <div> asdhasdhsad</div>
            </div>
            <div className="w-full text-xs sm:text-sm md:text-base  px-4 md:px-10 absolute bottom-4 md:bottom-10 flex justify-between items-center">
                <div>asdasdasd</div>
                <div> asdhasdhsad</div>
            </div>
        </motion.div>
    );
}
