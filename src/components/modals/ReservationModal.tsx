'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { User } from '@/types';
import Button from '../ui/Button';
import { useQueryClient } from '@tanstack/react-query';
import { updateReservation } from '@/actions/updateReservation';
import { toast } from '@/hooks/use-toast';
import { deleteReservation } from '@/actions/deleteReservation';

export default function ReservationModal({
    user,
    reservation,
    close,
}: {
    user: User | null;
    reservation: Reservation;
    close: () => void;
}) {
    const [isLoading, setIsLoading] = useState(false);
    const queryClient = useQueryClient();
    const handleCloseReservation = async (id: string) => {
        setIsLoading(true);
        const result = await updateReservation(id, { status: 'closed' });
        if (result) {
            queryClient.invalidateQueries({ queryKey: ['reservations'] });
            toast({
                title: 'Success',
                description: 'Reservation closed successfully',
                variant: 'default',
            });
            setIsLoading(false);
            close();
        }
        setIsLoading(false);
    };

    const handleDeleteReservation = async (id: string) => {
        setIsLoading(true);
        const result = await deleteReservation(id);
        if (result) {
            queryClient.invalidateQueries({ queryKey: ['reservations'] });
            toast({
                title: 'Success',
                description: 'Reservation closed successfully',
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
                    {user?.role === 'client'
                        ? `${reservation.businessUser.firstName} ${reservation.businessUser.secondName}`
                        : `${reservation.clientUser.firstName} ${reservation.clientUser.secondName}`}
                </h2>
                <div className="mb-5 flex flex-col gap-3">
                    {user?.role === 'client' && (
                        <p className="text-base">
                            <span className="font-semibold">Job:</span>{' '}
                            {reservation.businessUser.job}
                        </p>
                    )}
                    <p className="text-base">
                        <span className="font-semibold">Email:</span>{' '}
                        {user?.role === 'client'
                            ? `${reservation.businessUser.email}`
                            : `${reservation.clientUser.email}`}
                    </p>
                    {user?.role === 'client' && (
                        <p className="text-base">
                            <span className="font-semibold">Address:</span>{' '}
                            {reservation.businessUser.address}
                        </p>
                    )}

                    <p className="text-base">
                        <span className="font-semibold">Phone:</span> +
                        {user?.role === 'client'
                            ? `${reservation.businessUser.phone}`
                            : `${reservation.clientUser.phone}`}
                    </p>

                    <p className="text-base">
                        <span className="font-semibold">Reservation Date:</span>{' '}
                        {reservation.reservationDate
                            ? new Date(
                                  reservation.reservationDate,
                              ).toLocaleDateString('en-US', {
                                  year: 'numeric',
                                  month: 'long',
                                  day: 'numeric',
                              })
                            : '--'}
                    </p>
                    <p className="text-base">
                        <span className="font-semibold">Time:</span>{' '}
                        {reservation.time || '--'}
                    </p>
                    <p className="text-base">
                        <span className="font-semibold">Duration Time:</span>{' '}
                        {reservation.duration
                            ? `${reservation.duration} minutes`
                            : '--'}
                    </p>
                    <p className="text-base">
                        <span className="font-semibold">OpenedAt:</span>{' '}
                        {new Date(reservation.openedAt).toLocaleDateString(
                            'en-US',
                            { year: 'numeric', month: 'long', day: 'numeric' },
                        ) || '--'}
                    </p>
                </div>
                {reservation.status === 'opened' ? (
                    <Button
                        disabled={isLoading}
                        variant="outline"
                        onClick={() => handleCloseReservation(reservation.id)}
                        className="py-3"
                    >
                        {isLoading ? 'Closing...' : 'Close'}
                    </Button>
                ) : (
                    <Button
                        disabled={isLoading}
                        variant="black"
                        onClick={() => handleDeleteReservation(reservation.id)}
                        className="py-3"
                    >
                        {isLoading ? 'Deleting...' : 'Delete'}
                    </Button>
                )}
            </div>
        </motion.div>
    );
}
