import { deleteReservation } from '@/actions/deleteReservation';
import { updateReservation } from '@/actions/updateReservation';
import { useState } from 'react';
import { toast } from './use-toast';
import { useQueryClient } from '@tanstack/react-query';
import { UpdateReservationType } from 'types/updateReservation';

export const useReservationManage = (close?: () => void) => {
    const [isLoading, setIsLoading] = useState(false);
    const queryClient = useQueryClient();

    const handleCloseReservation = async (id: string) => {
        setIsLoading(true);
        const result = await updateReservation(id, { status: 'closed' });
        if (result) {
            queryClient.invalidateQueries({ queryKey: ['reservations'] });
            toast({
                title: 'Success',
                description: 'Reservation closed successfully',
                variant: 'default',
            });
            setIsLoading(false);
            close?.();
        }
        setIsLoading(false);
    };

    const handleUpdateReservation = async (
        id: string,
        data: UpdateReservationType | { status: 'closed' },
    ) => {
        setIsLoading(true);
        const result = await updateReservation(id, data);
        if (result) {
            queryClient.invalidateQueries({ queryKey: ['reservations'] });
            queryClient.invalidateQueries({ queryKey: ['reservations', id] });
            toast({
                title: 'Success',
                description: 'Reservation closed successfully',
                variant: 'default',
            });
            setIsLoading(false);
            close?.();
        }
        setIsLoading(false);
    };

    const handleDeleteReservation = async (id: string) => {
        setIsLoading(true);
        const result = await deleteReservation(id);
        if (result) {
            queryClient.invalidateQueries({ queryKey: ['reservations'] });
            toast({
                title: 'Success',
                description: 'Reservation closed successfully',
                variant: 'default',
            });
            setIsLoading(false);
            close?.();
        }
        setIsLoading(false);
    };

    return {
        handleUpdateReservation,
        handleCloseReservation,
        handleDeleteReservation,
        isLoading,
    };
};
