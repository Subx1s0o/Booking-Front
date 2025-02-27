import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function SkeletonLoader() {
    return (
        <ul className="flex flex-col gap-5">
            {Array.from({ length: 5 }, (_, index) => (
                <Skeleton
                    key={index}
                    borderRadius={12}
                    baseColor="#21212105"
                    style={{ padding: '36px 0' }}
                />
            ))}
        </ul>
    );
}
