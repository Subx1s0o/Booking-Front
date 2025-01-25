import BusinessUserModal from '@/components/modals/BusinessUserModal';
import Button from '@/components/ui/Button';
import useBusinessUsers from '@/hooks/useBusinessUsers';
import { AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { User } from 'types/user';
import ErrorFallback from '../../Reservations/ErrorFallback';
import BusinessUserItem from './BusinessUserItem';
import SkeletonLoader from '@/components/sections/Loader/SkeletonLoader';

export default function BusinessUsersList() {
    const [businessUsers, setBusinessUsers] = useState<User[]>([]);
    const [choosedBusinessUser, setChoosedBusinessUser] = useState<User | null>(
        null,
    );
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(false);
    const [isLoadingMore, setIsLoadingMore] = useState(false);

    const { data, error } = useBusinessUsers(page);

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
    };

    useEffect(() => {
        return () => {
            setBusinessUsers([]);
            setPage(1);
        };
    }, []);

    if (error) {
        return (
            <ErrorFallback message="There was an error loading the users." />
        );
    }

    if (!businessUsers.length) {
        return <SkeletonLoader />;
    }

    return (
        <div className="mb-10">
            <ul className="flex flex-col gap-5">
                {businessUsers.map((user) => (
                    <BusinessUserItem
                        key={user.id}
                        user={user}
                        choose={() => setChoosedBusinessUser(user)}
                    />
                ))}
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
