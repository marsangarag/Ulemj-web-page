import Banner from "components/home/banner";
import Carousel from "components/home/carousel";
import Companies from "components/home/companies";
import MidText from "components/home/mid-text";
import Products from "components/home/product";
import RunningText from "components/home/running-text";
import Salon from "components/home/cards";
import Service from "components/home/service";

export default function Pharm() {
    return (
        <div className="flex flex-col gap-y-2.5 ">
            <Banner brand="pharm" />
            <RunningText
                images={[
                    "phytomer",
                    "lumenis",
                    "bodyography",
                    "ionto",
                    "cuccio",
                    "orly",
                    "hantesis",
                    "christina",
                    "lpg",
                    "woody",
                    "gigi",
                    "goli",
                    "byebyeblemish",
                ]}
            />
            <Salon brand="pharm" />
            <MidText brand="pharm" />
            <Products brand="pharm" />
            <Service brand="pharm" />
            <Companies />
            <Carousel brand="pharm" />
        </div>
    );
}
