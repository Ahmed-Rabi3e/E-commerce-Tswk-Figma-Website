import { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const FAQDetails = ({ label, Icon, description, isLast }) => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleDetails = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div
            className={`mx-auto ${isLast ? "" : "border-b border-gray-300"
                } last:border-none`}
        >
            <div
                className={`${isOpen
                    ? "bg-white ring-1 ring-black/5 shadow-lg transition duration-200"
                    : ""
                    } p-6 rounded-lg`}
            >
                {/* Summary */}
                <button
                    onClick={toggleDetails}
                    className="text-sm leading-6 flex items-center justify-between text-slate-900 dark:text-white font-semibold select-none w-full text-right"
                >
                    <span className="flex items-center">
                        <span className="mx-2"><Icon size={20} /></span>{label}
                    </span>
                    {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </button>

                {/* Content */}
                {isOpen && (
                    <div className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                        <p>{description}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FAQDetails;
