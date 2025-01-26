import { motion } from 'framer-motion';
import UserSettingsForm from '../forms/UserSettings/UserSettingsForm';

export default function UserSettingsModal({
    closeSettings,
}: {
    closeSettings: () => void;
}) {
    return (
        <motion.div
            onClick={closeSettings}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 flex w-full items-center justify-center bg-black/40 px-5"
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="w-full rounded-2xl bg-white p-5"
            >
                <h2 className="mb-10 text-center text-md font-bold">
                    Settings
                </h2>
                <UserSettingsForm close={closeSettings} />
            </div>
        </motion.div>
    );
}
