import Fade from "components/layout/fade";
import Image from "next/image";

export default function GoodpriceCards() {
    return (
        <div className="pt-5 grid grid-cols-2 text-center gap-y-4 gap-x-1 sm:grid sm:grid-cols-3 place-items-stretch md:place-items-center">
            <Fade
                transition={{ y: -50, delay: 0 }}
                className="flex flex-col gap-y-1.5 items-center md:gap-y-4 w-full"
            >
                <Image
                    src={"/icons/grocery.png"}
                    alt="grocery"
                    width={50}
                    height={50}
                />
                <div className="text-goodprice font-bold text-base md:text-lg lg:text-xl xl:text-2xl">
                    Who We Are
                </div>
                <div className="text-smaller sm:text-xs md:text-sm lg:text-base px-2.5">
                    The Good Price Market is a well-established retail chain
                    that began its operations in 1998
                </div>
            </Fade>
            <Fade
                transition={{ y: 50, delay: 0.1 }}
                className="aspect-[16/12] items-center w-full relative"
            >
                <Image
                    src={"/images/salon/goodprice/body1.jpg"}
                    alt="grocery"
                    fill
                    className=" rounded-xl"
                />
            </Fade>
            <Fade
                transition={{ y: -50, delay: 0.2 }}
                className="flex flex-col gap-y-1.5 items-center  md:gap-y-4 w-full"
            >
                <Image
                    src={"/icons/drink.png"}
                    alt="drink"
                    width={50}
                    height={50}
                />
                <div className="text-goodprice font-bold text-base md:text-lg lg:text-xl xl:text-2xl">
                    What We Grow
                </div>
                <div className="text-smaller sm:text-xs md:text-sm lg:text-base px-2.5">
                    We take special care to select and grow specific crop
                    varieties where exceptional flavor is the focus, with a
                    determination to bring the best-tasting produce.
                </div>
            </Fade>
            <Fade
                transition={{ y: 50, delay: 0.3 }}
                className="aspect-[16/12] items-center w-full relative"
            >
                <Image
                    src={"/images/salon/goodprice/body2.jpg"}
                    alt="grocery"
                    fill
                    className=" rounded-xl"
                />
            </Fade>
            <Fade
                transition={{ y: -50, delay: 0.4 }}
                className="flex flex-col gap-y-1.5 items-center md:gap-y-4 w-full"
            >
                <Image
                    src={"/icons/vegetable.png"}
                    alt="vegetable"
                    width={50}
                    height={50}
                />
                <div className="text-goodprice font-bold text-base md:text-lg lg:text-xl xl:text-2xl">
                    How We Work
                </div>
                <div className="text-smaller sm:text-xs md:text-sm lg:text-base px-2.5">
                    Its commitment to providing excellent service, high-quality
                    products, and a focus on international trade, Good Price
                    Store is an excellent choice for those looking for a
                    reliable and quality retail chain.
                </div>
            </Fade>
            <Fade
                transition={{ y: 50, delay: 0.5 }}
                className="aspect-[16/12] items-center w-full relative"
            >
                <Image
                    src={"/images/salon/goodprice/body3.jpg"}
                    alt="grocery"
                    fill
                    className=" rounded-xl"
                />
            </Fade>
        </div>
    );
}
