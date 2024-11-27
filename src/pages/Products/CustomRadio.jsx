import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const CustomRadioButtons = ({ label, options, queryKey }) => {
    const navigate = useNavigate();
    const location = useLocation();

    // Extract the current query parameters
    const queryParams = new URLSearchParams(location.search);

    // Get the initial value from the URL for this queryKey
    const initialValue = queryParams.get(queryKey) || "";

    const [selectedValue, setSelectedValue] = useState(initialValue);

    const handleChange = (value) => {
        setSelectedValue(value);

        // Update only the relevant query parameter
        if (value) {
            queryParams.set(queryKey, value); // Update the specific key
        } else {
            queryParams.delete(queryKey); // Remove key if no value
        }

        // Navigate to the updated URL
        navigate(`?${queryParams.toString()}`);
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
                            name={`custom-radio-${queryKey}`}
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
