export default function About() {
    return (
        <div className="container mx-auto">
            <div className="px-2 md:px-24 pb-8 text-justify leading-5 ">
                <h1 className="font-bold mb-8 text-center text-2xl">
                    SERVICE IS OUR BUSINESS PERFECTION IS OUR GOAL SATISFACTION
                    IS OUR GUARANTEE
                </h1>
                <div className="mb-8">
                    Ulemj Clinic began its journey in the field of medical
                    cosmetology in 2017 at the Shangri-La shopping center. Since
                    then, the clinic has expanded its services to plastic
                    surgery and rebranded itself as &#34;HAIR & ESTHETIC
                    CLINIC&#34; in 2020.
                </p>
                <div className="mb-8 grid sm:grid-cols-3 gap-1 sm:gap-10">
                    <div
                        className={`border border-grease rounded-2xl py-8 px-5 hover:bg-grease
                        } ease-in duration-100 hover:text-white hover:scale-110 text-sm`}
                    >
                        <h2 className="font-bold">MISSION</h2>
                        <div>
                            Adopt best practices in management and professional
                            practice
                        </p>
                    </div>
                    <div
                        className={`border border-grease rounded-2xl py-8 px-5 hover:bg-grease
                        } ease-in duration-100 hover:text-white hover:scale-110 text-sm`}
                    >
                        <h2 className="font-bold">VISION</h2>
                        <div>
                            Introduction of international standarts, clinical
                            guidelines and production technology
                        </p>
                    </div>
                    <div
                        className={`border border-grease rounded-2xl py-8 px-5 hover:bg-grease
                        } ease-in duration-100 hover:text-white hover:scale-110 text-sm`}
                    >
                        <h2 className="font-bold">VALUES</h2>
                        <div>
                            Introduction of evidence-based advanced technologies
                        </p>
                    </div>
                </div>
                <div>
                    In 2017, Ulemj Clinic introduced new treatments, such as
                    V-Shape facelift, forehead lift, droopy eye lift, temple
                    lift, droopy cheek lift, infraorbital wrinkle, perioral
                    wrinkles, and nose augmentation, through face thread lifts.
                    The clinic also provides body thread lifts for breast and
                    buttock lift, double-eyelid, lower blepharoplasty, and male
                    eyeplasty, and cheek dimple treatments.
                </p>
            </div>
            <div className="grid grid-cols-3 px-4 sm:px-24 py-4 gap-1 sm:gap-10">
                <div>
                    <img
                        src={`/images/about/clinic/About-Photo01.png`}
                        className="rounded-xl hover:scale-105 ease-in duration-100 hover:shadow-xl shadow-lg"
                    />
                </div>
                <div>
                    <img
                        src={`/images/about/clinic/About-Photo02.png`}
                        className="rounded-xl hover:scale-105 ease-in duration-100 hover:shadow-xl shadow-lg"
                    />
                </div>
                <div>
                    <img
                        src={`/images/about/clinic/About-Photo03.png`}
                        className="rounded-xl hover:scale-105 ease-in duration-100 hover:shadow-xl shadow-lg"
                    />
                </div>
            </div>
            <div className="my-8 px-4">
                <h2 className="text-center font-bold mb-8">
                    Sustainability – Customer Service – Quality -
                    Personalization - Innovation - Professionalism and Teamwork.
                </h2>
                <div className="sm:px-20 mb-8">
                    <img
                        src={`/images/about/clinic/banner.png`}
                        alt="banner"
                        className="hover:scale-105 ease-in duration-100 rounded-xl"
                    />
                </div>
                <div>
                    We are through our branch medicine supply company “Ulemj
                    Grease” LLC From developed countries such as South Korea,
                    France, Spain, and the The United States, suitable for
                    Mongolian skin bringing in the best products and using them
                    in our services.
                </p>
            </div>
        </div>
    );
}
