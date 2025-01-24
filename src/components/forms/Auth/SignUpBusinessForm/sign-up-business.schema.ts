import z from 'zod';

export const signUpBusinessSchema = z.object({
    firstName: z.string().trim().min(1, { message: 'First name is required' }),
    secondName: z
        .string()
        .trim()
        .min(1, { message: 'Second name is required' }),
    email: z.string().trim().email({ message: 'Invalid email format' }),
    address: z.string().trim().min(1, { message: 'Address is required' }),
    job: z.string().trim().min(1, { message: 'Job is required' }),
    password: z.string().trim().min(1, { message: 'Password is required' }),
});

export type SignUpBusinessType = z.infer<typeof signUpBusinessSchema>;
