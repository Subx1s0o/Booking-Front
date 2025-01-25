'use client';

import { fecthUser } from '@/actions/fecthUser';
import { logout } from '@/actions/logout';
import { useUserStore } from '@/hooks/useUserStore';
import { useQuery } from '@tanstack/react-query';
import Loader from '../sections/Loader/Loader';
import { useEffect } from 'react';

export default function MainTemplate({
    children,
}: {
    children: React.ReactNode;
}) {
    const { data, error, isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: fecthUser,
        staleTime: 1000 * 60 * 60 * 30,
        
    });

    const { setUser } = useUserStore();

    useEffect(() => {
        if (data) {
            setUser(data);
        }
    }, [data, setUser]);

    if (isLoading) return <Loader />;
    if (error instanceof Error || !data) {
        logout();
        return <></>;
    }

    return <>{children}</>;
}
