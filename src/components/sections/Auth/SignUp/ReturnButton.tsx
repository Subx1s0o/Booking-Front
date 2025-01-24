'use client';
import Button from '@/components/ui/Button';
import { useRouter } from 'next/navigation';
import React from 'react';
import { motion } from 'framer-motion';
export default function ReturnButton() {
    const router = useRouter();
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
        >
            <Button
                variant="outline"
                onClick={() => router.back()}
                className="w-full"
            >
                Go Back
            </Button>
        </motion.div>
    );
}
