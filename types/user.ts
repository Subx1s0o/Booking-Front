export type User = {
    id: string;
    firstName: string;
    secondName: string;
    password: string;
    phone?: number;
    email: string;
    role: 'client' | 'business';
    address?: string;
    business?: string;
    photo?: string;
};
