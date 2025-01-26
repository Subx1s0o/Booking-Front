'use client';
import { motion } from 'framer-motion';
import { Reservation, User } from '@/types';
import Button from '../ui/Button';
import { useReservationManage } from '@/hooks/useReservationManage';
export default function ReservationModal({
    user,
    reservation,
    close,
    openEdit,
}: {
    user: User | null;
    reservation: Reservation;
    close: () => void;
    openEdit: () => void;
}) {
    const { handleCloseReservation, handleDeleteReservation, isLoading } =
        useReservationManage(close);

    return (
        <motion.div
            onClick={close}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-10 flex w-full items-center justify-center bg-black/40 px-5"
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="w-full rounded-2xl bg-white p-5"
            >
                <h2 className="mb-5 text-center text-md font-bold">
                    {user?.role === 'client'
                        ? `${reservation.businessUser.firstName} ${reservation.businessUser.secondName}`
                        : `${reservation.clientUser.firstName} ${reservation.clientUser.secondName}`}
                </h2>
                <ul className="mb-5 flex flex-col gap-3">
                    {user?.role === 'client' && (
                        <li className="text-base">
                            <span className="font-semibold">Business:</span>{' '}
                            {reservation.businessUser.business}
                        </li>
                    )}
                    <li className="text-base">
                        <span className="font-semibold">Email:</span>{' '}
                        {user?.role === 'client'
                            ? `${reservation.businessUser.email}`
                            : `${reservation.clientUser.email}`}
                    </li>
                    {user?.role === 'client' && (
                        <li className="text-base">
                            <span className="font-semibold">Address:</span>{' '}
                            {reservation.businessUser.address}
                        </li>
                    )}

                    <li className="text-base">
                        <span className="font-semibold">Phone: </span>
                        {user?.role === 'client'
                            ? reservation.businessUser?.phone || '--'
                            : user?.role === 'business'
                              ? reservation.clientUser?.phone || '--'
                              : '--'}
                    </li>

                    <li className="text-base">
                        <span className="font-semibold">Reservation Date:</span>{' '}
                        {reservation.reservationDate
                            ? new Date(
                                  reservation.reservationDate,
                              ).toLocaleDateString('en-US', {
                                  year: 'numeric',
                                  month: 'long',
                                  day: 'numeric',
                              })
                            : '--'}
                    </li>
                    <li className="text-base">
                        <span className="font-semibold">Time:</span>{' '}
                        {reservation.time || '--'}
                    </li>
                    <li className="text-base">
                        <span className="font-semibold">Duration Time:</span>{' '}
                        {reservation.duration
                            ? `${reservation.duration} minutes`
                            : '--'}
                    </li>
                    <li className="text-base">
                        <span className="font-semibold">OpenedAt:</span>{' '}
                        {new Date(reservation.openedAt).toLocaleDateString(
                            'en-US',
                            { year: 'numeric', month: 'long', day: 'numeric' },
                        ) || '--'}
                    </li>
                </ul>
                <div className="flex flex-col gap-3">
                    {reservation.status === 'opened' &&
                        user?.role === 'business' && (
                            <Button
                                onClick={openEdit}
                                variant="black"
                                className="w-full py-3"
                            >
                                Edit Reservation
                            </Button>
                        )}
                    {reservation.status === 'opened' ? (
                        <Button
                            disabled={isLoading}
                            variant="outline"
                            onClick={() =>
                                handleCloseReservation(reservation.id)
                            }
                            className="py-3"
                        >
                            {isLoading ? 'Closing...' : 'Close'}
                        </Button>
                    ) : (
                        <Button
                            disabled={isLoading}
                            variant="black"
                            onClick={() =>
                                handleDeleteReservation(reservation.id)
                            }
                            className="py-3"
                        >
                            {isLoading ? 'Deleting...' : 'Delete'}
                        </Button>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
