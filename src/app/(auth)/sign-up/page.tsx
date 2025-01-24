import SharedLayout from '@/components/common/SharedLayout';
import AccountTypesList from '@/components/sections/Auth/SignUp/AccountTypesList';

import ChooseAccountType from '@/components/sections/Auth/SignUp/ChooseAccountType';
import ReturnButton from '@/components/sections/Auth/SignUp/ReturnButton';

export default function SignUpPage() {
    return (
        <SharedLayout>
            <ChooseAccountType />
            <AccountTypesList />
            <ReturnButton />
        </SharedLayout>
    );
}
