import { toast } from '@/hooks/use-toast';
import { AxiosError } from 'axios';

import { api } from './api';

export const createReservation = async (id: string) => {
    try {
        const res = await api.post(`/reservations/${id}`);
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
        return;
    }
};
