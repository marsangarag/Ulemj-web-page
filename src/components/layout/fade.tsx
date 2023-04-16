import { motion } from "framer-motion";

export default function Fade({
    children,
    className,
    transition,
    onClick,
}: {
    children: any;
    className: string;
    transition: { y: number; delay: number };
    onClick?: any;
}) {
    const { y, delay } = transition;

    return (
        <motion.div
            onClick={onClick}
            viewport={{ once: true }}
            onContextMenu={(e) => e.preventDefault()}
            className={className}
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                type: "spring",
                stiffness: 100,
                damping: 50,
                delay,
            }}
        >
            {children}
        </motion.div>
    );
}
