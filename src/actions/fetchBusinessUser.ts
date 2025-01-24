import { AxiosError, AxiosResponse } from 'axios';
import { api } from './api';
import { User } from 'types/user';
import { toast } from '@/hooks/use-toast';

export const fecthBusinessUser = async (page = 1, limit = 10) => {
    try {
        const res: AxiosResponse<{ data: User[]; total: number }> =
            await api.get(`/users/business?page=${page}&limit=${limit}`);
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
