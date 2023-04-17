import Image from "next/image";
import { motion } from "framer-motion";
import { Brand } from "lib/types/brand.type";
import { colorCodes } from "lib/helper";
import parse from "html-react-parser";
import Fade from "components/layout/fade";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

export default function Banner({
    brand,
    images,
}: {
    brand: string;
    images?: string[];
}) {
    const slogans = {
        grease: {
            text: "<span className='font-medium'>Ulemj grease LLC</span> is a leading company with great experience in the sector of nail, beauty spa and hair salons in Mongolia at its <span className='font-medium'>25th anniversary.</span>",
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
            text: "<span className='font-medium'>Ulemj pharm LLC</span> is a leading company with great experience in the sector of nail, beauty spa and hair salons in Mongolia at its <span className='font-medium'>since 2016.</span>",
            button1: {
                title: "Shop now",
                route: "https://shop.ulemjgrease.com/",
            },
            button2: null,
        },
        stardom: {
            text: "<span className='font-medium'>Stardom Boutique</span> has been making waves in the fashion industry since its establishment in <span className='font-medium'>2014</span>. With its first branch located in Ulaanbaatar City Department Store, futher expanded  <span className='font-medium'>in Shangri-la Shopping Centre.</span>",
            button1: {
                title: "Shop Now",
                route: "https://www.instagram.com/stardom_boutique/",
            },
            button2: null,
        },
        clinic: {
            text: "We provide top-quality beauty treatments, adhering to international standarts and ensuring a safe and comfortable experience for clients",
            button1: {
                title: "Appointment",
                route: "http://appointment.ulemjgrease.com/salon-profile/clinic/",
            },
            button2: null,
        },
        goodprice: {
            text: "Choose the <span className='font-bold'>best healthier</span> way of life",
            button1: {
                title: "Discover Now »",
                route: "https://www.facebook.com/goodpricemarket/",
            },
            button2: null,
        },
        california: {
            text: "<span className='font-bold'>The California Restaurant</span>  was established in 2002 with a unique American-style environment that evokes the atmosphere of California.",
            button1: {
                title: "Table reservation",
                route: "tel:+97611319031",
            },
            button2: {
                title: "View our menu",
                route: "https://qrmenu.mn/menu/ODQy",
            },
        },
        ulemj: { text: "", button1: null, button2: null },
    };

    const onButtonClick = (link?: string) => {
        if (link) {
            window.open(link, "_blank", "noreferrer");
        }
    };

    return (
        <div className="relative w-full text-white">
            <div className="relative">
                {images && images?.length > 0 ? (
                    <>
                        <div className="gradient-bg z-30"></div>
                        <Swiper
                            modules={[Pagination, Autoplay]}
                            spaceBetween={50}
                            slidesPerView={1}
                            pagination={{ clickable: true }}
                            scrollbar={{ draggable: true }}
                            loop={true}
                            autoplay={{
                                delay: 4000,
                                disableOnInteraction: false,
                            }}
                        >
                            {images?.map((banner) => {
                                return (
                                    <SwiperSlide
                                        onContextMenu={(e) =>
                                            e.preventDefault()
                                        }
                                        className={`${
                                            images && "cursor-pointer"
                                        } `}
                                        // onClick={() =>
                                        //     onBannerClick(
                                        //         banners[brand as keyof Brand]
                                        //             ?.route
                                        //     )
                                        // }
                                        key={banner}
                                    >
                                        <img
                                            src={`/images/carousel/${brand}/${banner}.jpg`}
                                            alt={banner}
                                            className="rounded-2xl mx-auto"
                                        />
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </>
                ) : (
                    <video
                        onContextMenu={(e) => e.preventDefault()}
                        className="w-full aspect-video overflow-hidden rounded-xl relative"
                        autoPlay={true}
                        loop
                        muted
                        src={`/video/${brand}.mp4`}
                    />
                )}
                <motion.div
                    initial={{ scaleY: 1 }}
                    animate={{ scaleY: 0 }}
                    style={{ transformOrigin: "top" }}
                    transition={{ duration: 0.7, ease: "linear" }}
                    className="absolute  w-full h-1/2 top-0 left-0 z-20 bg-white"
                ></motion.div>
                <motion.div
                    initial={{ scaleY: 1 }}
                    animate={{ scaleY: 0 }}
                    style={{ transformOrigin: "bottom" }}
                    transition={{ duration: 0.7, ease: "linear" }}
                    className="absolute  w-full h-1/2 bottom-0 left-0 z-20 bg-white"
                ></motion.div>
            </div>
            {slogans[brand as keyof Brand].text ? (
                <>
                    <div className="absolute z-30 text-shadow bottom-1/3 left-5 md:left-10 text-smaller font-light text-justify w-[40%] md:w-2/5 sm:text-lg md:text-xl xl:text-3xl shadow-text">
                        {parse(slogans[brand as keyof Brand]?.text)}
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
                        className="w-full text-smaller sm:text-xs md:text-sm font-medium px-4 md:px-8 absolute bottom-4 md:bottom-10 z-30 flex justify-start gap-x-2.5 items-center"
                    >
                        {slogans[brand as keyof Brand]?.button2 ? (
                            <div
                                onClick={() =>
                                    onButtonClick(
                                        slogans[brand as keyof Brand]?.button2
                                            ?.route
                                    )
                                }
                                className={`cursor-pointer shadow-text bg-transparent rounded-3xl border-white border p-2.5 ${
                                    colorCodes[brand as keyof Brand].color
                                }`}
                            >
                                {slogans[brand as keyof Brand]?.button2?.title}
                            </div>
                        ) : null}
                        <div
                            onClick={() =>
                                onButtonClick(
                                    slogans[brand as keyof Brand]?.button1
                                        ?.route
                                )
                            }
                            className={`cursor-pointer shadow ${
                                colorCodes[brand as keyof Brand]?.button
                            } rounded-3xl border ${
                                colorCodes[brand as keyof Brand]?.[
                                    "button-border"
                                ]
                            } ${
                                colorCodes[brand as keyof Brand].color
                            } py-2.5 px-4`}
                        >
                            {slogans[brand as keyof Brand]?.button1?.title}
                        </div>
                    </motion.div>
                </>
            ) : null}
        </div>
    );
}
