import Heading from "@/components/shared/Heading";

const categories = [
    { id: 1, image: "src/assets/sec-1.png", label: "لابتوب" },
    { id: 2, image: "src/assets/sec-2.png", label: "ايباد" },
    { id: 3, image: "src/assets/sec-3.png", label: "ايفون" },
    { id: 4, image: "src/assets/sec-4.png", label: "سماعات" },
    { id: 5, image: "src/assets/sec-5.png", label: "كاميرا" },
    { id: 6, image: "src/assets/sec-6.png", label: "ايربودز" },
    { id: 7, image: "src/assets/product-2.png", label: "ساعة" },
];

const Categories = () => {
    return (
        <section className="py-8">
            <div className="container mx-auto px-4">
                <Heading label='الأقسام' />

                {/* Categories List */}
                <div className="flex overflow-x-auto gap-4 py-4 scrollbar-hide">
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className="flex flex-col items-center bg-gray-100 rounded-lg p-4 w-52 h-56 flex-shrink-0"
                        >
                            <img
                                src={category.image}
                                alt={category.label}
                                loading="lazy"
                                className="w-44 h-44 object-contain"
                            />
                            <p className="mt-2 text-xl sm:text-base font-medium text-gray-700 text-center">
                                {category.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Categories;
