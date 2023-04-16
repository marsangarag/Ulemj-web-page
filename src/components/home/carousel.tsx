import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import Fade from "components/layout/fade";
import { Brand } from "lib/types/brand.type";

export default function Carousel({ brand }: { brand: string }) {
    const onBannerClick = (link: string) => {
        if (link) {
            window.open(link, "_blank", "noreferrer");
        }
    };
    const banners = {
        grease: {
            route: "https://www.instagram.com/ulemj.grease/",
            photos: [
                "banner00",
                "banner01",
                "banner02",
                "banner03",
                "banner04",
            ],
        },
        pharm: {
            route: "",
            photos: ["banner1"],
        },
        clinic: {
            photos: ["banner1", "banner2", "banner3", "banner4"],
            route: "https://www.instagram.com/ulemj.clinic/",
        },
        stardom: {
            photos: ["banner1"],
            route: "https://www.instagram.com/stardom_boutique/",
        },
        goodprice: {
            photos: ["dood"],
            route: "https://www.facebook.com/goodpricemarket ",
        },
    };
    return (
        <Fade className="" transition={{ y: 250, delay: 0 }}>
            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
            >
                {banners[brand as keyof Brand]?.photos?.map((banner) => {
                    return (
                        <SwiperSlide
                            onContextMenu={(e) => e.preventDefault()}
                            className={`${
                                banners[brand as keyof Brand]?.route &&
                                "cursor-pointer"
                            } `}
                            onClick={() =>
                                onBannerClick(
                                    banners[brand as keyof Brand]?.route
                                )
                            }
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
        </Fade>
    );
}
