import Banner from "components/home/banner";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
    return (
        <div className="my-col-20 overflow-y-scroll">
            <Banner />
        </div>
    );
}
