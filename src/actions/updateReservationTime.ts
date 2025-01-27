import { toast } from '@/hooks/use-toast';
import { AxiosError } from 'axios';
import { api } from './api';

export const updateReservationTime = async (
    id: string,
    data: { date: string; time: string },
) => {
    try {
        const res = await api.patch(`/reservations/${id}/time`, data);

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
