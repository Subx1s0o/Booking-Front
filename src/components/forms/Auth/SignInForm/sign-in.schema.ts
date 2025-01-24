import z from 'zod';

export const signInSchema = z.object({
    email: z.string().trim().email({ message: 'Invalid email format' }),
    password: z.string().trim().min(1, { message: 'Password is required' }),
});

export type SignInType = z.infer<typeof signInSchema>;
