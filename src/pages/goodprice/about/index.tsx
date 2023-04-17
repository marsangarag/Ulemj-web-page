export default function About() {
    return (
        <div className="container mx-auto">
            <div className="px-2 md:px-24 pb-8 text-justify leading-5 ">
                <h1 className="font-bold mb-8 text-center text-2xl">
                    SERVICE IS OUR BUSINESS PERFECTION IS OUR GOAL SATISFACTION
                    IS OUR GUARANTEE
                </h1>
                <div className="mb-8">
                    The Good Price Market is a well-established retail chain
                    that began its operations in 1998. The store is equipped
                    with high-quality German shop furnitures and US made
                    refrigerators. Over time, the store expanded its reach by
                    opening new branches in 2010, 2012, and 2013. Currently, the
                    store has four branches, serving a wide customer base.
                </div>
                <div className="mb-8 grid sm:grid-cols-3 gap-1 sm:gap-10">
                    <div
                        className={`border border-goodprice rounded-2xl py-8 px-5 hover:bg-goodprice
                        } ease-in duration-100 hover:text-white hover:scale-110 text-sm`}
                    >
                        <h2 className="font-bold">MISSION</h2>
                        <div>
                            The store&#39;s mission is to create quality service
                            with high standards
                        </div>
                    </div>
                    <div
                        className={`border border-goodprice rounded-2xl py-8 px-5 hover:bg-goodprice
                        } ease-in duration-100 hover:text-white hover:scale-110 text-sm`}
                    >
                        <h2 className="font-bold">VISION</h2>
                        <div>
                            The values that guide the market are to establish an
                            international trade channel and create a unified
                            central distribution system.
                        </div>
                    </div>
                    <div
                        className={`border border-goodprice rounded-2xl py-8 px-5 hover:bg-goodprice
                        } ease-in duration-100 hover:text-white hover:scale-110 text-sm`}
                    >
                        <h2 className="font-bold">VALUES</h2>
                        <div>
                            The store&#39;s motto is to respect the customer and
                            value quality
                        </div>
                    </div>
                </div>
                <div>
                    Good Price Store initially imported products solely from the
                    United States, but now, it imports and sells products from
                    various countries, including Germany, Korea, and Russia. The
                    store&#39;s mission is to create perfect service standards,
                    establish an international trade channel, and create a
                    unified central distribution system. The values that guide
                    the store include profit, speed and energy, the perfect
                    solution, health, and family.
                </div>
            </div>
            <div className="grid grid-cols-3 px-4 sm:px-24 py-4 gap-1 sm:gap-10">
                <div>
                    <img
                        src={`/images/about/goodprice/banner01.png`}
                        className="rounded-xl hover:scale-105 ease-in duration-100 hover:shadow-xl shadow-lg"
                    />
                </div>
                <div>
                    <img
                        src={`/images/about/goodprice/banner02.png`}
                        className="rounded-xl hover:scale-105 ease-in duration-100 hover:shadow-xl shadow-lg"
                    />
                </div>
                <div>
                    <img
                        src={`/images/about/goodprice/banner03.png`}
                        className="rounded-xl hover:scale-105 ease-in duration-100 hover:shadow-xl shadow-lg"
                    />
                </div>
            </div>
            <div className="my-8 px-4">
                <h2 className="text-center font-bold mb-8">
                    Good Price Store has set its sights on creating its own
                    brand in the international market.
                </h2>
                <div className="sm:px-20 mb-8">
                    <img
                        src={`/images/about/goodprice/banner.jpg`}
                        alt=""
                        className="hover:scale-105 ease-in duration-100 rounded-xl"
                    />
                </div>
                <div>
                    The Good Price Market’s motto is to respect the customer and
                    value quality. With its commitment to providing excellent
                    service, high-quality products, and a focus on international
                    trading.
                </div>
            </div>
        </div>
    );
}
