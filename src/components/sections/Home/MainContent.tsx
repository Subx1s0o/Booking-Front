'use client';

import { useUserStore } from '@/hooks/useUserStore';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MainContent() {
    const { user } = useUserStore();
    const pathname = usePathname();
    return (
        <div className="mt-24">
            <div className="grid grid-cols-2 gap-5 text-center">
                {user?.role === 'client' && (
                    <Link
                        className={cn('border border-b-black p-2', {
                            'border-2': pathname === '/booking/business',
                        })}
                        href="/booking/business"
                    >
                        Business Users
                    </Link>
                )}
                <Link
                    className={cn('border border-b-black p-2', {
                        'border-2': pathname === '/booking/reservations',
                    })}
                    href="/booking/reservations"
                >
                    Reservations
                </Link>
            </div>
        </div>
    );
}
