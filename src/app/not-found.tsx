'use client';
import SharedLayout from '@/components/common/SharedLayout';
import { useRouter } from 'next/navigation';
import React from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
export default function NotFound() {
    const router = useRouter();
    return (
        <SharedLayout>
            <motion.div className="flex h-full w-full flex-col items-center justify-center gap-10">
                <div>
                    <h1 className="mb-3 text-center text-2xl font-bold">404</h1>
                    <h2 className="mb-1 text-center text-xl font-semibold">
                        Page is not found
                    </h2>
                    <p className="text-center">
                        Try to return back to the previous page
                    </p>
                </div>
                <Button
                    variant="black"
                    className="w-[150px]"
                    onClick={() => router.back()}
                >
                    Go back
                </Button>
            </motion.div>
        </SharedLayout>
    );
}
