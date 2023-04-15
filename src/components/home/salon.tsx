import Image from "next/image";

export default function Salon() {
    const onButtonClick = (link: string) => {
        window.open(link, "_blank", "noreferrer");
    };

    return (
        <div
            onContextMenu={(e) => e.preventDefault()}
            data-aos="fade-up"
            className="flex flex-col gap-y-1 md:grid md:grid-cols-12 gap-x-1 md:place-items-stretch"
        >
            <div className="md:col-span-5 relative w-full ">
                <img
                    src="/images/salon/beauty.jpg"
                    alt="beauty"
                    className="rounded-xl h-full w-full"
                />
                <div className="absolute bottom-5 left-5 flex flex-col gap-y-2.5 text-white items-start">
                    <div className="flex flex-col gap-y-1">
                        <div className="text-xl sm:text-3xl font-light tracking-wide">
                            Beauty Spa
                        </div>
                        <div className="text-smaller">
                            Introduction to outstanding beauty services
                        </div>
                    </div>
                    <div
                        onClick={() =>
                            onButtonClick(
                                "http://appointment.ulemjgrease.com/appointments?business_type=2"
                            )
                        }
                        className="bg-main cursor-pointer shadow-lg rounded-3xl p-2 text-xs font-medium"
                    >
                        Beauty Services
                    </div>
                </div>
            </div>
            <div className="md:col-span-3 flex md:flex-col gap-1 flex-row items-stretch">
                <div
                    onClick={() =>
                        onButtonClick(
                            "http://appointment.ulemjgrease.com/appointments?business_type=1"
                        )
                    }
                    className="cursor-pointer h-1/2 w-1/2 md:w-full relative"
                >
                    <img
                        src="/images/salon/nail.jpg"
                        alt="nail"
                        className="rounded-xl "
                    />
                    <div className="bottom-4 left-4 absolute flex flex-col">
                        <div className="text-xl sm:text-3xl font-light tracking-wide">
                            Nails
                        </div>
                        <div className="text-smaller">
                            Manicure, Pedicure and Treatment
                        </div>
                    </div>
                </div>
                <div className="bg-black text-white rounded-xl p-5 w-1/2 md:w-full md:h-full flex flex-col justify-between items-start gap-y-1.5">
                    <div className="rounded-3xl cursor-pointer border border-white text-xs md:text-sm py-2.5 px-3">
                        Appointment
                    </div>
                    <div className="text-smaller md:text-xs">
                        We served 6000 clients a month and more than 70% of them
                        are lon-Term for more than 3 years. Total clients are
                        potential and 15% of our clients are foreigners, living
                        in Ulaanbaatar.
                    </div>
                </div>
            </div>
            <div className="md:col-span-4 relative w-full ">
                <img
                    src="/images/salon/hair.jpg"
                    alt="hair"
                    className="rounded-xl h-full w-full"
                />
                <div className="absolute bottom-5 left-5 flex flex-col gap-y-2.5 text-white items-start">
                    <div className="flex flex-col gap-y-1">
                        <div className="text-xl sm:text-3xl font-light tracking-wide">
                            Hair Treatment
                        </div>
                        <div className="text-smaller">Styling & treatment</div>
                    </div>
                    <div
                        onClick={() =>
                            onButtonClick(
                                "http://appointment.ulemjgrease.com/appointments?business_type=3"
                            )
                        }
                        className="bg-white text-black cursor-pointer rounded-3xl p-2 text-xs font-medium"
                    >
                        Hair Services
                    </div>
                </div>
            </div>
        </div>
    );
}
