import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

export default function Carousel() {
    const banners = [
        "banner00",
        "banner01",
        "banner02",
        "banner03",
        "banner04",
    ];
    return (
        <div>
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
                {banners?.map((banner) => {
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
                                src={`/images/carousel/${banner}.jpg`}
                                alt={banner}
                                className="rounded-2xl"
                            />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
}
