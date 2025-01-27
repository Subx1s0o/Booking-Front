export type Reservation = {
    id: string;
    clientUserId: string;
    businessUserId: string;
    date: string | null | undefined;
    openedAt: string;
    time: string | null;
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
        business: string;
        email: string;
        photo: string;
        phone: number;
    };
};
