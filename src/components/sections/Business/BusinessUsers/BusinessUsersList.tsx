'use client';

import { fecthBusinessUser } from '@/actions/fetchBusinessUser';
import { useQuery } from '@tanstack/react-query';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import BusinessUserItem from './BusinessUserItem';

export default function BusinessUsersList() {
    const { data, isLoading, error } = useQuery({
        queryKey: ['business-users'],
        queryFn: async () => await fecthBusinessUser(),
        staleTime: 1000 * 60 * 60 * 24,
    });

    if (isLoading) {
        return (
            <ul className="flex flex-col gap-5">
                <Skeleton
                    borderRadius={10}
                    baseColor="#21212105"
                    style={{ padding: '36px 0' }}
                />
                <Skeleton
                    borderRadius={10}
                    baseColor="#21212105"
                    style={{ padding: '36px 0' }}
                />
                <Skeleton
                    borderRadius={10}
                    baseColor="#21212105"
                    style={{ padding: '36px 0' }}
                />
                <Skeleton
                    borderRadius={10}
                    baseColor="#21212105"
                    style={{ padding: '36px 0' }}
                />
                <Skeleton
                    borderRadius={10}
                    baseColor="#21212105"
                    style={{ padding: '36px 0' }}
                />
            </ul>
        );
    }

    return (
        <ul className="flex flex-col gap-5">
            {data?.data?.map((user) => (
                <BusinessUserItem key={user.id} user={user} />
            ))}
        </ul>
    );
}
