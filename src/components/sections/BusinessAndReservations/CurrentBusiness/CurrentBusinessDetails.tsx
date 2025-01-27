'use client';
import Image from 'next/image';

interface CurrentBusinessDetailsProps {
    photo: string | undefined;
    business: string | undefined;
    phone: number | undefined;
    firstName: string | undefined;
    secondName: string | undefined;
    email: string | undefined;
    address: string | undefined;
}

export default function CurrentBusinessDetails({
    photo,
    business,
    phone,
    firstName,
    secondName,
    email,
    address,
}: CurrentBusinessDetailsProps) {
    return (
        <div>
            <div className="relative mb-5 h-48 w-full">
                <Image
                    src={photo || '/images/placeholder.png'}
                    alt="Business Image"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-xl"
                />
            </div>

            <h2 className="mb-3 text-lg font-bold">{business}</h2>

            {phone && <p className="mb-3 text-base font-medium">+{phone}</p>}

            <hr className="mb-6 h-0.5 bg-black" />

            <p className="mb-3 text-base">
                Manager: {firstName} {secondName}
            </p>
            <p className="mb-3 text-base">Email: {email}</p>
            <p className="mb-5 text-base">Address: {address}</p>
        </div>
    );
}
