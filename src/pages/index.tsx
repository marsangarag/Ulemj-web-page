import Banner from "components/home/banner";
import RunningText from "components/home/running-text";
import Salon from "components/home/salon";
import Service from "components/home/service";

export default function Home() {
    return (
        <div className="my-col-20">
            <Banner />
            <RunningText
                images={[
                    "bodyography",
                    "byebyeblemish",
                    "christina",
                    "hairburst",
                    "gigi",
                    "goli",
                    "hantesis",
                    "cuccio",
                    "ionto",
                    "lpg",
                    "lumenis",
                    "orly",
                    "phytomer",
                    "sisology",
                    "woody",
                ]}
            />
            <Salon />
            <Service />
        </div>
    );
}
