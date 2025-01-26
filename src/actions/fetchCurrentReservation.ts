import { AxiosError, AxiosResponse } from 'axios';
import { api } from './api';
import { toast } from '@/hooks/use-toast';
import { Reservation } from '@/types';

export const fetchCurrentReservation = async (
    id: string,
): Promise<Reservation> => {
    try {
        const res: AxiosResponse<Reservation> = await api.get(
            `/reservations/${id}`,
        );
        return res.data;
    } catch (error) {
        if (error instanceof AxiosError) {
            // toast({
            //     title: 'Error',
            //     description:
            //         error.response?.data?.message ||
            //         'An unexpected error occurred',
            //     variant: 'default',
            // });
        } else {
            toast({
                title: 'Error',
                description: 'An unexpected error occurred',
                variant: 'default',
            });
        }

        return {} as Reservation;
    }
};
