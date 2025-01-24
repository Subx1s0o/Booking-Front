import { cn } from '@/lib/utils';
import { User } from 'types/user';
export default function BusinessUserItem({
    reservation,
    choose,
    user,
}: {
    reservation: Reservation;
    user: User | null;
    choose: (reservation: Reservation) => void;
}) {
    return (
        <li
            onClick={() => choose(reservation)}
            className="flex items-center justify-between rounded-xl border-2 border-black bg-white p-6"
        >
            <div className="flex flex-col gap-2">
                <h2 className="text-md font-medium">
                    {user?.role === 'client'
                        ? `${reservation.businessUser.firstName} ${reservation.businessUser.secondName}`
                        : `${reservation.clientUser.firstName} ${reservation.clientUser.secondName}`}
                </h2>
                <span className="text-sm text-gray-600">
                    {reservation.businessUser.job}
                </span>
            </div>
            <span
                className={cn('rounded-lg px-4 py-2 text-sm text-gray-600', {
                    'bg-green text-white': reservation.status === 'opened',
                    'bg-red text-white': reservation.status === 'closed',
                })}
            >
                {reservation.status.charAt(0).toUpperCase() +
                    reservation.status.slice(1)}
            </span>
        </li>
    );
}
