import Marquee from "react-fast-marquee";

export default function RunningText({ images }: { images: string[] }) {
    return (
        <Marquee gradient={false} speed={100} className="h-[60px] md:h-[100px]">
            {images?.map((image) => {
                return (
                    // <Image
                    //     onContextMenu={(e) => e.preventDefault()}
                    //     key={image}
                    //     priority
                    //     src={`/images/logos/${image}.png`}
                    //     alt={image}
                    //     width={100}
                    //     height={50}
                    // />
                    <img
                        onContextMenu={(e) => e.preventDefault()}
                        src={`/images/logos/${image}.png`}
                        alt={image}
                        className="w-3/4 h-3/4 md:w-full md:h-full"
                        key={image}
                    />
                );
            })}
        </Marquee>
    );
}
