'use client';
import Icon from '@/components/ui/Icon';
import { useState } from 'react';
import UserPopover from '@/components/modals/UserPopover';
import { AnimatePresence } from 'framer-motion';
import UserSettingsModal from '@/components/modals/UserSettingsModal';

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
                    <UserSettingsModal
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
