import Heading from "@/components/shared/Heading";
import {
    category_1, category_3, category_2, category_4, category_5, category_6, category_7
} from '@/assets/index'

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
                            <p className="text-xl sm:text-base font-bold text-gray-700 text-center">
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
