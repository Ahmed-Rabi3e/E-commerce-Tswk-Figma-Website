const Heading = ({ label, hasCount, children }) => {
    return (
        <div className="flex flex-col sm:flex-row items-start justify-between mb-6 gap-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                {/* Indicator Bar */}
                <span className="w-1.5 h-8 border-none bg-main rounded-xl absolute" />

                {/* Heading Label */}
                <h1 className="pr-4 text-2xl sm:text-3xl font-bold text-sec">
                    {label}
                </h1>

                {/* Timer Section */}
                {hasCount && (
                    <div className="text-base sm:text-lg flex flex-wrap gap-1 mx-4">
                        <span>ينتهي في</span>
                        <p className="mx-2 text-red-500 flex gap-2">
                            <span className="text-red-500 bg-red-200 font-bold rounded p-1">12</span>:
                            <span className="text-red-500 bg-red-200 font-bold rounded p-1">45</span>:
                            <span className="text-red-500 bg-red-200 font-bold rounded p-1">08</span>
                        </p>
                    </div>
                )}
            </div>

            {/* Right Section */}
            <div className="self-end">
                {children}
            </div>
        </div>
    );
};

export default Heading;
