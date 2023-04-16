export default function About() {
    return (
        <div className="container mx-auto">
            <div className="px-2 md:px-24 pb-8 text-justify leading-5 ">
                <h1 className="font-bold mb-8 text-center text-2xl">
                    SERVICE IS OUR BUSINESS PERFECTION IS OUR GOAL SATISFACTION
                    IS OUR GUARANTEE
                </h1>
                <p className="mb-8">
                    Ulemj Grease LLC, which started its operations in November
                    1997, is the first full-service high-level salon in
                    Mongolia. Initially serving in the fields of hairdressing,
                    beauty, and manicure and pedicure, we have continuously
                    improved our range of services in line with global
                    (especially France, USA, and Germany) trends, and have been
                    adding the best technology and services to our customers.
                </p>
                <div className="mb-8 grid sm:grid-cols-3 gap-1 sm:gap-10">
                    <div
                        className={`border border-main rounded-2xl py-8 px-5 hover:bg-grease ease-in duration-100 hover:text-white hover:scale-110 text-sm`}
                    >
                        <h2 className="font-bold">MISSION</h2>
                        <p>
                            Comfortable environment, quality service, strong
                            ability employees.
                        </p>
                    </div>
                    <div
                        className={`border border-main rounded-2xl py-8 px-5 hover:bg-grease
                        } ease-in duration-100 hover:text-white hover:scale-110 text-sm`}
                    >
                        <h2 className="font-bold">VISION</h2>
                        <p>
                            We respect to be a leader of the public service
                            development and utility fields of Mongolia.
                        </p>
                    </div>
                    <div
                        className={`border border-main rounded-2xl py-8 px-5 hover:bg-grease
                        } ease-in duration-100 hover:text-white hover:scale-110 text-sm`}
                    >
                        <h2 className="font-bold">VALUES</h2>
                        <p>
                            Customer with satisfaction, happy employees and
                            their families, quality and standard developer.
                        </p>
                    </div>
                </div>
                <p>
                    We have been successfully leading the beauty industry
                    offering international service standards for those who value
                    the quality. Our main operation is beauty salon and esthetic
                    clinic and 90% of the products we use are exclusively
                    distributed by us in Mongolia, including the devices and
                    equipments.
                </p>
            </div>
            <div className="grid grid-cols-3 px-4 sm:px-24 py-4 gap-1 sm:gap-10">
                <div>
                    <img
                        src={`/images/about/grease/LPG.jpg`}
                        className="rounded-xl hover:scale-105 ease-in duration-100 hover:shadow-xl"
                    />
                </div>
                <div>
                    <img
                        src={`/images/about/grease/M22.jpg`}
                        className="rounded-xl hover:scale-105 ease-in duration-100 hover:shadow-xl"
                    />
                </div>
                <div>
                    <img
                        src={`/images/about/grease/Glowsolution.jpg`}
                        className="rounded-xl hover:scale-105 ease-in duration-100 hover:shadow-xl"
                    />
                </div>
            </div>
            <div className="mt-8 px-4">
                <h2 className="text-center font-bold">
                    Sustainability – Customer Service – Quality -
                    Personalization - Innovation - Professionalism and Teamwork.
                </h2>
                <div className="grid grid-cols-4 sm:px-24 items-center place-items-center">
                    <img
                        src={`/images/about/grease/120staff.png`}
                        alt=""
                        className="hover:scale-105 ease-in duration-100"
                    />
                    <img
                        src={`/images/about/grease/4location.png`}
                        alt=""
                        className="hover:scale-105 ease-in duration-100"
                    />
                    <img
                        src={`/images/about/grease/25years.png`}
                        alt=""
                        className="hover:scale-105 ease-in duration-100"
                    />
                    <img
                        src={`/images/about/grease/24hour.png`}
                        alt=""
                        className="hover:scale-105 ease-in duration-100"
                    />
                </div>
            </div>
        </div>
    );
}
