'use client';
import EditReservations from '@/components/modals/EditReservations';
import ReservationModal from '@/components/modals/ReservationModal';
import LoadMoreButton from '@/components/ui/LoadMoreButton';
import { useReservationModals } from '@/hooks/useReservationModals';
import { useReservations } from '@/hooks/useReservations';
import { useUserStore } from '@/hooks/useUserStore';
import { AnimatePresence } from 'framer-motion';
import SkeletonLoader from '../../Loading/SkeletonLoader';
import ErrorFallback from './ErrorFallback';
import ReservationItem from './ReservationItem';

export default function ReservationsList() {
    const {
        choosedReservation,
        setChoosedReservation,
        isModalEditOpen,
        openEditModal,
        closeModals,
    } = useReservationModals();
    const { user } = useUserStore();

    const { reservations, error, hasMore, loadMore, isLoadingMore } =
        useReservations(1);

    if (!reservations.length) {
        return <SkeletonLoader />;
    }

    if (error) {
        return (
            <ErrorFallback message="There was an error loading the reservations." />
        );
    }

    return (
        <div className="mb-10">
            <ul className="flex flex-col gap-5">
                {reservations.length ? (
                    reservations.map((reservation) => (
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

            {hasMore && !isLoadingMore && (
                <LoadMoreButton loadMore={loadMore} />
            )}

            {isLoadingMore && (
                <div className="mt-5 w-full text-center">
                    <span className="loader"></span>
                </div>
            )}

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
        </div>
    );
}
