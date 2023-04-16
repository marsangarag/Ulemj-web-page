import { motion } from "framer-motion";
import { useRouter } from "next/router";

export default function Opacity({
    delay,
    children,
    className,
    onClick,
}: {
    delay?: number;
    children: any;
    className?: string;
    onClick?: any;
}) {
    const router = useRouter();
    return (
        <motion.div
            key={router.pathname}
            onClick={onClick}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ delay: delay ? delay : 0 }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
