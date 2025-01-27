import Button from '@/components/ui/Button';
import { User } from 'types/user';

interface ReservationActionsProps {
    isLoadingManage: boolean;
    status: string;
    onCloseClick: () => void;
    onDeleteClick: () => void;
}

const ReservationActions = ({
    isLoadingManage,
    status,
    onCloseClick,
    onDeleteClick,
}: ReservationActionsProps) => (
    <div className="mb-5 flex items-center justify-center gap-5">
        {status === 'opened' ? (
            <>
                <Button variant="outline" type="submit" className="py-3">
                    Edit
                </Button>
                <Button
                    variant="black"
                    type="button"
                    disabled={isLoadingManage}
                    onClick={onCloseClick}
                    className="py-3"
                >
                    {isLoadingManage ? 'Closing...' : 'Close'}
                </Button>
            </>
        ) : (
            <Button
                type="button"
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
