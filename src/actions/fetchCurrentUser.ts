import { AxiosError, AxiosResponse } from 'axios';
import { api } from './api';

import { toast } from '@/hooks/use-toast';
import { User } from 'types/user';

export const fetchCurrentUser = async (id: string) => {
    try {
        const res: AxiosResponse<User> = await api.get(`/users/${id}`);
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
