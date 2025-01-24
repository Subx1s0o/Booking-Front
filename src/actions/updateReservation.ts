import { toast } from '@/hooks/use-toast';
import { AxiosError } from 'axios';
import { api } from './api';
import { UpdateReservationType } from 'types/updateReservation';

export const updateReservation = async (
    id: string,
    data: UpdateReservationType | { status: 'closed' },
) => {
    try {
        const res = await api.patch(`/reservations/${id}`, data);

        return res.data;
    } catch (error) {
        if (error instanceof AxiosError) {
            toast({
                title: 'Error',
                description:
                    error.response?.data?.message ||
                    'An unexpected error occurred',
                variant: 'default',
            });
        } else {
            toast({
                title: 'Error',
                description: 'An unexpected error occurred',
                variant: 'default',
            });
        }
    }
};
