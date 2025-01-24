'use client';

import { fecthBusinessUser } from '@/actions/fetchBusinessUser';
import { useQuery } from '@tanstack/react-query';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import BusinessUserItem from './BusinessUserItem';
import { useState } from 'react';
import { User } from '@/types';
import BusinessUserModal from '@/components/modals/BusinessUserModal';
import { AnimatePresence } from 'framer-motion';

export default function BusinessUsersList() {
    const [choosedBusinessUser, setChoosedBusinessUser] = useState<User | null>(
        null,
    );
    const { data, isLoading, error } = useQuery({
        queryKey: ['business-users'],
        queryFn: async () => await fecthBusinessUser(),
        staleTime: 1000 * 60 * 60 * 24,
    });

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
                    data?.data?.map((user) => (
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
            <AnimatePresence>
                {choosedBusinessUser && (
                    <BusinessUserModal
                        user={choosedBusinessUser}
                        close={() => setChoosedBusinessUser(null)}
                    />
                )}
            </AnimatePresence>
        </>
    );
}
