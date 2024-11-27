import { useState } from "react";

const ProductOption = ({ options, price }) => {
    const [selectedOption, setSelectedOption] = useState("");

    const handleSelect = (option) => {
        setSelectedOption(option.id);
    };

    return (
        <div className="flex flex-col gap-4 my-6">
            {options.map((option) => (
                <label
                    key={option.id}
                    className={`relative flex items-center justify-between h-16 p-2 border rounded-lg cursor-pointer transition ${selectedOption === option.id
                        ? "border-main bg-main bg-opacity-10"
                        : "border-gray-300"
                        }`}
                >
                    {/* Offer Label */}
                    {option.isBestOffer && (
                        <span className="absolute top-0 right-10 -translate-y-1/2 bg-main text-white text-xs px-2 py-1 rounded-xl">
                            العرض الأفضل
                        </span>
                    )}

                    <div className="flex items-center">
                        <input
                            type="radio"
                            name="product-option"
                            className="peer hidden"
                            checked={selectedOption === option.id}
                            onChange={() => handleSelect(option)}
                        />
                        <div
                            className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${selectedOption === option.id
                                ? "border-main bg-main"
                                : "border-gray-300"
                                }`}
                        >
                            {selectedOption === option.id && (
                                <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                            )}
                        </div>
                        <div className="flex items-center mr-2 mb-1">
                            <span className="text-lg font-semibold text-gray-800">
                                {option.title}
                            </span>
                        </div>
                    </div>

                    {/* Price Section */}
                    {price ? <div className="text-right">
                        <p className="text-lg font-bold text-sec ml-2">{option.price} ج</p>
                        <p className="text-sm text-gray-400 line-through">
                            {option.originalPrice} ج
                        </p>
                    </div> :
                        <div className="text-right">
                            {option.img && <img src={option.img} alt={option.id} className="ml-4" />}
                        </div>
                    }
                </label>
            ))}
        </div>
    );
};

export default ProductOption;
