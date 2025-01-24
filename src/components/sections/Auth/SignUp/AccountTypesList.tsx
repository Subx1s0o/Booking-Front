'use client';
import Button from '@/components/ui/Button';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AccountTypesList() {
    return (
        <ul className="flex flex-col gap-5">
            <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="rounded-xl border-2 border-black px-5 py-7"
            >
                <h2 className="mb-3 text-md">Client</h2>
                <h3 className="mb-1 text-base">We offer:</h3>
                <ul className="mb-5 ml-10 list-disc">
                    <li>
                        <p className="text-sm">
                            Easily create and manage reservations
                        </p>
                    </li>
                    <li>
                        <p className="text-sm">
                            Keep track of all your reservations in one place
                        </p>
                    </li>
                    <li>
                        <p className="text-sm">
                            Save time and streamline your booking process
                        </p>
                    </li>
                </ul>
                <Button asChild variant="black" className="w-full">
                    <Link
                        href="/sign-up/client"
                        className="flex items-center justify-center"
                    >
                        Choose
                    </Link>
                </Button>
            </motion.li>
            <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="rounded-xl bg-black px-5 py-7 text-white"
            >
                <h2 className="mb-3 text-md">Business</h2>
                <h3 className="mb-1 text-base">We offer:</h3>
                <ul className="mb-5 ml-10 list-disc">
                    <li>
                        <p className="text-sm">
                            Take the reservations from your clients
                        </p>
                    </li>
                    <li>
                        <p className="text-sm">Manage your reservations</p>
                    </li>
                    <li>
                        <p className="text-sm">
                            Securely store and manage customer data.
                        </p>
                    </li>
                </ul>
                <Button asChild variant="outline" className="w-full">
                    <Link
                        href="/sign-up/business"
                        className="flex items-center justify-center"
                    >
                        Choose
                    </Link>
                </Button>
            </motion.li>
        </ul>
    );
}
