import { useAppState } from "lib/context/app";
import { Lang } from "lib/types/language.type";
import { useRouter } from "next/router";
import Fade from "./fade";
import { Brand } from "lib/types/brand.type";

export default function Footer({ brand }: { brand: string }) {
    const { lang } = useAppState();
    const router = useRouter();
    const footerItems = {
        grease: [
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
                    { en: "About", mon: "Дэлгэрэнгүй", route: "/grease/about" },
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
        ],
        pharm: [
            {
                title: { en: "Navigation", mon: "Хэсэх" },
                items: [
                    {
                        en: "Shop",
                        mon: "Дэлгүүр",
                        route: "https://shop.ulemjgrease.com/",
                    },

                    { en: "About", mon: "Дэлгэрэнгүй", route: "/pharm/about" },
                ],
            },
            {
                title: { en: "Contact", mon: "Холбоо барих" },
                items: [
                    {
                        en: "admin@ulemj.mn",
                        mon: "admin@ulemj.mn",
                        route: "admin@ulemj.mn",
                    },
                    {
                        en: "+976 011 31 3221",
                        mon: "+976 011 31 3221",
                        route: "+976 011 31 3221",
                    },
                ],
            },
            {
                title: { en: "Social media", mon: "Сошиал медиа" },
                items: [
                    {
                        en: "Facebook",
                        mon: "Facebook",
                        route: "https://www.facebook.com/ulemjpharm",
                    },
                ],
            },
        ],
        clinic: [
            {
                title: { en: "Navigation", mon: "Хэсэх" },
                items: [
                    {
                        en: "Appointment",
                        mon: "Дэлгүүр",
                        route: "http://appointment.ulemjgrease.com/salon-profile/clinic/",
                    },
                    {
                        en: "Treatments",
                        mon: "Цаг захиалах",
                        route: "http://appointment.ulemjgrease.com/salon-profile/clinic/services",
                    },
                    { en: "About", mon: "Дэлгэрэнгүй", route: "/clinic/about" },
                ],
            },
            {
                title: { en: "Contact", mon: "Холбоо барих" },
                items: [
                    {
                        en: "medical@ulemj.mn",
                        mon: "medical@ulemj.mn",
                        route: "medical@ulemj.mn",
                    },
                    {
                        en: "+976 70004466",
                        mon: "+976 70004466",
                        route: "+976 70004466",
                    },
                ],
            },
            {
                title: { en: "Social media", mon: "Сошиал медиа" },
                items: [
                    {
                        en: "Instagram",
                        mon: "Instagram",
                        route: "https://www.instagram.com/ulemj.clinic/",
                    },
                    {
                        en: "Facebook",
                        mon: "Facebook",
                        route: "https://www.facebook.com/AntiAgingClinc/",
                    },
                ],
            },
        ],
        stardom: [
            {
                title: { en: "Navigation", mon: "Хэсэх" },
                items: [
                    {
                        en: "Shop",
                        mon: "Дэлгүүр",
                        route: "https://www.instagram.com/stardom_boutique/",
                    },
                    {
                        en: "Lookbook",
                        mon: "Цаг захиалах",
                        route: "https://www.facebook.com/stardombyplatinum",
                    },
                    {
                        en: "About",
                        mon: "Дэлгэрэнгүй",
                        route: "/stardom/about",
                    },
                ],
            },
            {
                title: { en: "Contact", mon: "Холбоо барих" },
                items: [
                    {
                        en: "agimaa@ulemj.mn",
                        mon: "agimaa@ulemj.mn",
                        route: "agimaa@ulemj.mn",
                    },
                    // {
                    //     en: "+976 77779595",
                    //     mon: "+976 77779595",
                    //     route: "+976 77779595",
                    // },
                ],
            },
            {
                title: { en: "Social media", mon: "Сошиал медиа" },
                items: [
                    {
                        en: "Instagram",
                        mon: "Instagram",
                        route: "https://www.instagram.com/stardom_boutique/",
                    },
                    {
                        en: "Facebook",
                        mon: "Facebook",
                        route: "https://www.facebook.com/stardombyplatinum",
                    },
                ],
            },
        ],
        goodprice: [
            {
                title: { en: "Navigation", mon: "Хэсэх" },
                items: [
                    {
                        en: "Delivery",
                        mon: "Дэлгүүр",
                        route: "+97677775555",
                    },
                    {
                        en: "Shop",
                        mon: "Цаг захиалах",
                        route: "http://goodprice.mindplay.mn/shopTab/",
                    },
                    {
                        en: "About",
                        mon: "Дэлгэрэнгүй",
                        route: "/goodprice/about",
                    },
                ],
            },
            {
                title: { en: "Contact", mon: "Холбоо барих" },
                items: [
                    {
                        en: "goodprice@ulemj.mn ",
                        mon: "goodprice@ulemj.mn ",
                        route: "goodprice@ulemj.mn ",
                    },
                    {
                        en: "+976 77775555",
                        mon: "+976 77775555",
                        route: "+976 77775555",
                    },
                ],
            },
            {
                title: { en: "Social media", mon: "Сошиал медиа" },
                items: [
                    // {
                    //     en: "Instagram",
                    //     mon: "Instagram",
                    //     route: "https://www.instagram.com/stardom_boutique/",
                    // },
                    {
                        en: "Facebook",
                        mon: "Facebook",
                        route: "https://www.facebook.com/goodpricemarket",
                    },
                ],
            },
        ],
        california: [
            {
                title: { en: "Navigation", mon: "Хэсэх" },
                items: [
                    {
                        en: "Reservation",
                        mon: "Дэлгүүр",
                        route: "+97611319031",
                    },
                    {
                        en: "Services",
                        mon: "Цаг захиалах",
                        route: "https://www.facebook.com/California.Restaurant.MN",
                    },
                    {
                        en: "About",
                        mon: "Дэлгэрэнгүй",
                        route: "/california/about",
                    },
                ],
            },
            {
                title: { en: "Contact", mon: "Холбоо барих" },
                items: [
                    {
                        en: "california@ulemj.mn",
                        mon: "california@ulemj.mn",
                        route: "california@ulemj.mn",
                    },
                    {
                        en: "+976 11319031",
                        mon: "+976 11319031",
                        route: "+976 11319031",
                    },
                ],
            },
            {
                title: { en: "Social media", mon: "Сошиал медиа" },
                items: [
                    // {
                    //     en: "Instagram",
                    //     mon: "Instagram",
                    //     route: "https://www.instagram.com/stardom_boutique/",
                    // },
                    {
                        en: "Facebook",
                        mon: "Facebook",
                        route: "https://www.facebook.com/California.Restaurant.MN",
                    },
                ],
            },
        ],
        ulemj: [
            {
                title: { en: "Navigation", mon: "Хэсэх" },
                items: [{ en: "About", mon: "Дэлгэрэнгүй", route: "/about" }],
            },
            {
                title: { en: "Contact", mon: "Холбоо барих" },
                items: [
                    {
                        en: "info@ulemj.mn",
                        mon: "info@ulemj.mn",
                        route: "info@ulemj.mn",
                    },
                    {
                        en: "+976 77770090",
                        mon: "+976 77770090",
                        route: "+976 77770090",
                    },
                ],
            },
            {
                title: { en: "Social media", mon: "Сошиал медиа" },
                items: [
                    // {
                    //     en: "Instagram",
                    //     mon: "Instagram",
                    //     route: "https://www.instagram.com/stardom_boutique/",
                    // },
                    {
                        en: "Facebook",
                        mon: "Facebook",
                        route: "https://www.facebook.com/profile.php?id=100082994967506",
                    },
                ],
            },
        ],
    };

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
                {footerItems[brand as keyof Brand]?.map((footer) => {
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
