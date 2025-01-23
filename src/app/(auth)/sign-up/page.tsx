import SharedLayout from '@/components/common/SharedLayout';
import AccountTypesList from '@/components/sections/Auth/SignUp/AccountTypesList';

import ChooseAccountType from '@/components/sections/Auth/SignUp/ChooseAccountType';

export default function SignUpPage() {
    return (
        <SharedLayout>
            <ChooseAccountType />
            <AccountTypesList />
        </SharedLayout>
    );
}
