const SkeletonLoader = () => {
    return (
        <div className="p-4 animate-pulse space-y-6">
            {/* Hero Section Skeleton */}
            <div className="h-48 bg-gray-200 rounded"></div>

            {/* Content Skeleton */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {Array.from({ length: 6 }).map((_, index) => (
                    <div
                        key={index}
                        className="h-40 bg-gray-200 rounded flex flex-col space-y-2"
                    >
                        {/* Title Skeleton */}
                        <div className="h-4 bg-gray-300 rounded w-3/4 mx-4 mt-4"></div>
                        {/* Subtitle Skeleton */}
                        <div className="h-4 bg-gray-300 rounded w-1/2 mx-4"></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkeletonLoader;
