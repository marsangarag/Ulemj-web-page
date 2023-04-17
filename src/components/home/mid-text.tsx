import { Brand } from "lib/types/brand.type";

export default function MidText({ brand }: { brand: string }) {
    const text = {
        grease: "Sustainability – Customer Service – Quality - Personalization - Innovation - Professionalism and Teamwork.",
        pharm: "We provide our drugs and medical and equipments to eleven Aesthetic clinics and twenty nine pharmacies in here.",
        clinic: "Sustainability – Customer Service – Quality - Personalization - Innovation - Professionalism and Teamwork.",
        stardom:
            "Stardom Boutique has become one of the most sought-after and trend-setting shops in the city, making it a popular destination for fashion-forward individuals.",
        goodprice: "",
        ulemj: "EXCEPTIONAL QUALITY FOR OUR CUSTOMERS - “Ulemj Quality guaranteed”",
        california:
            "A PERFECT BLEND OF SENSATIONAL FOOD, INSPIRING IDEAS AND PROFESSIONAL STAFF.",
    };
    return (
        <div className="self-center py-5 px-5 text-center font-bold">
            {text[brand as keyof Brand]}
        </div>
    );
}
