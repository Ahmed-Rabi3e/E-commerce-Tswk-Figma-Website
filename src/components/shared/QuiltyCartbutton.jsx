
import { useState } from "react";
import { HiMinus, HiPlus } from "react-icons/hi";
import { RiDeleteBinLine } from "react-icons/ri";

const QuiltyCartbutton = ({ hasDelete }) => {
    const [quantity, setQuantity] = useState(1);

    const handleIncrease = () => {
        setQuantity((prev) => prev + 1);
    };

    const handleDecrease = () => {
        setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
    };

    return (
        <div className="flex items-center gap-2">
            <div className="flex items-center justify-center h-8">
                <div
                    onClick={handleIncrease}
                    className="text-sec hover:text-white bg-gray-200 hover:bg-main rounded-full p-0.5"
                >
                    <HiPlus size={15} />
                </div>
                {/* Input Field */}
                <input
                    type="number"
                    value={quantity}
                    readOnly
                    className="w-8 ml-0 xl:ml-1 2xl:mr-4 2xl:ml-0 text-center text-sec outline-none text-base"
                />
                <div
                    onClick={handleDecrease}
                    className="text-sec hover:text-white bg-gray-200 hover:bg-main rounded-full p-0.5"
                >
                    <HiMinus size={15} />
                </div>
            </div>

            {/* Delete Option */}
            {hasDelete && (
                <div
                    role="button"
                    className="text-gray-500 p-2 hover:bg-gray-100 rounded-full focus:outline-none cursor-pointer"
                >
                    <RiDeleteBinLine size={18} />
                </div>
            )}
        </div>
    );
};

export default QuiltyCartbutton;
