import Image from "next/image";

export default function Banner() {
    return (
        <div className="flex flex-col gap-y-2.5 md:grid md:grid-cols-5 gap-x-1 md:place-items-stretch">
            <div className="md:col-span-3 relative text-white mb-5">
                <img src="/images/spa.jpg" className="rounded-xl" />
                <div className="absolute bottom-8 left-6">
                    <p className="text-3xl font-light">Grease Wellness</p>
                    <p className="text-[10px] font-normal leading-3 mb-5">
                        at Shangri-La Ulaanbaatar, Mongolia
                    </p>
                    <button className="border-2 py-1.5 px-3 rounded-3xl text-xs font-semibold">
                        Learn more
                    </button>
                </div>
            </div>
            <div className="md:col-span-2 relative">
                <div className="bg-white absolute z-20 right-0 font-light px-3 py-1 text-sm rounded-bl-xl">
                    <span className="font-bold">Grease VIP</span> at Baga tenger
                </div>
                <img
                    src="/images/baga_tenger.jpg"
                    alt="baga tenger"
                    className="rounded-xl w-full object-cover"
                />
            </div>
        </div>
    );
}
