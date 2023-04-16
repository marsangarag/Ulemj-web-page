import { useAppState } from "lib/context/app";
import { Lang } from "lib/types/language.type";
import { useRouter } from "next/router";

export default function Footer() {
    const { lang } = useAppState();
    const router = useRouter();
    const footerItems = [
        {
            title: { en: "Navigation", mon: "Хэсэх" },
            items: [
                {
                    en: "Shop",
                    mon: "Дэлгүүр",
                    route: "https://shop.ulemjgrease.com/",
                },
                {
                    en: "Booking",
                    mon: "Цаг захиалах",
                    route: "http://appointment.ulemjgrease.com/",
                },
                { en: "About", mon: "Дэлгэрэнгүй", route: "/about" },
            ],
        },
        {
            title: { en: "Contact", mon: "Холбоо барих" },
            items: [
                {
                    en: "grease@ulemj.mn",
                    mon: "grease@ulemj.mn",
                    route: "grease@ulemj.mn",
                },
                {
                    en: "+976 77779595",
                    mon: "+976 77779595",
                    route: "+976 77779595",
                },
            ],
        },
        {
            title: { en: "Social media", mon: "Сошиал медиа" },
            items: [
                {
                    en: "Instagram",
                    mon: "Instagram",
                    route: "https://www.instagram.com/ulemj.grease/",
                },
                {
                    en: "Facebook",
                    mon: "Facebook",
                    route: "https://www.facebook.com/greasesalon",
                },
                {
                    en: "Youtube",
                    mon: "Youtube",
                    route: "https://www.youtube.com/@ulemjgreasesalon1277",
                },
            ],
        },
    ];

    const onLinkClick = (route: string) => {
        if (route.includes("http")) {
            window.open(route, "_blank", "noreferrer");
        } else if (route.includes("@")) {
            window.open(`mailto:${route}`);
        } else if (route.includes("+976")) {
            window.open(`tel:${route}`);
        } else {
            router.push(route);
        }
    };
    return (
        <>
            <div className="py-5 flex flex-col text-center gap-y-2 sm:flex-row sm:justify-evenly">
                {footerItems?.map((footer) => {
                    return (
                        <div
                            key={footer.title[lang as keyof Lang]}
                            className="flex flex-col"
                        >
                            <div className="font-bold pb-2">
                                {footer.title[lang as keyof Lang]}
                            </div>
                            {footer?.items.map((content) => {
                                return (
                                    <div
                                        onClick={() =>
                                            onLinkClick(content.route)
                                        }
                                        key={content[lang as keyof Lang]}
                                        className="cursor-pointer"
                                    >
                                        {content[lang as keyof Lang]}
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        </>
    );
}
