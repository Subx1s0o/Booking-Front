import z from 'zod';

export const signUpClientSchema = z.object({
    firstName: z.string().min(1, { message: 'First name is required' }),
    secondName: z.string().min(1, { message: 'Second name is required' }),
    email: z.string().email(),
    address: z.string().min(1, { message: 'Address is required' }),
    job: z.string().min(1, { message: 'Job is required' }),
    password: z.string().min(1, { message: 'Password is required' }),
});

export type SignUpClientType = z.infer<typeof signUpClientSchema>;
