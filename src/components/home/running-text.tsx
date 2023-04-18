import Image from "next/image";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

export default function RunningText({ images }: { images: string[] }) {
    const [width, setWidth] = useState<number>(0);

    useEffect(() => {
        if (window && typeof window !== undefined) {
            setWidth(window.innerWidth);
        }
    }, []);

    return width ? (
        <Marquee
            gradient={false}
            speed={width > 444 ? (width > 500 ? 100 : 50) : 40}
            className="h-[60px] md:h-[100px]"
        >
            {images?.map((image) => {
                return (
                    <Image
                        onContextMenu={(e) => e.preventDefault()}
                        priority
                        key={image}
                        src={`/images/logos/${image}.png`}
                        alt={image}
                        height={width > 768 ? 100 : 60}
                        width={width > 768 ? 200 : 120}
                    />
                );
                {
                    /* <img
                            onContextMenu={(e) => e.preventDefault()}
                            src={`/images/logos/${image}.png`}
                            alt={image}
                            className="w-full h-full"
                            key={image}
                        /> */
                }
            })}
        </Marquee>
    ) : null;
}
