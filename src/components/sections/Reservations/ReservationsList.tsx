'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchReservations } from '@/actions/fetchReservations';
import Skeleton from 'react-loading-skeleton';
import ReservationItem from './ReservationItem';
import { useState } from 'react';
import { useUserStore } from '@/hooks/useUserStore';
import { AnimatePresence } from 'framer-motion';
import ReservationModal from '@/components/modals/ReservationModal';
import { Reservation } from '@/types';
import EditReservations from '@/components/modals/EditReservations';
export default function ReservationsList() {
    const [choosedReservation, setChoosedReservation] =
        useState<Reservation | null>(null);
    const [isModalEditOpen, setIsModalEditOpen] = useState(false);
    const { data, isLoading, error } = useQuery<{
        data: Reservation[];
        total: number;
    }>({
        queryKey: ['reservations'],
        queryFn: async () => await fetchReservations(),
        staleTime: 1000 * 60 * 60 * 24,
    });

    const { user } = useUserStore();

    if (isLoading) {
        return (
            <ul className="flex flex-col gap-5">
                <Skeleton
                    borderRadius={12}
                    baseColor="#21212105"
                    style={{ padding: '36px 0' }}
                />
                <Skeleton
                    borderRadius={12}
                    baseColor="#21212105"
                    style={{ padding: '36px 0' }}
                />
                <Skeleton
                    borderRadius={12}
                    baseColor="#21212105"
                    style={{ padding: '36px 0' }}
                />
                <Skeleton
                    borderRadius={12}
                    baseColor="#21212105"
                    style={{ padding: '36px 0' }}
                />
                <Skeleton
                    borderRadius={12}
                    baseColor="#21212105"
                    style={{ padding: '36px 0' }}
                />
            </ul>
        );
    }
    return (
        <>
            <ul className="flex flex-col gap-5">
                {data?.data?.length && data?.data?.length > 0 ? (
                    data?.data?.map((reservation) => (
                        <ReservationItem
                            key={reservation.id}
                            reservation={reservation}
                            user={user}
                            choose={() => setChoosedReservation(reservation)}
                        />
                    ))
                ) : (
                    <h1 className="text-balance text-center text-md font-semibold">
                        No Reservations
                    </h1>
                )}
            </ul>
            <AnimatePresence>
                {choosedReservation && !isModalEditOpen && (
                    <ReservationModal
                        key="reservation-modal"
                        user={user}
                        reservation={choosedReservation}
                        close={() => setChoosedReservation(null)}
                        openEdit={() => setIsModalEditOpen(true)}
                    />
                )}
                {isModalEditOpen && (
                    <EditReservations
                        key="edit-modal"
                        reservation={choosedReservation}
                        close={() => {
                            setIsModalEditOpen(false);
                            setChoosedReservation(null);
                        }}
                    />
                )}
            </AnimatePresence>
        </>
    );
}
