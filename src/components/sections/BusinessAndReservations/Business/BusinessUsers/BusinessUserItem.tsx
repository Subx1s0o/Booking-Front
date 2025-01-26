import { User } from '@/types';
import Icon from '@/components/ui/Icon';
export default function BusinessUserItem({
    user,
    choose,
}: {
    user: User;
    choose: (user: User) => void;
}) {
    console.log(user);
    return (
        <li
            onClick={() => choose(user)}
            className="flex items-center justify-between rounded-xl border-2 border-black bg-white p-6"
        >
            <div className="flex flex-col gap-2">
                <h2 className="text-md font-medium">
                    {user.firstName} {user.secondName}
                </h2>
                <p className="text-sm text-gray-600">{user.business}</p>
            </div>
            <Icon id="icon-arrow" w={24} h={24} />
        </li>
    );
}
