import { useAppState } from "lib/context/app";
import { Lang } from "lib/types/language.type";

export default function Footer() {
    const { lang } = useAppState();
    const footerItems = [
        {
            title: { en: "Navigation", mon: "Хэсэх" },
            items: [
                { en: "Shop", mon: "Дэлгүүр" },
                { en: "Booking", mon: "Каталог" },
                { en: "About", mon: "Дэлгэрэнгүй" },
            ],
        },
        {
            title: { en: "Contact", mon: "Холбоо барих" },
            items: [
                { en: "grease@ulemj.mn", mon: "grease@ulemj.mn" },
                { en: "+976 77779595", mon: "+976 77779595" },
            ],
        },
        {
            title: { en: "Social media", mon: "Сошиал медиа" },
            items: [
                { en: "Instagram", mon: "Instagram" },
                { en: "Facebook", mon: "Facebook" },
                { en: "Youtube", mon: "Youtube" },
            ],
        },
    ];
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
