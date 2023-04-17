export default function About() {
    return (
        <div className="container mx-auto">
            <div className="px-2 md:px-24 pb-8 text-justify leading-5 ">
                <h1 className="font-bold mb-8 text-center text-2xl">
                    SERVICE IS OUR BUSINESS PERFECTION IS OUR GOAL SATISFACTION
                    IS OUR GUARANTEE
                </h1>
                <div className="mb-8">
                    The California Restaurant was established in 2002 with a
                    unique American-style environment that evokes the atmosphere
                    of California. The restaurant was designed by Pacific
                    Westline Inc., which has extensive experience in creating
                    existing fine dining restaurants as The Cheesecake Factory,
                    Grandlux Café in the United States.
                </div>
                <div className="mb-8 grid sm:grid-cols-3 gap-1 sm:gap-10">
                    <div
                        className={`border border-california rounded-2xl py-8 px-5 hover:bg-california
                        } ease-in duration-100 hover:text-white hover:scale-110 text-sm`}
                    >
                        <h2 className="font-bold">MISSION</h2>
                        <div>
                            To satisfy our clients senses with food as the focal
                            point, the perfect atmosphere and flawless service.
                        </div>
                    </div>
                    <div
                        className={`border border-california rounded-2xl py-8 px-5 hover:bg-california
                        } ease-in duration-100 hover:text-white hover:scale-110 text-sm`}
                    >
                        <h2 className="font-bold">VISION</h2>
                        <div>
                            To bring people together and have a positive impact
                            on our customers, our team, the environment and the
                            community.
                        </div>
                    </div>
                    <div
                        className={`border border-california rounded-2xl py-8 px-5 hover:bg-california
                        } ease-in duration-100 hover:text-white hover:scale-110 text-sm`}
                    >
                        <h2 className="font-bold">VALUES</h2>
                        <div>
                            We believe in continuously listening, learning,
                            educating and improving our, team, our processes and
                            our company Our team and culture
                        </div>
                    </div>
                </div>
                <div>
                    To ensure the highest quality of cuisine, a Michelin-starred
                    chef from the United States works as the head chef. In 2007,
                    California started offering catering services and opened a
                    reception hall next to the restaurant. In 2011, the
                    restaurant underwent a major expansion to accommodate 350
                    people and a separate meat, vegetable raw material
                    processing plant. Due to its popularity, California opened
                    its second branch in the Great Mongolia Center in 2015,
                    complete with a bonquet hall and VIP rooms.
                </div>
            </div>
            <div className="grid grid-cols-3 px-4 sm:px-24 py-4 gap-1 sm:gap-10">
                <div>
                    <img
                        src={`/images/about/california/banner01.png`}
                        className="rounded-xl hover:scale-105 ease-in duration-100 hover:shadow-xl shadow-lg"
                    />
                </div>
                <div>
                    <img
                        src={`/images/about/california/banner02.png`}
                        className="rounded-xl hover:scale-105 ease-in duration-100 hover:shadow-xl shadow-lg"
                    />
                </div>
                <div>
                    <img
                        src={`/images/about/california/banner03.png`}
                        className="rounded-xl hover:scale-105 ease-in duration-100 hover:shadow-xl shadow-lg"
                    />
                </div>
            </div>
            <div className="my-8 px-4">
                <h2 className="text-center font-bold mb-8">
                    A Perfect Blend of Sensational Food, Inspiring Ideas and
                    Professional Staff
                </h2>
                <div className="sm:px-20 mb-8">
                    <img
                        src={`/images/about/california/banner.jpg`}
                        alt=""
                        className="hover:scale-105 ease-in duration-100 rounded-xl"
                    />
                </div>
                <div>
                    The California Restaurant has expanded its business by
                    opening a bakery and coffee shop in 2019. Located on the B1
                    floor of Shangri-la mall, the bakery boasts an interior
                    design inspired by the well-known Aichenger brand of
                    Germany. The bakery is equipped with Miwe brand ovens,
                    American True brand equipments, serves American Starbucks
                    and Italian Valentino coffee. The California Bakery uses raw
                    materials imported directly from Germany, and applies German
                    technology to produce more than 40 types of pastries such as
                    croissant, tart, muffin, mousse, and cakes.
                </div>
            </div>
        </div>
    );
}
