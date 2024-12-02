import { cn } from "@/lib/utils";
import { hero } from "@/assets/index";
import { useState, useEffect, useCallback } from "react";

const images = [
    hero,
    hero,
    hero,
    hero,
    hero,
];

const HomeSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const goToSlide = useCallback((index) => {
        if (index !== currentIndex && !isTransitioning) {
            setIsTransitioning(true);
            setDirection(index > currentIndex ? 1 : -1);
            setTimeout(() => {
                setCurrentIndex(index);
            }, 300);
        }
    }, [currentIndex, isTransitioning]);

    const nextSlide = useCallback(() => {
        const newIndex = (currentIndex + 1) % images.length;
        goToSlide(newIndex);
    }, [currentIndex, goToSlide]);

    const prevSlide = useCallback(() => {
        const newIndex = (currentIndex - 1 + images.length) % images.length;
        goToSlide(newIndex);
    }, [currentIndex, goToSlide]);

    useEffect(() => {
        if (isTransitioning) {
            const timer = setTimeout(() => {
                setIsTransitioning(false);
                setDirection(0);
            }, 600);
            return () => clearTimeout(timer);
        }
    }, [isTransitioning]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowLeft') prevSlide();
            if (e.key === 'ArrowRight') nextSlide();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [nextSlide, prevSlide]);

    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, [nextSlide]);

    return (
        <div className="relative w-full max-w-4xl mx-auto">
            {/* Image Container */}
            <div className="overflow-hidden rounded-lg relative aspect-[4/3]">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={cn(
                            "absolute top-0 left-0 w-full h-full transition-transform duration-500 ease-in-out",
                            isTransitioning ? "pointer-events-none" : "pointer-events-auto"
                        )}
                        style={{
                            transform: `translateX(${(index - currentIndex + direction) * 100}%)`,
                            zIndex: index === currentIndex ? 10 : 0,
                        }}
                    >
                        <img
                            src={image}
                            alt={`Slide ${index + 1}`}
                            className="object-contain"
                        />
                    </div>
                ))}
            </div>

            {/* Dots Navigation */}
            <div className="flex justify-center lg:justify-start lg:-translate-x-28  gap-1 mt-4">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={cn(
                            "w-2 h-2 rounded-full transition duration-700",
                            currentIndex === index ? "bg-main" : "bg-gray-300",
                            isTransitioning ? "pointer-events-none" : "pointer-events-auto"
                        )}
                        disabled={isTransitioning}
                        aria-label={`Go to slide ${index + 1}`}
                        aria-current={currentIndex === index ? "true" : "false"}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default HomeSlider;

