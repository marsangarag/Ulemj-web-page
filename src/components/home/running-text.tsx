import { motion } from "framer-motion";
import { useAppState } from "lib/context/app";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function RunningText({ images }: { images: string[] }) {
    return (
        <Marquee gradient={false} speed={200} className="py-5">
            {images?.map((image) => {
                return (
                    <Image
                        key={image}
                        src={`/images/logos/${image}.png`}
                        alt={image}
                        width={120}
                        height={50}
                    />
                );
            })}
        </Marquee>
    );
}
