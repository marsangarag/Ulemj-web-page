import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

export default function Carousel() {
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
                <SwiperSlide>
                    <img
                        src="/images/carousel/banner00.jpg"
                        className="rounded-2xl"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="/images/carousel/banner01.jpg"
                        className="rounded-2xl"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="/images/carousel/banner02.jpg"
                        className="rounded-2xl"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="/images/carousel/banner03.jpg"
                        className="rounded-2xl"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="/images/carousel/banner04.jpg"
                        className="rounded-2xl"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
