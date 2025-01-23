'use client';

import { useQuery } from '@tanstack/react-query';
import Header from '../Header/Header';
import WelcomeUser from './WelcomeUser';
import { fecthUser } from '@/actions/fecthUser';
import Loader from '../Loader/Loader';
import { logout } from '@/actions/logout';
import { useUserStore } from '@/hooks/useUserStore';
import { useEffect } from 'react';

export default function HomeSection() {
    const { data, error, isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: fecthUser,
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

    return (
        <>
            <Header />
            <WelcomeUser />
        </>
    );
}
