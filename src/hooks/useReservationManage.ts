import { deleteReservation } from '@/actions/deleteReservation';
import { updateReservation } from '@/actions/updateReservation';
import { useState } from 'react';
import { toast } from './use-toast';
import { useQueryClient } from '@tanstack/react-query';

import { useRouter } from 'next/navigation';
import { updateReservationTime } from '@/actions/updateReservationTime';

export const useReservationManage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isUpdating, setIsUpdating] = useState(false);
    const queryClient = useQueryClient();
    const router = useRouter();

    const handleCloseReservation = async (id: string) => {
        setIsLoading(true);
        const result = await updateReservation(id, { status: 'closed' });
        if (result) {
            queryClient.invalidateQueries({ queryKey: ['reservation', id] });
            queryClient.invalidateQueries({ queryKey: ['reservations'] });
            toast({
                title: 'Success',
                description: 'Reservation closed successfully',
                variant: 'default',
            });
            setIsLoading(false);
        }
        setIsLoading(false);
    };

    const handleUpdateReservationTime = async (
        id: string,
        data: { date: string; time: string },
    ) => {
        setIsUpdating(true);
        const result = await updateReservationTime(id, data);
        if (result) {
            queryClient.invalidateQueries({ queryKey: ['reservations'] });
            queryClient.invalidateQueries({ queryKey: ['reservation', id] });
            toast({
                title: 'Success',
                description: 'Reservation closed successfully',
                variant: 'default',
            });
            setIsUpdating(false);
        }
        setIsUpdating(false);
    };

    const handleDeleteReservation = async (id: string) => {
        setIsLoading(true);
        const result = await deleteReservation(id);

        if (result) {
            queryClient.invalidateQueries({
                queryKey: ['reservations'],
                exact: false,
            });

            router.push('/booking/reservations');
            router.refresh();
            toast({
                title: 'Success',
                description: 'Reservation Deleted successfully',
                variant: 'default',
            });
            setIsLoading(false);
        }
        setIsLoading(false);
    };

    return {
        handleUpdateReservationTime,
        handleCloseReservation,
        handleDeleteReservation,
        isLoading,
        isUpdating,
    };
};
