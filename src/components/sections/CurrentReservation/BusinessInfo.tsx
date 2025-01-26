interface BusinessInfoProps {
    firstName: string;
    secondName: string;
    email: string;
    address: string;
    phone: string;
}

const BusinessInfo = ({
    firstName,
    secondName,
    email,
    address,
    phone,
}: BusinessInfoProps) => (
    <ul className="mb-5 flex flex-col gap-5">
        <li>
            <h2 className="text-center text-lg">
                {firstName} {secondName}
            </h2>
        </li>
        <li>
            <p className="text-md">Email: {email || '--'}</p>
        </li>
        <li>
            <p className="text-md">Address: {address || '--'}</p>
        </li>
        <li>
            <p className="text-md">Phone: {phone || '--'}</p>
        </li>
    </ul>
);

export default BusinessInfo;
