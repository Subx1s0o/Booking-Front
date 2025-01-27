'use client';

import { useUserStore } from '@/hooks/useUserStore';
import BusinessUsers from './BusinessUsers/BusinessUsers';
import ManageBusiness from './ManageBusiness';

export default function BusinessSection() {
    const { user } = useUserStore();
    return (
        <section>
            {user?.role === 'client' ? (
                <BusinessUsers />
            ) : (
                <ManageBusiness user={user} />
            )}
        </section>
    );
}
