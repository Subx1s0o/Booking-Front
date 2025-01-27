import { User } from '@/types';
import Icon from '@/components/ui/Icon';
import Link from 'next/link';
import Image from 'next/image';

export default function BusinessUserItem({ user }: { user: User }) {
    return (
        <li className="rounded-xl border-2 border-black bg-white">
            <Link
                href={`/booking/business/${user.id}`}
                className="flex flex-col items-center justify-between"
            >
                <div className="relative h-48 w-full">
                    <Image
                        src={user.photo || '/images/placeholder.png'}
                        alt=""
                        layout="fill"
                        objectFit="cover"
                        className="rounded-t-xl"
                    />
                </div>
                <div className="flex w-full items-center justify-between px-6 pb-6 pt-4">
                    <div className="flex flex-col gap-2">
                        <h2 className="max-w-[230px] overflow-hidden text-ellipsis whitespace-nowrap text-md font-medium">
                            {user.business}
                        </h2>
                        <p className="max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap text-sm text-gray-600">
                            {user.address}
                        </p>
                    </div>
                    <Icon id="icon-arrow" w={24} h={24} />
                </div>
            </Link>
        </li>
    );
}
