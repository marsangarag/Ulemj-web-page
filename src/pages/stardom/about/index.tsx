export default function About() {
    return (
        <div className="container mx-auto">
            <div className="px-2 md:px-24 py-8 text-justify leading-5">
                <div className="font-bold mb-8 text-center text-lg lg:text-2xl">
                    Stardom Boutique has consistently provided its customers
                    with the latest seasonal trends and fashion styles.
                </div>
                <div className="mb-8">
                    The boutique&#39;s diverse selection of styles caters to the
                    harsh climate and four seasons of Mongolia, ensuring that
                    customers have access to a new season wardrobe with wide
                    range of apparel suitable for any occasion.
                </div>
                <div className="w-full border-2 mb-8 border-black rounded-xl py-8 px-7 font-bold text-black hover:text-white hover:bg-black transition-all duration-300 ease-in-out">
                    In response to its customers&#39; demands, Stardom Boutique
                    has been actively seeking out next-stage brands that
                    attracts our customers. This move demonstrates the
                    boutique&#39;s commitment to staying ahead of the fashion
                    curve and providing its customers with the latest and most
                    innovative fashion directions.
                </div>
                <div>
                    Stardom Boutique Shop has gained a strong following in the
                    local fashion scene. It is the perfect destination for
                    fashion drivin individuals who appreciate quality and style.
                </div>
            </div>
            <div className="grid grid-cols-3 px-4 sm:px-24 py-4 gap-1 sm:gap-10 bg-black/5 rounded-xl">
                <div>
                    <img
                        src={`/images/about/stardom/01.jpg`}
                        className="rounded-xl hover:scale-105 ease-in duration-100 hover:shadow-xl"
                    />
                </div>
                <div>
                    <img
                        src={`/images/about/stardom/02.jpg`}
                        className="rounded-xl hover:scale-105 ease-in duration-100 hover:shadow-xl"
                    />
                </div>
                <div>
                    <img
                        src={`/images/about/stardom/03.jpg`}
                        className="rounded-xl hover:scale-105 ease-in duration-100 hover:shadow-xl"
                    />
                </div>
            </div>
            <div className="mt-8 px-4">
                <div className="text-center font-bold">
                    Stardom Boutique has become one of the most sought-after and
                    trend-setting shops in the city, making it a popular
                    destination for fashion-forward individuals.
                </div>
                <div className="grid grid-cols-4 sm:px-24 items-center place-items-center sm:gap-x-5">
                    <img
                        src={`/images/about/stardom/icon1.png`}
                        alt=""
                        className="hover:scale-105 ease-in duration-100"
                    />
                    <img
                        src={`/images/about/stardom/icon2.png`}
                        alt=""
                        className="hover:scale-105 ease-in duration-100"
                    />
                    <img
                        src={`/images/about/stardom/icon3.png`}
                        alt=""
                        className="hover:scale-105 ease-in duration-100"
                    />
                    <img
                        src={`/images/about/stardom/icon4.png`}
                        alt=""
                        className="hover:scale-105 ease-in duration-100"
                    />
                </div>
            </div>
        </div>
    );
}
