import Banner from "components/home/banner";
import RunningText from "components/home/running-text";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
    return (
        <div className="flex flex-col overflow-x-hidden">
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
        </div>
    );
}
