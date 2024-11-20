import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Pagination = ({ totalPages = 5 }) => {
    const [currentPage, setCurrentPage] = useState(1);

    // Handle page change
    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center space-y-4 my-6">

            <div className="flex items-center space-x-2">
                {/* Previous Button */}
                <button
                    className={`flex items-center p-3 text-main ml-2 bg-white shadow-md rounded-md hover:bg-main/75 ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    <FaChevronRight className="" />
                </button>

                {/* Static Page Numbers */}
                {Array.from({ length: totalPages }).map((_, index) => {
                    const page = index + 1;
                    return (
                        <button
                            key={page}
                            className={`flex items-center justify-center px-4 py-2 rounded-md ${currentPage === page
                                ? "bg-blue-500 text-white"
                                : "text-gray-700 hover:bg-gray-100"
                                }`}
                            onClick={() => handlePageChange(page)}
                        >
                            {page}
                        </button>
                    );
                })}

                {/* Next Button */}
                <button
                    className={`flex items-center p-3 mr-2 text-main bg-white shadow-md rounded-md hover:bg-main/75 ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    <FaChevronLeft className="" />
                </button>
            </div>
            {/* Total Pages Info */}
            <p className="text-gray-600">
                Page <span className="font-bold">{currentPage}</span> of{" "}
                <span className="font-bold">{totalPages}</span>
            </p>
        </div>
    );
};

export default Pagination;
