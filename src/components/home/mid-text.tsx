import { Brand } from "lib/types/brand.type";

export default function MidText({ brand }: { brand: string }) {
    const text = {
        grease: "Sustainability – Customer Service – Quality - Personalization - Innovation - Professionalism and Teamwork.",
        pharm: "We provide our drugs and medical and equipments to eleven Aesthetic clinics and twenty nine pharmacies in here.",
    };
    return (
        <div className="self-center py-5 text-center font-bold">
            {text[brand as keyof Brand]}
        </div>
    );
}
