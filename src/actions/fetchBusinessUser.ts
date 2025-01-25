import { AxiosError, AxiosResponse } from 'axios';
import { api } from './api';

import { toast } from '@/hooks/use-toast';
import { User } from 'types/user';
import { PaginationResponse } from 'types/pagination-response';

export const fetchBusinessUser = async (page = 1, limit = 7) => {
    try {
        const res: AxiosResponse<PaginationResponse<User>> = await api.get(
            `/users/business?page=${page}&limit=${limit}`,
        );
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
