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
    <ul className="mb-5 flex flex-col gap-3">
        <li>
            <p className="text-base font-medium">
                Manager: {firstName || '--'} {secondName || '--'}
            </p>
        </li>
        <li>
            <p className="text-base font-medium">Email: {email || '--'}</p>
        </li>
        <li>
            <p className="text-base font-medium">Phone: {phone || '--'}</p>
        </li>
        <li>
            <p className="text-base font-medium">Address: {address || '--'}</p>
        </li>
    </ul>
);

export default BusinessInfo;
