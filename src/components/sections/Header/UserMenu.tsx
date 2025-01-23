'use client';
import Icon from '@/components/ui/Icon';
import { useState } from 'react';
import UserPopover from './UserPopover';
import { AnimatePresence } from 'framer-motion';
import UserSettings from '@/components/modals/UserSettings';

export default function UserMenu() {
    const [openPopover, setOpenPopover] = useState(false);
    const [openSettings, setOpenSettings] = useState(false);

    return (
        <div className="">
            <button onClick={() => setOpenPopover((prev) => !prev)}>
                <Icon
                    id={
                        openPopover && !openSettings
                            ? 'icon-close'
                            : 'icon-menu'
                    }
                    w={30}
                    h={30}
                />
            </button>
            <AnimatePresence>
                {openPopover && !openSettings && (
                    <UserPopover
                        key="user-popover"
                        closePopover={() => setOpenPopover(false)}
                        openSettings={() => setOpenSettings(true)}
                    />
                )}
                {openSettings && (
                    <UserSettings
                        closeSettings={() => {
                            setOpenSettings(false);
                            setOpenPopover(false);
                        }}
                        key="user-settings"
                    />
                )}
            </AnimatePresence>
        </div>
    );
}
