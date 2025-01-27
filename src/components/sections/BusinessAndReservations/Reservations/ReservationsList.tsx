'use client';

import LoadMoreButton from '@/components/ui/LoadMoreButton';

import { useReservations } from '@/hooks/useReservations';
import { useUserStore } from '@/hooks/useUserStore';

import SkeletonLoader from '@/components/common/SkeletonLoader';
import ErrorFallback from '@/components/common/ErrorFallback';
import ReservationItem from './ReservationItem';

export default function ReservationsList() {
    const { user } = useUserStore();

    const { reservations, error, isLoading, hasMore, loadMore, isLoadingMore } =
        useReservations(1);

    if (isLoading) {
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
        </div>
    );
}
