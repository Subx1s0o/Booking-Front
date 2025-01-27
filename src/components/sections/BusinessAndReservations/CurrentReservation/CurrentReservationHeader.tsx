import { cn } from '@/lib/utils';

interface Props {
    status: string;
    business?: string;
}

const CurrentReservationHeader = ({ status, business }: Props) => (
    <div className="mb-10 flex items-center justify-between">
        <div className="flex flex-col gap-2">
            <h1 className="text-md">{business}</h1>
            {business && <p className="text-base text-red">Reservation</p>}
        </div>
        <span
            className={cn('rounded-lg px-4 py-3 text-base text-white', {
                'bg-green': status === 'opened',
                'bg-red': status === 'closed',
            })}
        >
            Status: {status}
        </span>
    </div>
);

export default CurrentReservationHeader;
