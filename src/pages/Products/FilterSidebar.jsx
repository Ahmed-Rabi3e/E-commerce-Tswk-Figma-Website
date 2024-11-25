import { useState } from "react";
import { FaCheck } from "react-icons/fa";

const FilterSidebar = ({ setSearchParams, mobile }) => {
    const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });

    const handleCategoryChange = (e) => {
        setSearchParams((prevParams) => {
            prevParams.set("category", e.target.value);
            return prevParams;
        });
    };

    const handleSliderChange = (e) => {
        const { name, value } = e.target;
        setPriceRange((prev) => ({
            ...prev,
            [name]: Number(value),
        }));
        setSearchParams((prevParams) => {
            prevParams.set(name, value);
            return prevParams;
        });
    };

    return (
        <div className={`w-[293px] h-fit p-4 border bg-white rounded-2xl shadow-md ${mobile ? "hidden lg:block" : "flex flex-col"}`}>
            {/* Categories */}
            <h3 className="text-lg font-semibold mb-4">الأقسام</h3>
            <div className="space-y-2 border-b pb-4">
                {[
                    { label: "هواتف", value: "mobiles" },
                    { label: "لابتوبات", value: "laptops" },
                    { label: "تابلت", value: "tablets" },
                ].map(({ label, value }) => (
                    <label
                        key={value}
                        className="flex items-center cursor-pointer relative"
                    >
                        <input
                            type="radio"
                            name="category"
                            value={value}
                            onChange={handleCategoryChange}
                            className="hidden peer"
                        />
                        <span className="peer-checked:block hidden absolute text-white z-10 text-xs right-1">
                            <FaCheck />
                        </span>
                        <span className="w-5 h-5 border-2 border-gray-300 rounded-md flex items-center justify-center peer-checked:border-blue-500 peer-checked:bg-blue-500">
                            <div className="w-2.5 h-2.5 bg-white rounded-md hidden peer-checked:block"></div>
                        </span>
                        <span className="mr-2 text-gray-700 peer-checked:text-main peer-checked:font-bold">
                            {label}
                        </span>
                    </label>
                ))}
            </div>

            {/* Price Range */}
            <h3 className="text-lg font-semibold mt-6 mb-4">السعر</h3>
            <div className="flex flex-col space-y-4">
                {/* Display Selected Range */}
                <div className="flex justify-between text-sm text-gray-600">
                    <span className="flex flex-col text-xs border border-gray-200 rounded-md px-6 py-1">من: <span className="text-sm font-semibold">{priceRange.min} ج</span></span>
                    <span className="flex flex-col text-xs border border-gray-200 rounded-md px-6 py-1">إلى: <span className="text-sm font-semibold">{priceRange.max} ج</span></span>
                </div>
                {/* Range Slider */}
                <div className="flex items-center">
                    <input
                        type="range"
                        name="min"
                        min="0"
                        max="1000"
                        value={priceRange.min}
                        onChange={handleSliderChange}
                        className="w-full accent-main"
                    />
                    <input
                        type="range"
                        name="max"
                        min="0"
                        max="1000"
                        value={priceRange.max}
                        onChange={handleSliderChange}
                        className="w-full accent-main"
                    />
                </div>
            </div>
        </div>
    );
};

export default FilterSidebar;
