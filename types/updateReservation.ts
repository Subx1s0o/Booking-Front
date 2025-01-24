export type UpdateReservationType = {
    status?: 'client' | 'business';
    time?: string;
    reservationDate?: Date;
    duration?: number;
};
