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
    <ul className="mb-5 flex flex-col gap-3">
        <li>
            <p className="text-base font-medium">
                First name: {firstName || '--'}
            </p>
        </li>
        <li>
            <p className="text-base font-medium">
                Second name: {secondName || '--'}
            </p>
        </li>
        <li>
            <p className="text-base font-medium">Email: {email || '--'}</p>
        </li>
        <li>
            <p className="text-base font-medium">Phone: {phone || '--'}</p>
        </li>
    </ul>
);

export default ClientInfo;
