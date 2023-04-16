import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import Fade from "components/layout/fade";
import { Brand } from "lib/types/brand.type";

export default function Carousel({ brand }: { brand: string }) {
    const banners = {
        grease: ["banner00", "banner01", "banner02", "banner03", "banner04"],
        pharm: ["banner1"],
        clinic: ["banner1"],
    };
    return (
        <Fade className="" transition={{ y: -250, delay: 0 }}>
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
                {banners[brand as keyof Brand]?.map((banner) => {
                    return (
                        <SwiperSlide
                            onContextMenu={(e) => e.preventDefault()}
                            className="cursor-pointer"
                            onClick={() =>
                                window.open(
                                    "https://www.instagram.com/ulemj.grease/",
                                    "_blank",
                                    "noreferrer"
                                )
                            }
                            key={banner}
                        >
                            <img
                                src={`/images/carousel/${brand}/${banner}.jpg`}
                                alt={banner}
                                className="rounded-2xl"
                            />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </Fade>
    );
}
