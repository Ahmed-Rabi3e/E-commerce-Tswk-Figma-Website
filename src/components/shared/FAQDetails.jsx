import { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const FAQDetails = ({ label, Icon, description, isLast, open = false }) => {
    const [isOpen, setIsOpen] = useState(open);

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
                    ? "bg-white ring-1 ring-black/5 transition duration-200"
                    : ""
                    } p-6 rounded-3xl`}
            >
                {/* Summary */}
                <div
                    onClick={toggleDetails}
                    className="text-lg cursor-pointer leading-6 flex items-center justify-between text-slate-900 font-semibold select-none w-full text-right"
                >
                    <span className="flex items-center">
                        <span className="mx-2"><Icon size={20} /></span>{label}
                    </span>
                    {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </div>

                {/* Content */}
                {isOpen && (
                    <div className="mt-3 text-sm leading-6 text-gray-500">
                        <p>{description}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FAQDetails;
