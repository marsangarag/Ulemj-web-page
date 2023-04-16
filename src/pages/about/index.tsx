export default function About() {
    return (
        <div className="container mx-auto">
            <div className="px-2 md:px-24 pb-8 text-justify leading-5 ">
                <h1 className="font-bold mb-8 text-center text-sm sm:text-2xl">
                    TRADING | SERVICE | DESIGN | CONSTRUCTION
                </h1>
                <p className="mb-8">
                    Each of the specialized companies associated with ULEMJ
                    GROUP consists of a number of highly qualified and
                    experienced individuals. These individuals have a unique
                    combination of backgrounds in infrastructure development and
                    practical implementation experience in their fields of
                    expertise. This unique combination enables us to implement
                    the best available technology in a practical sense in a
                    developing environment.
                </p>
                <div className="mb-8 grid sm:grid-cols-3 gap-1 sm:gap-5">
                    <div
                        className="border border-ulemj rounded-2xl py-8 px-5 hover:bg-ulemj
                        } ease-in duration-100 hover:text-white hover:scale-110 text-sm"
                    >
                        <h2 className="font-bold">MISSION</h2>
                        <p>
                            To become the leading group that utilizes great
                            intelligence and knowledge of Mongolia. being
                            mingled with modern technology.
                        </p>
                    </div>
                    <div
                        className="border border-ulemj rounded-2xl py-8 px-5 hover:bg-ulemj
                        } ease-in duration-100 hover:text-white hover:scale-110 text-sm"
                    >
                        <h2 className="font-bold">VISION</h2>
                        <p>
                            To build a highly civilized and globally acclaimed
                            Mongolia.
                        </p>
                    </div>
                    <div
                        className="border border-ulemj rounded-2xl py-8 px-5 hover:bg-ulemj
                        } ease-in duration-100 hover:text-white hover:scale-110 text-sm"
                    >
                        <h2 className="font-bold">VALUES</h2>
                        <p>
                            More we take care of our most valuables,those shall
                            br ing greatest fertilities. <br />
                            <span className="text-xs text-start">
                                {" "}
                                Our Customers | Our Business Partners | Our
                                Employees
                            </span>
                        </p>
                    </div>
                </div>
                <p>
                    Over the past 23 years, Ulemj Buildings has emerged as one
                    of the most respected general contracting firms in Mongolia.
                    Again and again, in the area of constraction and earthworks
                    construction, we have proven our ability to our client on
                    taking large, complex projects and complete them on time, on
                    budget, and at the highest levels of quality.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 bg-black/5 min-h-[430px] items-center p-5">
                <div className="bg-white h-full rounded-xl flex flex-col justify-center px-5 text-justify group">
                    <div className="font-bold group-hover:hidden">
                        What we are
                    </div>
                    <div className="text-justify hidden group-hover:block">
                        We are a one of the leading construction, manufacturing,
                        trade and service groupsIn Mongolia.
                    </div>
                </div>
                <div className="bg-white h-full rounded-xl flex flex-col justify-center px-5 text-justify group">
                    <div className="font-bold group-hover:hidden">
                        What we do
                    </div>
                    <div className="text-justify hidden group-hover:block">
                        We manufacture vacuum-insulated windows, doors,
                        aluminiumwindows, doors, facade, We work in
                        construction, food distribution, food processing and
                        service sectors. We closely cooperate with our customers
                        and we invest heavily in our future growth and
                        development.
                    </div>
                </div>
                <div className="bg-white h-full rounded-xl flex flex-col justify-center px-5 text-justify group">
                    <div className="font-bold group-hover:hidden">
                        Who we are
                    </div>
                    <div className="text-justify hidden group-hover:block">
                        Our corporate culture is characterized by our pursuit to
                        bring the best and most innovative solutions to our
                        customers.
                    </div>
                </div>
            </div>
            <div className="my-8 px-4">
                <h2 className="text-center font-bold mb-8">
                    We continuously introduce the world&#39;s best brands and
                    technology in our trade, industry, and services to improve
                    the quality of our products.
                </h2>
                <div className="mb-8">
                    <img
                        src={`/images/about/ulemj/About.jpg`}
                        alt=""
                        className="hover:scale-105 ease-in duration-100 rounded-xl"
                    />
                </div>
            </div>
        </div>
    );
}
