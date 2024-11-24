import { useState } from "react";

const VirticalRadio = ({ label, options }) => {
    const [selectedValue, setSelectedValue] = useState("");

    const handleChange = (value) => {
        setSelectedValue(value);
    };

    return (
        <div className="my-2">
            <h1 className="mb-2 text-lg text-text_gray">{label}</h1>
            <div className={`flex flex-col gap-4`}>
                {options.map((option, index) => (
                    <label key={index} className="relative cursor-pointer">
                        {/* Add Discount Label for the Second Option */}
                        {index === 1 && (
                            <span className="absolute top-0 right-10 -translate-y-1/2 bg-main text-white text-xs px-2 py-1 rounded-xl">
                                العرض الأفضل
                            </span>
                        )}

                        {/* Hidden Radio Input */}
                        <input
                            type="radio"
                            name="custom-radio"
                            value={option}
                            className="absolute top-1/2 right-2 -translate-y-1/2"
                            onChange={() => handleChange(option)}
                            checked={selectedValue === option}
                        />

                        {/* Border */}
                        <div
                            className={`w-full h-14 flex items-center justify-between text-xl sm:text-lg rounded-lg border-2 px-4 ${selectedValue === option
                                ? "border-main bg-main bg-opacity-10 text-main"
                                : "border-gray-300 text-sec"
                                }`}
                        >
                            <span className="mr-8">{option}</span>
                            <div className="flex flex-col">
                                <span className="mr-8 text-lg font-semibold">6000ج</span>
                                <span className="mr-8 text-sm">7000ج</span>
                            </div>
                        </div>
                    </label>
                ))}
            </div>
        </div>
    );
};

export default VirticalRadio;
