import { AxiosError, AxiosResponse } from 'axios';
import { api } from './api';
import { toast } from '@/hooks/use-toast';
import { PaginationResponse, Reservation } from '@/types';

export const fetchReservations = async (
    page: number = 1,
    limit: number = 10,
): Promise<PaginationResponse<Reservation>> => {
    try {
        const res: AxiosResponse<PaginationResponse<Reservation>> =
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

        return {} as PaginationResponse<Reservation>;
    }
};
