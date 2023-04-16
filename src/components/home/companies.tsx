import { useAppState } from "lib/context/app";
import { useRouter } from "next/router";

export default function Companies() {
    const router = useRouter();
    const companies = [
        "stardom",
        "clinic",
        "goodprice",
        "buildings",
        "california",
        "pharm",
        "grease",
    ];

    const onCompanyClick = async (name: string) => {
        router.push(`/${name}`);
    };

    return (
        <div className="flex items-center h-9 sm:h-12 md:h-[100px] md:gap-x-5 lg:gap-x-20">
            {companies.map((company) => {
                return (
                    <div
                        onClick={() => onCompanyClick(company)}
                        key={company}
                        className="cursor-pointer"
                    >
                        <img
                            src={`/images/companies/${company}.png`}
                            alt={company}
                            className="w-full h-full"
                        />
                    </div>
                );
            })}
        </div>
    );
}
