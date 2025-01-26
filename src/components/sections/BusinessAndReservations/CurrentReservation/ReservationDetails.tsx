interface ReservationDetailsProps {
    date: string;
    time: string;
    duration: string;
}

const ReservationDetails = ({
    date,
    time,
    duration,
}: ReservationDetailsProps) => (
    <ul className="flex flex-col gap-5">
        <li>
            <p className="text-md">Date: {date}</p>
        </li>
        <li>
            <p className="text-md">Time: {time}</p>
        </li>
        <li>
            <p className="text-md">Duration: {duration}</p>
        </li>
    </ul>
);

export default ReservationDetails;
