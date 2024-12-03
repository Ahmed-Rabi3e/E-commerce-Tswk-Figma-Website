import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import Heading from "./Heading";
import { HiArrowNarrowLeft, HiArrowNarrowRight, HiStar } from "react-icons/hi";
import { product_1, product_2, product_3, product_4, product_5 } from "@/assets/index";
import Cart from "./Cart";
import { Link } from "react-router-dom";

const products = [
    {
        id: 1,
        image: product_1,
        title: "سامسونج الترا جالاكسي. شريحتان اتصال بلون بنفسجي تيتانيوم.",
        price: "2650ج",
        originalPrice: "7000ج",
        discount: "خصم 50%",
        rating: "4.2/5",
    },
    {
        id: 2,
        image: product_2,
        title: "سامسونج الترا جالاكسي. شريحتان اتصال بلون بنفسجي تيتانيوم.",
        price: "2650ج",
        originalPrice: "7000ج",
        discount: "خصم 50%",
        rating: "4.2/5",
    },
    {
        id: 3,
        image: product_3,
        title: "سامسونج الترا جالاكسي. شريحتان اتصال بلون بنفسجي تيتانيوم.",
        price: "2650ج",
        originalPrice: "7000ج",
        discount: "خصم 50%",
        rating: "4.2/5",
    },
    {
        id: 4,
        image: product_4,
        title: "سامسونج الترا جالاكسي. شريحتان اتصال بلون بنفسجي تيتانيوم.",
        price: "2650ج",
        originalPrice: "7000ج",
        discount: "خصم 50%",
        rating: "4.2/5",
    },
    {
        id: 5,
        image: product_5,
        title: "سامسونج الترا جالاكسي. شريحتان اتصال بلون بنفسجي تيتانيوم.",
        price: "2650ج",
        originalPrice: "7000ج",
        discount: "خصم 50%",
        rating: "4.2/5",
    },
    {
        id: 6,
        image: product_5,
        title: "سامسونج الترا جالاكسي. شريحتان اتصال بلون بنفسجي تيتانيوم.",
        price: "2650ج",
        originalPrice: "7000ج",
        discount: "خصم 50%",
        rating: "4.2/5",
    },
];

const Carousel = ({ head, hasCount }) => {
    const swiperRef = useRef(null); // Reference to Swiper instance
    const [isBeginning, setIsBeginning] = useState(true); // Tracks if at the beginning
    const [isEnd, setIsEnd] = useState(false); // Tracks if at the end

    return (
        <section className="bg-white py-8 transition-all duration-300">
            <div className="container mx-auto px-4 relative">
                <Heading label={head} hasCount={hasCount}>
                    {/* Custom Navigation Buttons */}
                    <div className="flex items-center gap-2 absolute left-0 top-1">
                        <button
                            onClick={() => swiperRef.current?.slidePrev()}
                            disabled={isBeginning}
                            className={`bg-main drop-shadow-sm text-white p-2 rounded-full ${isBeginning
                                ? "opacity-50 cursor-not-allowed"
                                : "hover:bg-white hover:text-main"
                                }`}
                        >
                            <HiArrowNarrowRight />
                        </button>
                        <button
                            onClick={() => swiperRef.current?.slideNext()}
                            disabled={isEnd}
                            className={`bg-white drop-shadow-sm text-main p-2 rounded-full ${isEnd
                                ? "opacity-50 cursor-not-allowed"
                                : "hover:bg-main hover:text-white"
                                }`}
                        >
                            <HiArrowNarrowLeft />
                        </button>
                    </div>
                </Heading>

                {/* Swiper Carousel */}
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={20}
                    slidesPerView={2}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                        setIsBeginning(swiper.isBeginning);
                        setIsEnd(swiper.isEnd);
                    }}
                    onSlideChange={(swiper) => {
                        setIsBeginning(swiper.isBeginning);
                        setIsEnd(swiper.isEnd);
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 20,
                        },
                    }}
                >
                    {products.map((product) => (
                        <SwiperSlide key={product.id}>
                            <div className="bg-white rounded-lg shadow-product p-4 relative">
                                <div className="absolute bg-red-500 text-white text-xs rounded-3xl px-2 py-1 top-2 right-2">
                                    {product.discount}
                                </div>
                                <Link to={`/products/${product.id}`}>
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        loading="lazy"
                                        className="w-full h-40 object-contain"
                                    />
                                </Link>

                                {/* Product Details */}
                                <div className="mt-4 overflow-hidden flex flex-col">
                                    <Link
                                        to={`/products/${product.id}`}
                                        className="text-sm truncate text-sec font-semibold mb-2"
                                    >
                                        {product.title}
                                    </Link>
                                    <div className="text-red-500 flex items-center justify-between flex-wrap">
                                        <div>
                                            <span className="font-bold text-xl">
                                                {product.price}
                                            </span>
                                            <span className="line-through text-gray-400 text-sm mr-2">
                                                {product.originalPrice}
                                            </span>
                                        </div>
                                        <div className="flex justify-center items-center text-sm mt-2">
                                            <span className="text-gray-600">
                                                {product.rating}
                                            </span>
                                            <span>
                                                <HiStar className="fill-yellow-500 mt-1" />
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute top-1/2 translate-y-2 px-1 pt-1 left-2 bg-main text-white rounded-md hover:bg-main/75 transition">
                                    <Cart color={true} />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Carousel;
