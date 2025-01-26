import { User } from '@/types';
import Icon from '@/components/ui/Icon';
import Link from 'next/link';
export default function BusinessUserItem({ user }: { user: User }) {
    return (
        <li className="rounded-xl border-2 border-black bg-white p-6">
            <Link
                href={`/booking/business/${user.id}`}
                className="flex items-center justify-between"
            >
                <div className="flex flex-col gap-2">
                    <h2 className="max-w-[230px] overflow-hidden text-ellipsis whitespace-nowrap text-md font-medium">
                        {user.business}
                    </h2>
                    <p className="max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap text-sm text-gray-600">
                        {user.address}
                    </p>
                </div>
                <Icon id="icon-arrow" w={24} h={24} />
            </Link>
        </li>
    );
}
