'use client';

import SignUpClientForm from '@/components/forms/SignUpClientForm/SignUpClientForm';
import { motion } from 'framer-motion';

export default function SignUpClient() {
    return (
        <div className="w-full">
            <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="mb-10 text-center text-lg"
            >
                Create Your Client Account
            </motion.h1>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.4 }}
            >
                <SignUpClientForm />
            </motion.div>
        </div>
    );
}
