import Button from './Button';

export default function LoadMoreButton({ loadMore }: { loadMore: () => void }) {
    return (
        <div className="mt-5 text-center">
            <Button variant="black" onClick={loadMore}>
                Load More
            </Button>
        </div>
    );
}
