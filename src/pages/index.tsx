import Banner from "components/home/banner";
import Products from "components/home/product";
import RunningText from "components/home/running-text";
import Salon from "components/home/salon";
import Service from "components/home/service";

export default function Home() {
    return (
        <div className="flex flex-col gap-y-2.5">
            <Banner />
            <RunningText
                images={[
                    "bodyography",
                    "byebyeblemish",
                    "christina",
                    "gigi",
                    "goli",
                    "hantesis",
                    "cuccio",
                    "ionto",
                    "lpg",
                    "lumenis",
                    "orly",
                    "phytomer",
                    "woody",
                ]}
            />
            <Salon />
            <div className="self-center py-5 text-center font-bold">
                Sustainability – Customer Service – Quality - Personalization -
                Innovation - Professionalism and Teamwork.
            </div>
            <Products />
            <Service />
        </div>
    );
}
