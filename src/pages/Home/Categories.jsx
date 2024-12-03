import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import Heading from "@/components/shared/Heading";
import {
    category_1,
    category_2,
    category_3,
    category_4,
    category_5,
    category_6,
    category_7,
} from "@/assets/index";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";

const categories = [
    { id: 1, image: category_1, label: "لابتوب" },
    { id: 2, image: category_2, label: "ايباد" },
    { id: 3, image: category_3, label: "ايفون" },
    { id: 4, image: category_4, label: "سماعات" },
    { id: 5, image: category_5, label: "كاميرا" },
    { id: 6, image: category_6, label: "ايربودز" },
    { id: 7, image: category_7, label: "ساعة" },
];

const Categories = () => {
    return (
        <section className="py-8">
            <div className="container mx-auto px-4 relative">
                <Heading label="الأقسام" />

                {/* Swiper Carousel */}
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={20}
                    slidesPerView={2} // Default for smaller screens
                    navigation={{
                        prevEl: ".custom-prev",
                        nextEl: ".custom-next",
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 20,
                        },
                    }}
                    className="py-4"
                >
                    {categories.map((category) => (
                        <SwiperSlide key={category.id}>
                            <div className="flex flex-col items-center bg-gray-100 rounded-lg p-4 w-full h-56">
                                <img
                                    src={category.image}
                                    alt={category.label}
                                    loading="lazy"
                                    className="w-44 h-44 object-contain"
                                />
                                <p className="text-xl sm:text-base font-bold text-gray-700 text-center">
                                    {category.label}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Navigation Buttons */}
                <div className="flex items-center gap-2 absolute top-0 left-2">
                    <button
                        className="custom-prev bg-main text-white p-2 rounded-full hover:bg-main/80 transition"
                    >
                        <HiArrowNarrowRight />
                    </button>
                    <button
                        className="custom-next bg-white text-main p-2 rounded-full hover:bg-main hover:text-white transition"
                    >
                        <HiArrowNarrowLeft />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Categories;
