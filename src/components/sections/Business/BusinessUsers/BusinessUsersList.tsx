'use client';
import { fetchBusinessUser } from '@/actions/fetchBusinessUser';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import BusinessUserItem from './BusinessUserItem';
import { useEffect, useState } from 'react';
import { PaginationResponse, User } from '@/types';
import BusinessUserModal from '@/components/modals/BusinessUserModal';
import { AnimatePresence } from 'framer-motion';
import Button from '@/components/ui/Button';

export default function BusinessUsersList() {
    const [businessUsers, setBusinessUsers] = useState<User[]>([]);
    const [choosedBusinessUser, setChoosedBusinessUser] = useState<User | null>(
        null,
    );
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(false);
    const [isLoadingMore, setIsLoadingMore] = useState(false);

    const queryOptions: UseQueryOptions<PaginationResponse<User>> = {
        queryKey: ['business-users', page],
        queryFn: async () => {
            const response = await fetchBusinessUser(page);
            if (!response) {
                return { data: [], total: 0, page: 0, totalPages: 0 };
            }
            return response;
        },
        staleTime: 1000 * 60 * 60 * 24,
    };

    const { data, error } = useQuery(queryOptions);

    if (error) {
        return (
            <div className="text-red-500 mb-10 text-center">
                <p>An error occurred while fetching business users.</p>
            </div>
        );
    }

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
        setIsLoadingMore(true);
        setPage((prevPage) => prevPage + 1);
    };

    useEffect(() => {
        return () => {
            setBusinessUsers([]);
            setPage(1);
        };
    }, []);

    if (!businessUsers.length) {
        return (
            <ul className="flex flex-col gap-5">
                {Array.from({ length: 5 }).map((_, i) => (
                    <Skeleton
                        key={i}
                        borderRadius={12}
                        baseColor="#21212105"
                        style={{ padding: '36px 0' }}
                    />
                ))}
            </ul>
        );
    }

    return (
        <div className="mb-10">
            <ul className="flex flex-col gap-5">
                {businessUsers.length > 0 ? (
                    businessUsers.map((user) => (
                        <BusinessUserItem
                            key={user.id}
                            user={user}
                            choose={() => setChoosedBusinessUser(user)}
                        />
                    ))
                ) : (
                    <h1 className="text-balance text-center text-md font-semibold">
                        No Business Users found at the moment
                    </h1>
                )}
            </ul>

            {hasMore && !isLoadingMore && (
                <div className="mt-5 text-center">
                    <Button variant="black" onClick={loadMore}>
                        Load More
                    </Button>
                </div>
            )}

            {isLoadingMore && (
                <div className="mt-5 w-full text-center">
                    <span className="loader"></span>
                </div>
            )}

            <AnimatePresence>
                {choosedBusinessUser && (
                    <BusinessUserModal
                        user={choosedBusinessUser}
                        close={() => setChoosedBusinessUser(null)}
                    />
                )}
            </AnimatePresence>
        </div>
    );
}
