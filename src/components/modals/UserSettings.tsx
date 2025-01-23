import { motion } from 'framer-motion';

export default function UserSettings() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 w-full bg-black/40"
        >
            UserSettings
        </motion.div>
    );
}
