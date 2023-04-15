import { useAppState } from "lib/context/app";
import { Lang } from "lib/types/language.type";

export default function Footer() {
    const { lang } = useAppState();
    const footerItems = [
        {
            title: { en: "Navigation", mon: "Хэсэх" },
            items: [
                { en: "Shop", mon: "Дэлгүүр" },
                { en: "Lookbook", mon: "Каталог" },
                { en: "About", mon: "Дэлгэрэнгүй" },
            ],
        },
        {
            title: { en: "Customer Care", mon: "Харилцагч" },
            items: [
                { en: "Shopping info & returns", mon: "Буцаалт" },
                { en: "Terms & conditions", mon: "Үйлчилгээний нөхцөл" },
                { en: "Privacy Policy", mon: "Нууцлалын бодлого" },
            ],
        },
        {
            title: { en: "Contact", mon: "Холбоо барих" },
            items: [
                { en: "Vercencia@info.com", mon: "Vercencia@info.com" },
                { en: "+976 88110011", mon: "+976 88110011" },
            ],
        },
        {
            title: { en: "Social media", mon: "Сошиал медиа" },
            items: [
                { en: "Instagram", mon: "Instagram" },
                { en: "Facebook", mon: "Facebook" },
                { en: "Twitter", mon: "Twitter" },
            ],
        },
    ];
    return (
        <>
            <div className="p-5 grid gap-y-8 text-center sm:grid-cols-2 md:grid-cols-4">
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
