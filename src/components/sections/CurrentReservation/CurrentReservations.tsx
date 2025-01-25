'use client';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchCurrentReservation } from '@/actions/fetchCurrentReservation';
import ErrorFallback from '@/components/common/ErrorFallback';
import { cn } from '@/lib/utils';
import { useUserStore } from '@/hooks/useUserStore';
import Button from '@/components/ui/Button';
import { AnimatePresence } from 'framer-motion';
import EditReservations from '@/components/modals/EditReservations';
import { useState } from 'react';
import { useReservationManage } from '@/hooks/useReservationManage';

export default function CurrentReservations({ id }: { id: string }) {
    const { data, isLoading, error } = useQuery({
        queryKey: ['reservations', id],
        queryFn: async () => await fetchCurrentReservation(id),
    });

    const [isOpen, setIsOpen] = useState(false);
    const { isLoading: isLoadingManage, handleUpdateReservation } =
        useReservationManage();
    const { user } = useUserStore();
    if (!data && isLoading) {
        return (
            <div className="flex min-h-[400px] items-center justify-center">
                <p className="flex items-center gap-2 text-md">
                    loading...
                    <span className="loader" />
                </p>
            </div>
        );
    }

    if (error) {
        return (
            <ErrorFallback message="There was an error loading the reservation." />
        );
    }

    return (
        <div className="flex flex-col">
            <div className="flex flex-col">
                <div className="mb-10 flex items-center justify-between">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-md">Reservation</h1>
                        {user?.role === 'client' && (
                            <p className="text-base text-red">
                                {data?.businessUser?.job}
                            </p>
                        )}
                    </div>
                    <span
                        className={cn(
                            'rounded-lg px-4 py-3 text-base text-white',
                            {
                                'bg-green': data?.status === 'opened',
                                'bg-red': data?.status === 'closed',
                            },
                        )}
                    >
                        Status: {data?.status}
                    </span>
                </div>
                <ul className="flex flex-col gap-5">
                    {user?.role === 'business' ? (
                        <>
                            <li>
                                <p className="text-md">
                                    {' '}
                                    First name: {data?.clientUser.firstName}
                                </p>
                            </li>

                            <li>
                                <p className="text-md">
                                    Second name: {data?.clientUser.secondName}
                                </p>
                            </li>
                            <li>
                                <p className="text-md">
                                    {' '}
                                    Email: {data?.clientUser.email}
                                </p>
                            </li>
                            <li>
                                <p className="text-md">
                                    {' '}
                                    Phone: {data?.clientUser.phone || '--'}
                                </p>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <h2 className="text-center text-lg">
                                    {data?.businessUser.firstName}{' '}
                                    {data?.businessUser.secondName}
                                </h2>
                            </li>
                            <li>
                                <p className="text-md">
                                    {' '}
                                    Email: {data?.businessUser.email || '--'}
                                </p>
                            </li>
                            <li>
                                <p className="text-md">
                                    {' '}
                                    Address:{' '}
                                    {data?.businessUser.address || '--'}
                                </p>
                            </li>
                            <li>
                                <p className="text-md">
                                    {' '}
                                    Phone: {data?.businessUser.phone || '--'}
                                </p>
                            </li>
                        </>
                    )}
                </ul>
            </div>
            {data?.status === 'opened' && (
                <div className="fixed bottom-16 left-1/2 flex w-[calc(100%-40px)] -translate-x-1/2 items-center justify-center gap-5">
                    {user?.role === 'business' && (
                        <Button
                            variant="outline"
                            onClick={() => setIsOpen(true)}
                            className="py-3"
                        >
                            Edit
                        </Button>
                    )}
                    <Button
                        variant="black"
                        disabled={isLoadingManage}
                        onClick={() =>
                            handleUpdateReservation(id, {
                                status: 'closed',
                            })
                        }
                        className="py-3"
                    >
                        {isLoadingManage ? 'Closing...' : 'Close'}
                    </Button>
                </div>
            )}

            <AnimatePresence>
                {isOpen && data && (
                    <EditReservations
                        key="edit-modal"
                        reservation={data}
                        close={() => setIsOpen(false)}
                    />
                )}
            </AnimatePresence>
        </div>
    );
}
