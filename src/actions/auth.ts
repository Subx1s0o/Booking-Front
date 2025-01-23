'use server';

import { cookies } from 'next/headers';
import { jwtVerify } from 'jose';

export async function auth() {
    const session = (await cookies()).get('session')?.value;

    if (!session) {
        return null;
    }

    try {
        const { payload } = await jwtVerify(
            session,
            new TextEncoder().encode(process.env.JWT_SECRET),
        );
        return payload;
    } catch (error) {
        return null;
    }
}
