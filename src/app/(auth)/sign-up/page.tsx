import SharedLayout from '@/components/common/SharedLayout';
import AccountTypesList from '@/components/sections/SignUp/AccountTypesList';

import ChooseAccountType from '@/components/sections/SignUp/ChooseAccountType';
import React from 'react';

export default function SignUpPage() {
    return (
        <SharedLayout>
            <ChooseAccountType />
            <AccountTypesList />
        </SharedLayout>
    );
}
