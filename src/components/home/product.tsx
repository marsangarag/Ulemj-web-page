import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import Fade from "components/layout/fade";
import { Brand } from "lib/types/brand.type";
import { useRouter } from "next/router";

export default function Products({ brand }: { brand: string }) {
    const router = useRouter();
    const products = {
        grease: [
            {
                name: "Lotion P5",
                price: "242.900₮",
                link: "https://shop.ulemjgrease.com/products/9256/92988",
            },

            {
                name: "Cyfolia",
                price: "189.900₮",
                link: "https://shop.ulemjgrease.com/products/9256/91692",
            },
            {
                name: "White Lumination",
                price: "173.900₮",
                link: "https://shop.ulemjgrease.com/products/9584/92806",
            },
            {
                name: "Structruriste",
                price: "219.900₮",
                link: "https://shop.ulemjgrease.com/products/9584/92600",
            },
            {
                name: "Line repair Teraskin+HA",
                price: "50.900₮",
                link: "https://shop.ulemjgrease.com/products/9256/35743",
            },
            {
                name: "Wish Absolute Confidence",
                price: "219.900₮",
                link: "https://shop.ulemjgrease.com/products/9256/35615",
            },
        ],
        pharm: [
            {
                name: "Shave Relief Balm",
                price: "31.900₮",
                link: "https://shop.ulemjgrease.com/products/9583/34469",
            },

            {
                name: "3 Action with hemp seed oil",
                price: "178.900₮",
                link: "https://shop.ulemjgrease.com/products/9583/35568",
            },
            {
                name: "Instant lift eye mask",
                price: "28.900₮",
                link: "https://shop.ulemjgrease.com/products/9256/87064",
            },
            {
                name: "Goli - Supergreens gummies",
                price: "89.000₮",
                link: "https://shop.ulemjgrease.com/products/null/179442",
            },
        ],
        clinic: [
            {
                price: "Injection therapy",
                name: "MCCM Mesotherapy",
                link: "http://appointment.ulemjgrease.com/salon-profile/clinic/services?id=29",
            },

            {
                price: "Skin solution",
                name: "Lumenis Stellar M22",
                link: "http://appointment.ulemjgrease.com/salon-profile/clinic/blogs/13",
            },
            {
                price: "Rejuvenation",
                name: "Lifting",
                link: "http://appointment.ulemjgrease.com/salon-profile/clinic/blogs/18",
            },
            {
                price: "Skin tightening",
                name: "Ultherapy",
                link: "http://appointment.ulemjgrease.com/salon-profile/clinic/blogs/19 ",
            },
        ],
        stardom: [
            {
                name: "product1",
                price: "",
                link: "https://www.instagram.com/stardom_boutique/",
            },
            {
                name: "product2",
                price: "",
                link: "https://www.instagram.com/stardom_boutique/",
            },
            {
                name: "product3",
                price: "",
                link: "https://www.instagram.com/stardom_boutique/",
            },
            {
                name: "product4",
                price: "",
                link: "https://www.instagram.com/stardom_boutique/",
            },
            {
                name: "product5",
                price: "",
                link: "https://www.instagram.com/stardom_boutique/",
            },
        ],
        goodprice: [
            {
                name: "Imported products",
                price: "Beverages",
                link: "https://www.instagram.com/stardom_boutique/",
            },
            {
                name: "Natural Fruits & Vegetables",
                price: "Sustainable",
                link: "https://www.instagram.com/stardom_boutique/",
            },
            {
                name: "Organic Food",
                price: "Healthy eating",
                link: "https://www.instagram.com/stardom_boutique/",
            },
            {
                name: "Fresh Bakery",
                price: "Healthy lifestyle",
                link: "https://www.instagram.com/stardom_boutique/",
            },
        ],
        california: [
            {
                name: "Imported products",
                price: "Beverages",
                link: "https://www.instagram.com/stardom_boutique/",
            },
            {
                name: "Natural Fruits & Vegetables",
                price: "Sustainable",
                link: "https://www.instagram.com/stardom_boutique/",
            },
            {
                name: "Organic Food",
                price: "Healthy eating",
                link: "https://www.instagram.com/stardom_boutique/",
            },
            {
                name: "Fresh Bakery",
                price: "Healthy lifestyle",
                link: "https://www.instagram.com/stardom_boutique/",
            },
        ],
        ulemj: [
            {
                name: "Fine dining",
                price: "California",
                link: "/california",
            },
            {
                name: "Fashion retail",
                price: "Stardom",
                link: "/stardom",
            },
            {
                name: "Beauty Spa",
                price: "Ulemj grease",
                link: "/grease",
            },
            {
                name: "High-quality products & service",
                price: "GoodPrice",
                link: "/goodprice",
            },
            {
                name: "Dermatology clinic",
                price: "Ulemj Clinic",
                link: "/clinic",
            },
            {
                name: "Pharmacy",
                price: "Ulemj Pharm",
                link: "/pharm",
            },
        ],
    };

    const onShopClick = (link: string) => {
        if (link) {
            if (link.includes("http")) {
                window.open(link, "_blank", "noreferrer");
            } else {
                router.push(link);
            }
        }
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
                            <div className="h-full w-full absolute inset-0 sm:bg-gradient-to-b from-transparent to-black/40 rounded-xl"></div>
                            {product?.price ? (
                                <>
                                    <div className="relative h-full w-full">
                                        <div className="absolute text-smaller sm:text-xs md:text-sm lg:text-base xl:text-lg bottom-4 sm:top-auto text-white w-full md:px-4 px-2 flex items-center justify-between">
                                            <div className="hidden sm:flex sm:flex-col shadow-text">
                                                <div className="font-light">
                                                    {product?.name}
                                                </div>
                                                <div className="font-bold">
                                                    {product?.price}
                                                </div>
                                            </div>
                                            {brand !== "goodprice" && (
                                                <div
                                                    onClick={() =>
                                                        onShopClick(
                                                            product?.link
                                                        )
                                                    }
                                                    className="rounded-3xl cursor-pointer border border-white py-1 px-1 md:px-2.5 lg:px-5"
                                                >
                                                    {brand === "clinic" ||
                                                    brand === "ulemj"
                                                        ? "More"
                                                        : "Shop"}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="sm:hidden text-black bottom-10 sm:bottom-0 text-smaller sm:text-xs md:text-sm lg:text-base xl:text-lg w-full  flex flex-col md:flex-row gap-y-1">
                                        <div className="flex flex-col shadow-text">
                                            <div className="font-bold">
                                                {product?.price}
                                            </div>
                                            <div>{product?.name}</div>
                                        </div>
                                    </div>
                                </>
                            ) : null}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Fade>
    );
}
