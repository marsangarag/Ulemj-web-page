import Image from "next/image";

export default function Products() {
    const products = [
        {
            name: "Lotion P5",
            price: "242.900",
            link: "https://shop.ulemjgrease.com/products/9256/92988",
        },
        {
            name: "Structruriste",
            price: "219.900",
            link: "https://shop.ulemjgrease.com/products/9256/92988",
        },
        {
            name: "Cyfolia",
            price: "189.900",
            link: "https://shop.ulemjgrease.com/products/9256/92988",
        },
        {
            name: "White Lumination",
            price: "173.900",
            link: "https://shop.ulemjgrease.com/products/9256/92988",
        },
    ];

    const onShopClick = (link: string) => {
        window.open(link, "_blank", "noreferrer");
    };

    return (
        <div className="overflow-x-scroll flex gap-x-1 sm:pb-4">
            {products?.map((product) => {
                return (
                    <div
                        onContextMenu={(e) => e.preventDefault()}
                        key={product.name}
                        className="relative"
                    >
                        <img
                            src={`/images/products/${product.name}.jpg`}
                            alt={product.name}
                            className="min-w-[250px] min-h-[360px] sm:min-w-[333px] sm:min-h-[458px] rounded-xl"
                        />
                        <div className="absolute text-smaller sm:text-xs md:text-sm lg:text-base xl:text-lg bottom-4 text-white w-full px-4 flex items-center justify-between">
                            <div className="flex flex-col">
                                <div>{product?.name}</div>
                                <div className="font-medium">
                                    {product?.price}₮
                                </div>
                            </div>
                            <div
                                onClick={() => onShopClick(product?.link)}
                                className="rounded-3xl cursor-pointer border border-white py-1 px-1  md:px-2.5"
                            >
                                Shop
                            </div>
                        </div>
                        {/* <Image
                            src={`/images/products/${product.name}.jpg`}
                            alt={product?.name}
                            fill
                        /> */}
                    </div>
                );
            })}
        </div>
    );
}
