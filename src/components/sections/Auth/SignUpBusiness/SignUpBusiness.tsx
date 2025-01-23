'use client';

import SignUpBusinessForm from '@/components/forms/Auth/SignUpBusinessForm/SignUpBusinessForm';
import { motion } from 'framer-motion';

export default function SignUpBusiness() {
    return (
        <div className="w-full">
            <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="mb-10 text-center text-lg font-bold"
            >
                Create Your Business Account
            </motion.h1>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.4 }}
            >
                <SignUpBusinessForm />
            </motion.div>
        </div>
    );
}
