import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { hero } from "@/assets/index";

const images = [hero, hero, hero, hero, hero];

const HomeSlider = () => {
    return (
        <div className="relative w-full max-w-4xl mx-auto">
            {/* Image Slider */}
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                navigation={{
                    prevEl: ".custom-prev",
                    nextEl: ".custom-next",
                }}
                pagination={{
                    clickable: true,
                    el: ".custom-dots",
                }}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                loop={true}
                className="rounded-lg"
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={image}
                            alt={`Slide ${index + 1}`}
                            className="object-contain w-full rounded-lg"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Dots */}
            <div className="custom-dots flex justify-center lg:justify-start lg:-translate-x-28 gap-0.5 lg:mb-4"></div>
        </div>
    );
};

export default HomeSlider;
