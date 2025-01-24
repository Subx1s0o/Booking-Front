type Reservation = {
    id: string;
    clientUserId: string;
    businessUserId: string;
    reservationDate: string | null;
    openedAt: string;
    time: string | null;
    duration: number | null;
    status: 'opened' | 'closed';
    clientUser: {
        firstName: string;
        secondName: string;
        email: string;
        phone: number;
    };
    businessUser: {
        firstName: string;
        secondName: string;
        address: string;
        job: string;
        email: string;
        phone: number;
    };
};
