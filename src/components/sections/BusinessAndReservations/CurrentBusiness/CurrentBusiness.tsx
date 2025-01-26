'use client';
import { fetchCurrentUser } from '@/actions/fetchCurrentUser';
import ErrorFallback from '@/components/common/ErrorFallback';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

export default function CurrentBusiness({ id }: { id: string }) {
    const { data, isLoading, error } = useQuery({
        queryKey: ['business-users', id],
        queryFn: async () => await fetchCurrentUser(id),
    });

    if (!data && isLoading) {
        return (
            <div className="flex min-h-[400px] items-center justify-center">
                <p className="flex items-center gap-2 text-md">
                    loading...
                    <span className="loader" />
                </p>
            </div>
        );
    }

    if (error) {
        return (
            <ErrorFallback message="There was an error loading the reservation." />
        );
    }

    return <div>{data?.business}</div>;
}
