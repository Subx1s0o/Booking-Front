'use client';
import { fetchCurrentUser } from '@/actions/fetchCurrentUser';
import { createReservation } from '@/actions/createReservation';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from '@/hooks/use-toast';
import React, { useState } from 'react';
import BusinessLoader from './BusinessLoader';
import ErrorFallback from '@/components/common/ErrorFallback';
import CurrentBusinessDetails from './CurrentBusinessDetails';
import BusinessForm from '@/components/forms/BusinessForm/BusinessForm';

export default function CurrentBusiness({ id }: { id: string }) {
    const { data, isLoading, error } = useQuery({
        queryKey: ['business-users', id],
        queryFn: async () => await fetchCurrentUser(id),
    });

    const [isCreating, setIsCreating] = useState(false);
    const queryClient = useQueryClient();

    const handleReservationSubmit = async ({
        date,
        time,
    }: {
        date: string;
        time: string;
    }) => {
        setIsCreating(true);
        const result = await createReservation(id, { date, time });

        if (result) {
            queryClient.invalidateQueries({ queryKey: ['reservations'] });
            toast({
                title: 'Success',
                description: 'Reservation made successfully',
                variant: 'default',
            });
        }
        setIsCreating(false);
    };

    if (isLoading) return <BusinessLoader />;
    if (error)
        return (
            <ErrorFallback message="There was an error loading the reservation." />
        );

    return (
        <div>
            <CurrentBusinessDetails
                photo={data?.photo}
                business={data?.business}
                phone={data?.phone}
                firstName={data?.firstName}
                secondName={data?.secondName}
                email={data?.email}
                address={data?.address}
            />
            <BusinessForm
                onSubmit={handleReservationSubmit}
                isSubmitting={isCreating}
            />
        </div>
    );
}
