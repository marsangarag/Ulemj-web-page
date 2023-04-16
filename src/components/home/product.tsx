import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import Fade from "components/layout/fade";
import { Brand } from "lib/types/brand.type";

export default function Products({ brand }: { brand: string }) {
    const products = {
        grease: [
            {
                name: "Lotion P5",
                price: "242.900",
                link: "https://shop.ulemjgrease.com/products/9256/92988",
            },

            {
                name: "Cyfolia",
                price: "189.900",
                link: "https://shop.ulemjgrease.com/products/9256/91692",
            },
            {
                name: "White Lumination",
                price: "173.900",
                link: "https://shop.ulemjgrease.com/products/9584/92806",
            },
            {
                name: "Structruriste",
                price: "219.900",
                link: "https://shop.ulemjgrease.com/products/9584/92600",
            },
            {
                name: "Line repair Teraskin+HA",
                price: "50.900",
                link: "https://shop.ulemjgrease.com/products/9256/35743",
            },
            {
                name: "Wish Absolute Confidence",
                price: "219.900",
                link: "https://shop.ulemjgrease.com/products/9256/35615",
            },
        ],
        pharm: [
            {
                name: "Shave Relief Balm",
                price: "31.900",
                link: "https://shop.ulemjgrease.com/products/9583/34469",
            },

            {
                name: "3 Action with hemp seed oil",
                price: "178.900",
                link: "https://shop.ulemjgrease.com/products/9583/35568",
            },
            {
                name: "Instant lift eye mask",
                price: "28.900",
                link: "https://shop.ulemjgrease.com/products/9256/87064",
            },
            {
                name: "Goli - Supergreens gummies",
                price: "89.000",
                link: "https://shop.ulemjgrease.com/products/null/179442",
            },
        ],
    };

    const onShopClick = (link: string) => {
        window.open(link, "_blank", "noreferrer");
    };

    return (
        <Fade className="" transition={{ y: -50, delay: 0 }}>
            <Swiper
                spaceBetween={4}
                slidesPerView={4}
                centeredSlides={false}
                grabCursor={true}
                resistanceRatio={0}
            >
                {products[brand as keyof Brand]?.map((product) => (
                    <SwiperSlide key={product.name}>
                        <div
                            onContextMenu={(e) => e.preventDefault()}
                            key={product.name}
                            className="flex flex-col gap-y-1 sm:block relative"
                        >
                            <img
                                src={`/images/products/${brand}/${product.name}.jpg`}
                                alt={product.name}
                                // className="min-w-[250px] min-h-[360px] sm:min-w-[333px] sm:min-h-[458px] rounded-xl"
                                className="rounded-xl  w-full h-full aspect-auto "
                            />
                            <div className="absolute inset-0 w-full rounded-xl h-full bg-gradient-to-b from-transparent to-black/40"></div>
                            <div className="relative h-full w-full">
                                <div className="absolute text-smaller sm:text-xs md:text-sm lg:text-base xl:text-lg sm:bottom-4 bottom-2.5 sm:top-auto text-white w-full md:px-4 px-2 flex items-center justify-between">
                                    <div className="hidden sm:flex sm:flex-col shadow-text">
                                        <div>{product?.name}</div>
                                        <div className="font-medium">
                                            {product?.price}₮
                                        </div>
                                    </div>
                                    <div
                                        onClick={() =>
                                            onShopClick(product?.link)
                                        }
                                        className="rounded-3xl cursor-pointer border border-white py-1 px-1 md:px-2.5"
                                    >
                                        Shop
                                    </div>
                                </div>
                            </div>
                            <div className="sm:hidden text-black bottom-10 sm:bottom-0 text-smaller sm:text-xs md:text-sm lg:text-base xl:text-lg w-full  flex flex-col md:flex-row gap-y-1">
                                <div className="flex flex-col shadow-text">
                                    <div className="font-medium">
                                        {product?.price}₮
                                    </div>
                                    <div>{product?.name}</div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Fade>
    );
}
