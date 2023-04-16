import Banner from "components/home/banner";
import Carousel from "components/home/carousel";
import Companies from "components/home/companies";
import Products from "components/home/product";
import RunningText from "components/home/running-text";
import Salon from "components/home/cards";
import Service from "components/home/service";
import MidText from "components/home/mid-text";

export default function California() {
    return (
        <div className="flex flex-col gap-y-2.5 ">
            <Banner images={["deed1", "deed2"]} brand="california" />
            <MidText brand="california" />
            <Salon brand="california" />
            <Service brand="california" />
            <Companies />
            <Carousel brand="california" />
        </div>
    );
}
