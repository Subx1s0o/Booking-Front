'use client';

import SignInForm from '@/components/forms/Auth/SignInForm/SignInForm';
import { motion } from 'framer-motion';

export default function SignInSection() {
    return (
        <div className="w-full">
            <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="mb-10 text-center text-lg font-bold"
            >
                Login to your account
            </motion.h1>
            <SignInForm />
        </div>
    );
}
