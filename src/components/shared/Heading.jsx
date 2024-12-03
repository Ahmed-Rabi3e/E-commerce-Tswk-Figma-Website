import CountdownTimer from "./CountDown";

const Heading = ({ label, hasCount, children }) => {
    return (
        <div className="flex flex-col sm:flex-row items-start lg:justify-between mb-6 gap-4">
            <div className="relative flex flex-col sm:flex-row items-center sm:items-center gap-2">
                {/* Indicator Bar */}
                <span className="w-1.5 h-8 border-none bg-main rounded-xl absolute right-0" />

                <h1 className="pr-3 lg:pr-4 text-xl sm:text-[27px] font-bold text-sec self-start">
                    {label}
                </h1>

                {/* Timer Section */}
                {hasCount && (
                    <div className="text-base sm:text-lg flex items-center flex-wrap gap-1 mx-4">
                        <div className="text-text_gray mb-2">ينتهي في</div>
                        <CountdownTimer initialTime={30000} />
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
