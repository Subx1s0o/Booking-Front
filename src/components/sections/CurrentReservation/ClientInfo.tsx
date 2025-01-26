interface ClientInfoProps {
    firstName: string;
    secondName: string;
    email: string;
    phone: string;
}

const ClientInfo = ({
    firstName,
    secondName,
    email,
    phone,
}: ClientInfoProps) => (
    <ul className="mb-5 flex flex-col gap-5">
        <li>
            <p className="text-md">First name: {firstName || '--'}</p>
        </li>
        <li>
            <p className="text-md">Second name: {secondName || '--'}</p>
        </li>
        <li>
            <p className="text-md">Email: {email || '--'}</p>
        </li>
        <li>
            <p className="text-md">Phone: {phone || '--'}</p>
        </li>
    </ul>
);

export default ClientInfo;
