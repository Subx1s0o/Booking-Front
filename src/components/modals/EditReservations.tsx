import { Reservation } from '@/types';
import { motion } from 'framer-motion';
import UpdateReservationForm from '../forms/Reservations/UpdateReservationForm';

export default function EditReservations({
    reservation,
    close,
}: {
    close: () => void;
    reservation: Reservation | null;
}) {
    return (
        <motion.div
            onClick={close}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 flex w-full items-center justify-center bg-black/40 px-5"
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="w-full rounded-2xl bg-white p-5"
            >
                <h2 className="mb-10 text-center text-md font-bold">
                    Edit Reservation
                </h2>
                <ul className="mb-5 flex flex-col gap-3">
                    <li className="text-base">
                        <span className="font-semibold">First Name: </span>
                        {reservation?.clientUser.firstName}
                    </li>
                    <li className="text-base">
                        <span className="font-semibold"> Second Name: </span>
                        {reservation?.clientUser.firstName}
                    </li>
                    <li className="text-base">
                        <span className="font-semibold">Email: </span>
                        {reservation?.clientUser.email}
                    </li>
                    <li className="text-base">
                        <span className="font-semibold">Phone: </span>
                        {reservation?.clientUser.phone || '--'}
                    </li>
                </ul>
                <UpdateReservationForm
                    reservation={reservation}
                    close={close}
                />
            </div>
        </motion.div>
    );
}
