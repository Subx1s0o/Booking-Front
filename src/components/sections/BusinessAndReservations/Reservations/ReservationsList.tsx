'use client';
import { fetchReservations } from '@/actions/fetchReservations';
import EditReservations from '@/components/modals/EditReservations';
import ReservationModal from '@/components/modals/ReservationModal';
import { useReservationModals } from '@/hooks/useReservationModals';
import { useQuery } from '@tanstack/react-query';
import { AnimatePresence } from 'framer-motion';
import { Reservation } from 'types/reservation';
import ErrorFallback from './ErrorFallback';
import ReservationItem from './ReservationItem';
import { useUserStore } from '@/hooks/useUserStore';
import SkeletonLoader from '../../Loader/SkeletonLoader';

export default function ReservationsList() {
    const {
        choosedReservation,
        setChoosedReservation,
        isModalEditOpen,
        openEditModal,
        closeModals,
    } = useReservationModals();
    const { user } = useUserStore();
    const { data, isLoading, error } = useQuery<{
        data: Reservation[];
        total: number;
    }>({
        queryKey: ['reservations'],
        queryFn: async () => await fetchReservations(),
        staleTime: 1000 * 60 * 60 * 24,
    });

    if (isLoading) {
        return <SkeletonLoader />;
    }

    if (error) {
        return (
            <ErrorFallback message="There was an error loading the reservations." />
        );
    }

    return (
        <>
            <ul className="mb-10 flex flex-col gap-5">
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
                        reservation={choosedReservation}
                        close={closeModals}
                        user={user}
                        openEdit={openEditModal}
                    />
                )}
                {isModalEditOpen && (
                    <EditReservations
                        key="edit-modal"
                        reservation={choosedReservation}
                        close={closeModals}
                    />
                )}
            </AnimatePresence>
        </>
    );
}
