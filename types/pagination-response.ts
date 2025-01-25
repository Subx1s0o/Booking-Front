export type PaginationResponse<T> = {
    data: T[];
    total: number;
    page: number;
    totalPages: number;
};
