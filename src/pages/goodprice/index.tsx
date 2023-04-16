import Banner from "components/home/banner";
import Carousel from "components/home/carousel";
import Companies from "components/home/companies";
import Products from "components/home/product";
import Image from "next/image";
import GoodpriceCards from "components/goodprice/cards";

export default function Goodprice() {
    const upperCase = (text: string) => {
        return text.toUpperCase();
    };
    return (
        <div className="flex flex-col gap-y-2.5 ">
            <Banner images={["deed1", "deed2", "deed3"]} brand="goodprice" />

            <Image
                src={"/icons/goodprice.png"}
                alt="goodprice"
                width={100}
                height={50}
                className="mx-auto"
            />
            <div className="self-center px-5 text-center text-xs sm:text-sm md:text-base lg:text-lg">
                {upperCase(
                    "The Good Price Market’s motto is to respect the customer and value quality. With its commitment to providing excellent service, high-quality products, and a focus on international trading."
                )}
            </div>
            <GoodpriceCards />
            <Products brand="goodprice" />
            <Companies />
            <Carousel brand="goodprice" />
        </div>
    );
}
