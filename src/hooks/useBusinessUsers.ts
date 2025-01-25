import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { fetchBusinessUser } from '@/actions/fetchBusinessUser';
import { PaginationResponse, User } from '@/types';

const useBusinessUsers = (page: number) => {
    const queryOptions: UseQueryOptions<PaginationResponse<User>> = {
        queryKey: ['business-users', page],
        queryFn: async () => {
            const shouldThrowError = Math.random() > 0.5;
            if (shouldThrowError) {
                throw new Error(
                    'Simulated error: Failed to fetch business users',
                );
            }

            const response = await fetchBusinessUser(page);
            if (!response) {
                return { data: [], total: 0, page: 0, totalPages: 0 };
            }
            return response;
        },
        staleTime: 1000 * 60 * 60 * 24,
    };

    return useQuery(queryOptions);
};

export default useBusinessUsers;
