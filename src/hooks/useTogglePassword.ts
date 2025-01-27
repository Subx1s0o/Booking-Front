import { useState } from 'react';

export function useTogglePassword() {
    const [viewPassword, setViewPassword] = useState(false);

    const toggleViewPassword = () => setViewPassword((prev) => !prev);

    return {
        viewPassword,
        toggleViewPassword,
    };
}
