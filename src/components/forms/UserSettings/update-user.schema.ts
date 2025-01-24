import { z } from 'zod';

export const updateUserSchema = z.object({
    firstName: z.string().trim().min(1, { message: 'First name is required' }),
    secondName: z
        .string()
        .trim()
        .min(1, { message: 'Second name is required' }),
    email: z.string().trim().email({ message: 'Invalid email format' }),
    address: z
        .string()
        .trim()
        .min(1, { message: 'Address is required' })
        .optional(),
    job: z.string().trim().min(1, { message: 'Job is required' }).optional(),
    phone: z.string().trim().optional(),
});

export type UpdateUserType = z.infer<typeof updateUserSchema>;
