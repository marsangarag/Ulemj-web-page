export default function About() {
    return (
        <div className="container mx-auto">
            <div className="px-2 md:px-24 pb-8 text-justify leading-5 ">
                <div className="mb-8">
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
                    <div className="hover:bg-pharm border border-pharm min-w-[330px] min-h-[200px] text-white rounded-xl flex justify-center items-center group">
                        <div className="px-8 group-hover:hidden text-5xl font-bold text-pharm">
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
                <div>
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
                        src={`/images/about/pharm/Picture01.jpg`}
                        className="rounded-xl hover:scale-105 ease-in duration-100 hover:shadow-xl shadow-lg"
                    />
                </div>
                <div>
                    <img
                        src={`/images/about/pharm/Picture02.jpg`}
                        className="rounded-xl hover:scale-105 ease-in duration-100 hover:shadow-xl shadow-lg"
                    />
                </div>
                <div>
                    <img
                        src={`/images/about/pharm/Picture03.jpg`}
                        className="rounded-xl hover:scale-105 ease-in duration-100 hover:shadow-xl shadow-lg"
                    />
                </div>
            </div>
            <div className="my-8 px-4">
                <h2 className="text-center font-bold mb-8">
                    We provide our drugs and medical and equipments to eleven
                    Aesthetic clinics and twenty nine pharmacies in here
                </h2>
                <div className="grid grid-cols-5 sm:px-20 items-center place-items-center">
                    <div className="hover:scale-105 ease-in duration-100">
                        <img
                            src={`/images/about/pharm/Cosmetic.png`}
                            alt="Cosmetic"
                        />
                        <b>Cosmetic</b>
                    </div>
                    <div className="hover:scale-105 ease-in duration-100">
                        <img
                            src={`/images/about/pharm/Antibiotic.png`}
                            alt="Antibiotic"
                        />
                        <b>Antibiotic</b>
                    </div>
                    <div className="hover:scale-105 ease-in duration-100">
                        <img
                            src={`/images/about/pharm/Supplement.png`}
                            alt="Supplement"
                        />
                        <b>Supplement</b>
                    </div>
                    <div className="hover:scale-105 ease-in duration-100">
                        <img
                            src={`/images/about/pharm/Vitamin.png`}
                            alt="Vitamin"
                        />
                        <b>Vitamin</b>
                    </div>
                    <div className="hover:scale-105 ease-in duration-100">
                        <img
                            src={`/images/about/pharm/Protein.png`}
                            alt="Protein"
                        />
                        <b>Protein</b>
                    </div>
                </div>
            </div>
        </div>
    );
}
