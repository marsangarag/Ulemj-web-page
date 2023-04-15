import Image from "next/image";

export default function Salon() {
    return (
        <div
            onContextMenu={(e) => e.preventDefault()}
            data-aos="fade-up"
            className="flex flex-col gap-y-1 md:grid md:grid-cols-12 gap-x-2.5 md:place-items-stretch"
        >
            <div className="md:col-span-5 relative w-full">
                <Image
                    src={"/images/salon/beauty.jpg"}
                    className="rounded-xl"
                    alt="beauty"
                    fill
                />
            </div>
            <div className="md:col-span-3">asdsadsad</div>
            <div className="md:col-span-4">asdsadsad</div>
        </div>
    );
}
