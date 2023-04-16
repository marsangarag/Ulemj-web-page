import Banner from "components/home/banner";
import Carousel from "components/home/carousel";
import Companies from "components/home/companies";
import Products from "components/home/product";
import RunningText from "components/home/running-text";
import Salon from "components/home/cards";
import Service from "components/home/service";
import { useAppState } from "lib/context/app";
import MidText from "components/home/mid-text";

export default function Goodprice() {
    return (
        <div className="flex flex-col gap-y-2.5 ">
            <Banner brand="clinic" />
            <RunningText
                images={[
                    "lumenis",
                    "mccm",
                    "koru",
                    "ultherapy",
                    "aurora",
                    "bio",
                    "koizumi",
                ]}
            />
            <Salon brand="clinic" />
            <MidText brand="clinic" />
            <Products brand="clinic" />
            <Service brand="clinic" />
            <Companies />
            <Carousel brand="clinic" />
        </div>
    );
}
