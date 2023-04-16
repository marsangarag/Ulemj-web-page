import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAppState } from "./context/app";

export default function WithPath({ children }: any) {
    const router = useRouter();
    const { brand } = router.query;
    const { setBrand } = useAppState();

    useEffect(() => {
        const brandFunction = async () => {
            if (router.isReady && brand) {
                await setBrand(brand);
            }
        };
        brandFunction();
    }, [brand]);

    return children;
}
