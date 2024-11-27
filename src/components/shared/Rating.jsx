import { FaStar, FaRegStar } from "react-icons/fa";

const Rating = ({ ratings }) => {
    return (
        <div className="w-full flex flex-col-reverse max-w-md space-y-2 space-y-reverse">
            {Object.entries(ratings).map(([stars, percentage], index) => (
                <div key={index} className="flex items-center">
                    {/* Stars Section */}
                    <div className="flex items-center gap-1 w-24">
                        {/* Filled Stars */}
                        {[...Array(parseInt(stars))].map((_, i) => (
                            <FaStar key={i} className="text-main" size={13} />
                        ))}
                        {/* Empty Stars */}
                        {[...Array(5 - parseInt(stars))].map((_, i) => (
                            <FaRegStar key={i} className="text-gray-400" size={13} />
                        ))}
                    </div>

                    {/* Progress Bar */}
                    <div className="flex-1 h-1.5 bg-gray-300 rounded-full overflow-hidden mx-4">
                        <div
                            className="bg-main h-full"
                            style={{ width: `${percentage}%` }}
                        ></div>
                    </div>

                    {/* Percentage Display */}
                    <div className="text-gray-600 text-sm">{percentage}%</div>
                </div>
            ))}
        </div>
    );
};

export default Rating;
