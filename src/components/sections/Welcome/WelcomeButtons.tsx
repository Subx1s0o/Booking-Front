'use client';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import { motion } from 'framer-motion';
export default function WelcomeButtons() {
    return (
        <div className="flex w-full gap-5">
            <motion.div
                className="w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    delay: 2.6,
                    duration: 0.5,
                }}
            >
                <Button asChild variant="black" className="w-full">
                    <Link
                        href="/sign-up"
                        className="flex items-center justify-center"
                    >
                        Get started
                    </Link>
                </Button>
            </motion.div>
            <motion.div
                className="w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    delay: 2.8,
                    duration: 0.5,
                }}
            >
                <Button asChild variant="outline" className="w-full">
                    <Link
                        href="/sign-in"
                        className="flex items-center justify-center"
                    >
                        Login
                    </Link>
                </Button>
            </motion.div>
        </div>
    );
}
