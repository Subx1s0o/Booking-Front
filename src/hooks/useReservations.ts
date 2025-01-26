import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchReservations } from '@/actions/fetchReservations';
import { PaginationResponse } from 'types/pagination-response';
import { Reservation } from 'types/reservation';

export function useReservations(initialPage: number) {
    const [page, setPage] = useState(initialPage);
    const [reservations, setReservations] = useState<Reservation[]>([]);
    const [hasMore, setHasMore] = useState(false);
    const [isLoadingMore, setIsLoadingMore] = useState(false);

    const { data, isLoading, error } = useQuery<
        PaginationResponse<Reservation>,
        Error
    >({
        queryKey: ['reservations', page],
        queryFn: async () => await fetchReservations(page, 7),
        staleTime: 1000 * 60 * 60 * 24,
    });

    useEffect(() => {
        if (data) {
            const uniqueReservations = Array.from(
                new Map(
                    [...reservations, ...data.data].map((item) => [
                        item.id,
                        item,
                    ]),
                ).values(),
            );
            setReservations(uniqueReservations);
            setHasMore(page < data.totalPages);
            setIsLoadingMore(false);
        }
    }, [data, page]);

    const loadMore = () => {
        if (!hasMore || isLoadingMore) return;
        setIsLoadingMore(true);
        setPage((prevPage) => prevPage + 1);
    };

    return { reservations, isLoading, error, hasMore, loadMore, isLoadingMore };
}
