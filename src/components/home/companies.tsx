import Image from "next/image";
import { useRouter } from "next/router";

export default function Companies() {
    const router = useRouter();
    const companies = [
        {
            name: "stardom",
            route: "/stardom",
        },
        {
            name: "clinic",
            route: "/clinic",
        },
        {
            name: "goodprice",
            route: "/goodprice",
        },
        {
            name: "buildings",
            route: "/buildings",
        },
        {
            name: "california",
            route: "/california",
        },
        {
            name: "pharm",
            route: "/pharm",
        },
        {
            name: "grease",
            route: "/",
        },
    ];
    return (
        <div className="flex items-center h-9 sm:h-12 md:h-[100px] md:gap-x-5 lg:gap-x-20">
            {companies.map((company) => {
                return (
                    <div
                        onClick={() => router.push(company.route)}
                        key={company.name}
                        className="cursor-pointer"
                    >
                        <img
                            src={`/images/companies/${company.name}.png`}
                            alt={company.name}
                            className="w-full h-full"
                        />
                    </div>
                );
            })}
        </div>
    );
}
