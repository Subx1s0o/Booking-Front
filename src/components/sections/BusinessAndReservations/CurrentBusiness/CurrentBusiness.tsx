'use client';
import { fetchCurrentUser } from '@/actions/fetchCurrentUser';
import ErrorFallback from '@/components/common/ErrorFallback';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { createReservation } from '@/actions/createReservation';
import { toast } from '@/hooks/use-toast';
import Input from '@/components/ui/Input';
import { useForm } from 'react-hook-form';

export default function CurrentBusiness({ id }: { id: string }) {
    const { data, isLoading, error } = useQuery({
        queryKey: ['business-users', id],
        queryFn: async () => await fetchCurrentUser(id),
    });

    const [isCreating, setIsCreating] = useState(false);
    const { handleSubmit, control, watch } = useForm({
        defaultValues: {
            date: '',
            time: '',
        },
    });

    const queryClient = useQueryClient();

    const createReservationToBusinessUser = async (
        id: string,
        date: string,
        time: string,
    ) => {
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

    if (isLoading) {
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

    return (
        <div>
            <div className="relative mb-5 h-48 w-full">
                <Image
                    src={data?.photo || '/images/placeholder.png'}
                    alt=""
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-xl"
                />
            </div>

            <h2 className="mb-3 text-lg font-bold">{data?.business}</h2>

            <p className="mb-3 text-base font-medium">+{data?.phone}</p>

            <hr className="mb-6 h-0.5 bg-black" />

            <p className="mb-3 text-base">
                Manager: {data?.firstName} {data?.secondName}
            </p>
            <p className="mb-3 text-base">Email: {data?.email}</p>
            <p className="text-base">Address: {data?.address}</p>

            <form
                onSubmit={handleSubmit(({ date, time }) =>
                    createReservationToBusinessUser(id, date, time),
                )}
                className="my-5 flex flex-col gap-5"
            >
                <Input
                    control={control}
                    name="date"
                    type="date"
                    label="Date"
                    required
                />
                <Input
                    control={control}
                    name="time"
                    type="time"
                    label="Time"
                    required
                />
                <Button
                    disabled={isCreating}
                    variant="black"
                    type="submit"
                    className="mb-5 w-full py-3"
                >
                    {isCreating ? 'Loading...' : 'Make a reservation'}
                </Button>
            </form>
        </div>
    );
}
