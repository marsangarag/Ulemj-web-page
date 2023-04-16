import { useRouter } from "next/router";

export default function CompanyPage() {
    const router = useRouter();
    const { company } = router.query;
    console.log(company);
    return <h1>hhasdhashd</h1>;
}
