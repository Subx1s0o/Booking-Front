'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useUserStore } from '@/hooks/useUserStore';

import Icon from '@/components/ui/Icon';
import { logout } from '@/actions/logout';

export default function UserPopover({
    openSettings,
    closePopover,
}: {
    openSettings: () => void;
    closePopover: () => void;
}) {
    const { user } = useUserStore();

    if (!user) {
        return null;
    }

    return (
        <div className="fixed inset-0 z-50" onClick={closePopover}>
            <motion.div
                key="popover"
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute right-5 top-16 z-10 w-full max-w-[200px] rounded-xl bg-white px-5 py-3"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex flex-col">
                    <div className="mb-2 flex flex-col gap-1">
                        <h2 className="overflow-hidden text-ellipsis whitespace-nowrap text-base">
                            {user.firstName} {user.secondName}
                        </h2>
                        <p className="overflow-hidden text-ellipsis whitespace-nowrap text-xs text-gray-400">
                            {user.email}
                        </p>
                    </div>
                    <hr className="mb-4" />
                    <ul className="mb-4 flex flex-col gap-3">
                        <li>
                            <button
                                onClick={openSettings}
                                className="flex items-center gap-2"
                            >
                                <Icon
                                    id="icon-settings"
                                    w={18}
                                    h={18}
                                    className="text-black"
                                />
                                <p className="text-sm">Settings</p>
                            </button>
                        </li>
                        <li>
                            <a
                                href="mailto:subx1s0o@gmail.com"
                                className="flex items-center gap-2 text-sm"
                            >
                                <Icon
                                    id="icon-support"
                                    w={18}
                                    h={18}
                                    className="text-black"
                                />
                                Support
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/Subx1s0o"
                                className="flex items-center gap-2 text-sm"
                            >
                                <Icon
                                    id="icon-github"
                                    w={18}
                                    h={18}
                                    className="text-black"
                                />
                                Github
                            </a>
                        </li>
                    </ul>
                    <button
                        onClick={() => logout()}
                        className="flex items-center gap-2 rounded-md bg-red/15 px-2 py-1 text-start text-red"
                    >
                        <Icon
                            id="icon-exit"
                            w={20}
                            h={20}
                            className="rotate-180 text-red"
                        />
                        Logout
                    </button>
                </div>
            </motion.div>
        </div>
    );
}
