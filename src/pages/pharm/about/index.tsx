export default function About() {
    return (
        <div className="container mx-auto">
            <div className="px-2 md:px-24 pb-8 text-justify leading-5 ">
                {/* <h1 className="font-bold mb-8 text-center text-2xl">
                    SERVICE IS OUR BUSINESS PERFECTION IS OUR GOAL SATISFACTION
                    IS OUR GUARANTEE
                </h1> */}
                <p className="mb-8">
                    We are the official distributor of internationally
                    recognized <b>MCCM Medical Cosmetics LLC</b> of Portugal
                    wich manufactures aesthetic professional ampoules, sheffield
                    Pharmaceutical of USA wich manufactures creams for
                    dermatology, allergy, pain relief, <b>Neogenesis Co.,Ltd</b>{" "}
                    Global Leader Enterprise of Autologous Cell Therapies of
                    South Korea which manufactures HA filler, PDO Thread Lift
                    and cosmetic products, <b>Wooshin Labot-tach LLC</b> of
                    South Korea which manufactures Hydrogel Patch Lines and Oral
                    Disintegrating Fims, <b>Neocell Co.,Ltd</b> of USA which
                    manufactures natural collagen supplements for beauty and
                    sport.
                </p>
                <div className="flex justify-center mb-8">
                    <div className="bg-pharm min-w-[330px] min-h-[200px] text-white rounded-xl flex justify-center items-center group">
                        <div className="px-8 group-hover:hidden text-5xl font-bold">
                            MISSION
                        </div>
                        <div className="text-sm font-light hidden group-hover:block">
                            To become the official distributor of <br />
                            <br /> - Santen pharmaceutical of Japan <br />
                            - Sanof pharmaceutical of France
                            <br />
                            - Allergan pharmaceutical of USA <br />- MC Neil
                            consumer healthcare company of USA.
                        </div>
                    </div>
                </div>
                <p>
                    The company’s business is the trade and import of the
                    medicines, biological active products, medical technics,
                    equipment and devices and cosmetic treatment instruments. It
                    is the health product importer of Mongolia and the
                    developing national company of wholesale.
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
                        alt=""
                        className="hover:scale-105 ease-in duration-100 rounded-xl"
                    />
                </div>
                <p>
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
