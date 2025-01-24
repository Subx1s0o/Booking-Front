'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { User } from '@/types';
import Button from '../ui/Button';
import { createReservation } from '@/actions/createReservation';
import { toast } from '@/hooks/use-toast';

export default function BusinessUserModal({
    user,
    close,
}: {
    user: User;
    close: () => void;
}) {
    const [isLoading, setIsLoading] = useState(false);
    const createReservationToBusinessUser = async (id: string) => {
        setIsLoading(true);
        const result = await createReservation(id);
        if (result) {
            toast({
                title: 'Success',
                description: 'Reservation maked successfully',
                variant: 'default',
            });
            setIsLoading(false);
            close();
        }
        setIsLoading(false);
    };
    return (
        <motion.div
            onClick={close}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 flex w-full items-center justify-center bg-black/40 px-5"
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="w-full rounded-2xl bg-white p-5"
            >
                <h2 className="mb-5 text-center text-md font-bold">
                    {user.firstName} {user.secondName}
                </h2>
                <div className="mb-5 flex flex-col gap-3">
                    <p className="text-base">
                        <span className="font-semibold">Job:</span> {user.job}
                    </p>
                    <p className="text-base">
                        <span className="font-semibold">Email:</span>{' '}
                        {user.email}
                    </p>
                    {user.address && (
                        <p className="text-base">
                            <span className="font-semibold">Address:</span>{' '}
                            {user.address}
                        </p>
                    )}
                    {user.phone && (
                        <p className="text-base">
                            <span className="font-semibold">Phone:</span> +
                            {user.phone}
                        </p>
                    )}
                </div>
                <Button
                    disabled={isLoading}
                    variant="black"
                    onClick={() => createReservationToBusinessUser(user.id)}
                    className="py-3"
                >
                    {isLoading ? 'Loading...' : 'Make an reservation'}
                </Button>
            </div>
        </motion.div>
    );
}
