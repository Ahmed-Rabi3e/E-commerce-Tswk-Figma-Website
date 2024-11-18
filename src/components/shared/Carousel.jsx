import { useState } from "react";
import Heading from "./Heading";
import { HiArrowNarrowLeft, HiArrowNarrowRight, HiStar } from "react-icons/hi";
import { FaCartShopping } from "react-icons/fa6";

const products = [
    {
        id: 1,
        image: "src/assets/product-1.png",
        title: "سامسونج الترا جالاكسي. شريحتان اتصال بلون بنفسجي تيتانيوم.",
        price: "2650ج",
        originalPrice: "7000ج",
        discount: "خصم 50%",
        rating: "4.2/5",
    },
    {
        id: 2,
        image: "src/assets/product-2.png",
        title: "سامسونج الترا جالاكسي. شريحتان اتصال بلون بنفسجي تيتانيوم.",
        price: "2650ج",
        originalPrice: "7000ج",
        discount: "خصم 50%",
        rating: "4.2/5",
    },
    {
        id: 3,
        image: "src/assets/product-3.png",
        title: "سامسونج الترا جالاكسي. شريحتان اتصال بلون بنفسجي تيتانيوم.",
        price: "2650ج",
        originalPrice: "7000ج",
        discount: "خصم 50%",
        rating: "4.2/5",
    },
    {
        id: 4,
        image: "src/assets/product-4.png",
        title: "سامسونج الترا جالاكسي. شريحتان اتصال بلون بنفسجي تيتانيوم.",
        price: "2650ج",
        originalPrice: "7000ج",
        discount: "خصم 50%",
        rating: "4.2/5",
    },
    {
        id: 5,
        image: "src/assets/product-5.png",
        title: "سامسونج الترا جالاكسي. شريحتان اتصال بلون بنفسجي تيتانيوم.",
        price: "2650ج",
        originalPrice: "7000ج",
        discount: "خصم 50%",
        rating: "4.2/5",
    },
    {
        id: 6,
        image: "src/assets/product-5.png",
        title: "سامسونج الترا جالاكسي. شريحتان اتصال بلون بنفسجي تيتانيوم.",
        price: "2650ج",
        originalPrice: "7000ج",
        discount: "خصم 50%",
        rating: "4.2/5",
    },
    {
        id: 7,
        image: "src/assets/product-5.png",
        title: "سامسونج الترا جالاكسي. شريحتان اتصال بلون بنفسجي تيتانيوم.",
        price: "2650ج",
        originalPrice: "7000ج",
        discount: "خصم 50%",
        rating: "4.2/5",
    },
    {
        id: 8,
        image: "src/assets/product-5.png",
        title: "سامسونج الترا جالاكسي. شريحتان اتصال بلون بنفسجي تيتانيوم.",
        price: "2650ج",
        originalPrice: "7000ج",
        discount: "خصم 50%",
        rating: "4.2/5",
    },
];

const Carousel = ({head,hasCount}) => {
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
        <section className="bg-white py-8">
        <div className="container mx-auto px-4">
            <Heading label={head} hasCount={hasCount}>
                <div className="flex items-center gap-2">
                    {/* Previous Button */}
                    <button
                        onClick={handlePrev}
                        disabled={currentPage === 0}
                        className={`bg-white drop-shadow-lg text-main p-2 rounded-full ${
                            currentPage === 0
                                ? "opacity-50 cursor-not-allowed"
                                : "hover:bg-main hover:text-white"
                        }`}
                    >
                        <HiArrowNarrowRight />
                    </button>
                    {/* Next Button */}
                    <button
                        onClick={handleNext}
                        disabled={currentPage === totalPages - 1}
                        className={`bg-white drop-shadow-lg text-main p-2 rounded-full ${
                            currentPage === totalPages - 1
                                ? "opacity-50 cursor-not-allowed"
                                : "hover:bg-main hover:text-white"
                        }`}
                    >
                        <HiArrowNarrowLeft />
                    </button>
                </div>
            </Heading>
    
            {/* Product Carousel */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {getCurrentProducts().map((product) => (
                    <div
                        key={product.id}
                        className="bg-white rounded-lg shadow-md p-4 relative w-full"
                    >
                        {/* Discount Badge */}
                        <div className="absolute bg-red-500 text-white text-xs rounded-tl-lg rounded-br-lg px-2 py-1 top-2 right-2">
                            {product.discount}
                        </div>
    
                        {/* Product Image */}
                        <img
                            src={product.image}
                            alt={product.title}
                            loading="lazy"
                            className="w-full h-40 object-contain"
                        />
    
                        {/* Product Details */}
                        <div className="mt-4">
                            <h3 className="text-sm text-sec font-semibold mb-2">
                                {product.title}
                            </h3>
                            <div className="text-red-500 flex items-center justify-between">
                                <div>
                                    <span className="font-bold text-xl">{product.price}</span>
                                    <span className="line-through text-gray-400 text-sm mx-2">
                                        {product.originalPrice}
                                    </span>
                                </div>
                                <div className="flex justify-center items-center">
                                    <span className="text-gray-600">{product.rating}</span>{" "}
                                    <HiStar className="fill-yellow-500" />
                                </div>
                            </div>
                        </div>
    
                        {/* Add to Cart */}
                        <button className="absolute top-1/2 left-4 bg-main text-white p-2 rounded-md hover:bg-main/75 transition">
                            <FaCartShopping />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    </section>
    
    );
};

export default Carousel;
