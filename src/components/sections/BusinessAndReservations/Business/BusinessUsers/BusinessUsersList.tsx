import Button from '@/components/ui/Button';
import { useBusinessUsers } from '@/hooks/useBusinessUsers';

import ErrorFallback from '@/components/common/ErrorFallback';
import BusinessUserItem from './BusinessUserItem';
import SkeletonLoader from '@/components/common/SkeletonLoader';

export default function BusinessUsersList() {
    const { businessUsers, error, hasMore, loadMore, isLoadingMore } =
        useBusinessUsers(1);

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
                    <BusinessUserItem key={user.id} user={user} />
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
        </div>
    );
}
