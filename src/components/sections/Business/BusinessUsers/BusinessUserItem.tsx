import { User } from '@/types';

export default function BusinessUserItem({ user }: { user: User }) {
    return (
        <li className="py-6">
            <div className="flex flex-col gap-5">
                <h2 className="text-md font-medium">
                    {user.firstName} {user.secondName}
                </h2>
                <p className="text-sm">{user.job}</p>
            </div>
        </li>
    );
}
