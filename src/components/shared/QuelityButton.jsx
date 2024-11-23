import { useState } from "react";
import { HiMinus, HiPlus } from "react-icons/hi";
import { RiDeleteBinLine } from "react-icons/ri";

const QuantityControl = ({ hasDelete }) => {
    const [quantity, setQuantity] = useState(1);

    const handleIncrease = () => {
        setQuantity((prev) => prev + 1);
    };

    const handleDecrease = () => {
        setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
    };

    return (
        <div className="flex items-center gap-2">
            <div className="flex items-center border border-gray-300 rounded-3xl overflow-hidden w-fit">
                <button
                    onClick={handleIncrease}
                    className="text-main hover:bg-gray-100 px-2 py-1"
                >
                    <HiPlus size={18} />
                </button>
                {/* Input Field */}
                <input
                    type="number"
                    value={quantity}
                    readOnly
                    className="w-10 text-center text-sec outline-none text-xl border-x border-gray-300"
                />
                <button
                    onClick={handleDecrease}
                    className="text-main hover:bg-gray-100 px-2 py-1"
                >
                    <HiMinus size={18} />
                </button>
            </div>
            {hasDelete &&
                <button
                    className="text-sec p-2 hover:bg-gray-100 rounded-full focus:outline-none"
                >
                    <RiDeleteBinLine size={20} />
                </button>}
        </div>
    );
};

export default QuantityControl;
