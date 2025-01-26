import Button from '@/components/ui/Button';
import { User } from 'types/user';

interface ReservationActionsProps {
    isLoadingManage: boolean;
    status: string;
    onEditClick: () => void;
    onCloseClick: () => void;
    onDeleteClick: () => void;
    user: User | null;
}

const ReservationActions = ({
    isLoadingManage,
    status,
    onEditClick,
    onCloseClick,
    onDeleteClick,
    user,
}: ReservationActionsProps) => (
    <div className="fixed bottom-[3%] left-1/2 flex w-[calc(100%-40px)] -translate-x-1/2 items-center justify-center gap-5">
        {status === 'opened' && user?.role === 'business' && (
            <Button variant="outline" onClick={onEditClick} className="py-3">
                Edit
            </Button>
        )}
        {status === 'opened' ? (
            <Button
                variant="black"
                disabled={isLoadingManage}
                onClick={onCloseClick}
                className="py-3"
            >
                {isLoadingManage ? 'Closing...' : 'Close'}
            </Button>
        ) : (
            <Button
                variant="black"
                disabled={isLoadingManage}
                onClick={onDeleteClick}
                className="py-3"
            >
                {isLoadingManage ? 'Deleting...' : 'Delete'}
            </Button>
        )}
    </div>
);

export default ReservationActions;
