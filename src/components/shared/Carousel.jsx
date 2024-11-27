import { useState } from "react";
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
    {
        id: 7,
        image: product_1,
        title: "سامسونج الترا جالاكسي. شريحتان اتصال بلون بنفسجي تيتانيوم.",
        price: "2650ج",
        originalPrice: "7000ج",
        discount: "خصم 50%",
        rating: "4.2/5",
    },
    {
        id: 8,
        image: product_1,
        title: "سامسونج الترا جالاكسي. شريحتان اتصال بلون بنفسجي تيتانيوم.",
        price: "2650ج",
        originalPrice: "7000ج",
        discount: "خصم 50%",
        rating: "4.2/5",
    },
];

const Carousel = ({ head, hasCount }) => {
    const [currentPage, setCurrentPage] = useState(0);
    const visibleProducts = 5;

    const totalPages = Math.ceil(products.length / visibleProducts);

    const handlePrev = () => {
        if (currentPage > 0) setCurrentPage(currentPage - 1);
    };

    const handleNext = () => {
        if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
    };

    const getCurrentProducts = () => {
        const start = currentPage * visibleProducts;
        const end = start + visibleProducts;
        return products.slice(start, end);
    };

    return (
        <section className="bg-white py-8 transition-all duration-300">
            <div className="container mx-auto px-4">
                <Heading label={head} hasCount={hasCount}>
                    <div className="flex items-center gap-2">
                        <button
                            onClick={handlePrev}
                            disabled={currentPage === 0}
                            className={`bg-main drop-shadow-lg text-white p-2 rounded-full ${currentPage === 0
                                ? "opacity-50 cursor-not-allowed"
                                : "hover:bg-white hover:text-main"
                                }`}
                        >
                            <HiArrowNarrowRight />
                        </button>
                        <button
                            onClick={handleNext}
                            disabled={currentPage === totalPages - 1}
                            className={`bg-white drop-shadow-lg text-main p-2 rounded-full ${currentPage === totalPages - 1
                                ? "opacity-50 cursor-not-allowed"
                                : "hover:bg-main hover:text-white"
                                }`}
                        >
                            <HiArrowNarrowLeft />
                        </button>
                    </div>
                </Heading>

                {/* Product Carousel */}
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                    {getCurrentProducts().map((product) => (
                        <div
                            key={product.id}
                            className="bg-white rounded-lg shadow-sm shadow-gray-300 p-4 relative"
                        >
                            <div className="absolute bg-red-500 text-white text-xs rounded-tl-lg rounded-br-lg px-2 py-1 top-2 right-2">
                                {product.discount}
                            </div>
                            <img
                                src={product.image}
                                alt={product.title}
                                loading="lazy"
                                className="w-full h-40 object-contain"
                            />

                            {/* Updated Product Details */}
                            <div className="mt-4 overflow-hidden flex flex-col">
                                <Link
                                    to={`/products/${product.id}`}
                                    className="text-sm truncate hover:text-main text-sec font-semibold mb-2"
                                >
                                    {product.title}
                                </Link>
                                <div className="text-red-500 flex items-center justify-between flex-wrap">
                                    <div>
                                        <span className="font-bold text-xl">{product.price}</span>
                                        <span className="line-through text-gray-400 text-sm mr-2">
                                            {product.originalPrice}
                                        </span>
                                    </div>
                                    <div className="flex justify-center items-center text-sm mt-2">
                                        <span className="text-gray-600">{product.rating}</span>
                                        <span>
                                            <HiStar className="fill-yellow-500 mt-1" />
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <button className="absolute top-1/2 translate-y-2 px-1 pt-1 left-2 bg-main text-white rounded-md hover:bg-main/75 transition">
                                <Cart color={true} />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Carousel;
