import { useState } from "react";

const CustomRadioButtons = ({ label, options }) => {
    const [selectedValue, setSelectedValue] = useState("");

    const handleChange = (value) => {
        setSelectedValue(value);
    };

    return (
        <div className="my-2">
            <h1 className="mb-2 text-lg text-text_gray">{label}</h1>
            <div className="flex gap-2 flex-wrap">
                {options.map((option, index) => (
                    <label key={index} className="relative cursor-pointer">
                        {/* Hidden Radio Input */}
                        <input
                            type="radio"
                            name="custom-radio"
                            value={option}
                            className="hidden"
                            onChange={() => handleChange(option)}
                            checked={selectedValue === option}
                        />

                        {/* Border */}
                        <div
                            className={`w-28 h-10 flex items-center justify-center rounded-lg border-2 text-center ${selectedValue === option
                                    ? "border-main bg-main bg-opacity-10 text-main"
                                    : "border-gray-300 text-gray-500"
                                }`}
                        >
                            {option}
                        </div>
                    </label>
                ))}
            </div>
        </div>
    );
};

export default CustomRadioButtons;
