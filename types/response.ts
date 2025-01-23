import { User } from './user';

export type ResponseType = {
    user: User;
    sessionToken: string;
};
