import { useState } from "react";
import { hero } from "@/assets/index";

const HomeSlider = () => {
    const images = [
        hero,
        hero,
        hero,
        hero,
        hero
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="flex flex-col items-center w-full max-w-4xl mx-auto transition-all duration-500">
            {/* Slider Images */}
            <div className="relative w-full overflow-hidden rounded-lg">
                <img
                    src={images[currentIndex]}
                    loading="lazy"
                    alt={`Slide ${currentIndex + 1}`}
                    className="w-full object-contain transition-transform duration-500 ease-in-out"
                />
            </div>

            {/* Dots Navigation */}
            <div className="flex justify-center lg:self-start lg:-translate-x-28 gap-2 my-4">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleDotClick(index)}
                        className={`w-2 h-2 rounded-full ${currentIndex === index ? "bg-blue-500" : "bg-gray-300"
                            }`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default HomeSlider;
