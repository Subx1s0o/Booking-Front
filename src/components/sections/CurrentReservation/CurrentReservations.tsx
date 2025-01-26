'use client';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchCurrentReservation } from '@/actions/fetchCurrentReservation';
import ErrorFallback from '@/components/common/ErrorFallback';
import { useUserStore } from '@/hooks/useUserStore';
import { useReservationManage } from '@/hooks/useReservationManage';
import CurrentReservationHeader from './CurrentReservationHeader';
import ClientInfo from './ClientInfo';
import BusinessInfo from './BusinessInfo';
import ReservationDetails from './ReservationDetails';
import ReservationActions from './ReservationActions';
import EditReservationModal from './EditReservation';

export default function CurrentReservations({ id }: { id: string }) {
    const { data, isLoading, error } = useQuery({
        queryKey: ['reservation', id],
        queryFn: async () => await fetchCurrentReservation(id),
    });

    const [isOpen, setIsOpen] = useState(false);
    const {
        isLoading: isLoadingManage,
        handleDeleteReservation,
        handleCloseReservation,
    } = useReservationManage();
    const { user } = useUserStore();

    if (!data && isLoading) {
        return (
            <div className="flex min-h-[400px] items-center justify-center">
                <p className="flex items-center gap-2 text-md">
                    loading...
                    <span className="loader" />
                </p>
            </div>
        );
    }

    if (error) {
        return (
            <ErrorFallback message="There was an error loading the reservation." />
        );
    }

    return (
        <div className="flex flex-col">
            <CurrentReservationHeader
                status={data?.status || 'unknown'}
                job={
                    user?.role === 'client'
                        ? data?.businessUser?.job
                        : undefined
                }
            />
            {user?.role === 'business' ? (
                <BusinessInfo
                    firstName={data?.businessUser?.firstName || '--'}
                    secondName={data?.businessUser?.secondName || '--'}
                    email={data?.businessUser?.email || '--'}
                    address={data?.businessUser?.address || '--'}
                    phone={
                        data?.businessUser?.phone
                            ? String(data?.businessUser?.phone)
                            : '--'
                    }
                />
            ) : (
                <ClientInfo
                    firstName={data?.clientUser?.firstName || '--'}
                    secondName={data?.clientUser?.secondName || '--'}
                    email={data?.clientUser?.email || '--'}
                    phone={
                        data?.clientUser?.phone
                            ? String(data?.clientUser?.phone)
                            : '--'
                    }
                />
            )}
            <ReservationDetails
                date={
                    data?.reservationDate
                        ? new Date(data?.reservationDate).toLocaleDateString(
                              'en-GB',
                              {
                                  day: '2-digit',
                                  month: '2-digit',
                                  year: 'numeric',
                              },
                          )
                        : '--'
                }
                time={data?.time || '--'}
                duration={data?.duration ? String(data?.duration) : '--'}
            />
            <ReservationActions
                isLoadingManage={isLoadingManage}
                status={data?.status || 'unknown'}
                onEditClick={() => setIsOpen(true)}
                onCloseClick={() => handleCloseReservation(id)}
                onDeleteClick={() => handleDeleteReservation(id)}
                user={user}
            />
            <EditReservationModal
                isOpen={isOpen}
                data={data}
                close={() => setIsOpen(false)}
            />
        </div>
    );
}
