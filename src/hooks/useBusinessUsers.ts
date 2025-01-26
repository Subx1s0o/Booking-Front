import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchBusinessUser } from '@/actions/fetchBusinessUser';
import { User } from '@/types';

export function useBusinessUsers(initialPage: number) {
    const [page, setPage] = useState(initialPage);
    const [businessUsers, setBusinessUsers] = useState<User[]>([]);
    const [hasMore, setHasMore] = useState(false);
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    const [shouldScroll, setShouldScroll] = useState(false);

    const { data, error } = useQuery({
        queryKey: ['business-users', page],
        queryFn: async () => {
            const response = await fetchBusinessUser(page);
            if (!response) {
                return { data: [], total: 0, totalPages: 0 };
            }
            return response;
        },
        staleTime: 1000 * 60 * 60 * 24,
    });

    useEffect(() => {
        if (data) {
            if (page === 1) {
                setBusinessUsers(data.data);
            } else {
                setBusinessUsers((prev) => [...prev, ...data.data]);
            }
            setHasMore(page < data.totalPages);
            setIsLoadingMore(false);
        }
    }, [data, page]);

    const loadMore = () => {
        if (!hasMore || isLoadingMore) return;

        setIsLoadingMore(true);
        setPage((prevPage) => prevPage + 1);
        setShouldScroll(true);
    };

    useEffect(() => {
        if (shouldScroll && !isLoadingMore) {
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: 'smooth',
            });
            setShouldScroll(false);
        }
    }, [shouldScroll, isLoadingMore]);

    useEffect(() => {
        return () => {
            setBusinessUsers([]);
            setPage(initialPage);
        };
    }, [initialPage]);

    return {
        businessUsers,
        error,
        hasMore,
        loadMore,
        isLoadingMore,
    };
}
