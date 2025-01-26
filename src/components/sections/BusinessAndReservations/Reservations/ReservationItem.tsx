import { cn } from '@/lib/utils';
import { Reservation } from '@/types';
import Link from 'next/link';
import { User } from 'types/user';
export default function BusinessUserItem({
    reservation,
    user,
}: {
    reservation: Reservation;
    user: User | null;
}) {
    return (
        <li className="rounded-xl border-2 border-black bg-white p-6">
            <Link
                className="flex items-center justify-between"
                href={`/booking/reservations/${reservation.id}`}
            >
                <div className="flex flex-col gap-2">
                    <h2 className="text-md font-medium">
                        {user?.role === 'client'
                            ? `${reservation.businessUser.firstName} ${reservation.businessUser.secondName}`
                            : `${reservation.clientUser.firstName} ${reservation.clientUser.secondName}`}
                    </h2>
                    <span className="text-sm text-gray-600">
                        {user?.role === 'client'
                            ? reservation.businessUser.business
                            : 'Client'}
                    </span>
                </div>
                <div className="flex flex-col gap-2">
                    <span
                        className={cn(
                            'rounded-lg px-4 py-2 text-sm text-gray-600',
                            {
                                'bg-green text-white':
                                    reservation.status === 'opened',
                                'bg-red text-white':
                                    reservation.status === 'closed',
                            },
                        )}
                    >
                        {reservation.status.charAt(0).toUpperCase() +
                            reservation.status.slice(1)}
                    </span>
                    <span className="text-sm text-gray-600">
                        {reservation?.openedAt
                            ? new Date(reservation.openedAt).toLocaleDateString(
                                  'en-GB',
                                  {
                                      day: '2-digit',
                                      month: '2-digit',
                                      year: 'numeric',
                                  },
                              )
                            : '--'}
                    </span>
                </div>
            </Link>
        </li>
    );
}
