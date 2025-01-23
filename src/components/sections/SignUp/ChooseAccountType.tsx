'use client';

import { motion } from 'framer-motion';
export default function ChooseAccountType() {
    return (
        <div className="mb-10">
            <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="text-center text-lg"
            >
                To get started, please choose your account type
            </motion.h1>
        </div>
    );
}
