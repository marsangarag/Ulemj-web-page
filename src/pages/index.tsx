import Banner from "components/home/banner";
import Service from "components/home/service";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
    return (
        <div className="my-col-20 ">
            <Banner />
            <Service />
        </div>
    );
}
