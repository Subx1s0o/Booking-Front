'use client';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MainContentSwitcher() {
    const pathname = usePathname();
    return (
        <div className="mb-10 mt-24">
            <div className="grid grid-cols-2 gap-5 text-center">
                <Link
                    className={cn('border border-b-black p-2', {
                        'border-2 font-semibold':
                            pathname === '/booking/business',
                    })}
                    href="/booking/business"
                >
                    Business
                </Link>

                <Link
                    className={cn('border border-b-black p-2', {
                        'border-2 font-semibold':
                            pathname === '/booking/reservations',
                    })}
                    href="/booking/reservations"
                >
                    Reservations
                </Link>
            </div>
        </div>
    );
}
