import { z } from 'zod';

export const updateUserSchema = z.object({
    firstName: z.string().min(1, { message: 'First name is required' }),
    secondName: z.string().min(1, { message: 'Second name is required' }),
    email: z.string().email(),
    address: z.string().min(1, { message: 'Address is required' }).optional(),
    job: z.string().min(1, { message: 'Job is required' }).optional(),
    phone: z.string().optional(),
});

export type UpdateUserType = z.infer<typeof updateUserSchema>;
