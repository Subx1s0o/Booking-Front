import { cn } from '@/lib/utils';
import { Reservation } from '@/types';
import Link from 'next/link';
import { User } from 'types/user';
import Image from 'next/image';
export default function BusinessUserItem({
    reservation,
    user,
}: {
    reservation: Reservation;
    user: User | null;
}) {
    return (
        <li className="rounded-xl border-2 border-black bg-white">
            <Link
                className="flex flex-col items-center justify-between"
                href={`/booking/reservations/${reservation.id}`}
            >
                <div className="relative h-48 w-full">
                    <Image
                        src={
                            reservation?.businessUser?.photo ||
                            '/images/placeholder.png'
                        }
                        alt=""
                        layout="fill"
                        objectFit="cover"
                        className="rounded-t-xl"
                    />
                </div>
                <div className="flex w-full items-center justify-between px-6 pb-6 pt-4">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-md font-medium">
                            {user?.role === 'client'
                                ? `${reservation.businessUser.business}`
                                : `${reservation.clientUser.firstName} ${reservation.clientUser.secondName}`}
                        </h2>
                        <span className="text-sm text-gray-600">
                            {user?.role === 'client'
                                ? reservation.businessUser.address
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
                                ? new Date(
                                      reservation.openedAt,
                                  ).toLocaleDateString('en-GB', {
                                      day: '2-digit',
                                      month: '2-digit',
                                      year: 'numeric',
                                  })
                                : '--'}
                        </span>
                    </div>
                </div>
            </Link>
        </li>
    );
}
