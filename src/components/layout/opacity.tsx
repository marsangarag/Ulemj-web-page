import { motion } from "framer-motion";

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
    return (
        <motion.div
            onClick={onClick}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ delay: delay ? delay : 0.4 }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
