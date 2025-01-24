import { AxiosError, AxiosResponse } from 'axios';
import { api } from './api';
import { toast } from '@/hooks/use-toast';

export const fetchReservations = async (
    page: number = 1,
    limit: number = 10,
): Promise<{
    data: Reservation[];
    total: number;
}> => {
    try {
        const res: AxiosResponse<{ data: Reservation[]; total: number }> =
            await api.get(`/reservations?page=${page}&limit=${limit}`);
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

        return { data: [], total: 0 };
    }
};
