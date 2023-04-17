import Banner from "components/home/banner";
import Carousel from "components/home/carousel";
import Companies from "components/home/companies";
import Products from "components/home/product";
import RunningText from "components/home/running-text";
import Salon from "components/home/cards";
import Service from "components/home/service";
import UlemjCards from "components/ulemj/cards";
import MidText from "components/home/mid-text";

export default function Home() {
    return (
        <div className="flex flex-col gap-y-2.5 ">
            <Banner brand="ulemj" />
            <Companies />
            <UlemjCards />
            <MidText brand="ulemj" />
            <Products brand="ulemj" />
            <Service brand="ulemj" />
            <img src="/images/logos/all.jpg" alt="all" />
            <Carousel brand="ulemj" />
        </div>
    );
}
